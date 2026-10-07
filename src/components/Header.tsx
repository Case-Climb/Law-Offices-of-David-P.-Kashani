"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { areaNav, mainNav, practiceNav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { cx } from "./ui";

type MenuKey = "practice" | "areas";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close any open menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // A sentinel at the very top of the page tells us when the hero has started
  // to scroll away. An IntersectionObserver reports the state on load, on
  // restored scroll positions and when a background tab becomes visible, so it
  // cannot miss a change the way a scroll listener can.
  const sentinelRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <span
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-4 w-px"
      />
      <header
        className={cx(
          "on-dark fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
          scrolled || openMenu
            ? "bg-ink shadow-[0_1px_0_rgb(255_255_255/0.08)]"
            : "bg-transparent",
        )}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-5 xl:h-[5.25rem]">
          <Logo compactOnDesktop />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center">
              {mainNav.map((item) =>
                item.menu ? (
                  <DesktopMenu
                    key={item.href}
                    label={item.label}
                    active={
                      item.menu === "practice"
                        ? isActive("/practice-areas") ||
                          practiceNav.some((p) => isActive(`/${p.slug}`))
                        : areaNav.some((a) => isActive(a.href))
                    }
                    open={openMenu === item.menu}
                    onOpen={() => setOpenMenu(item.menu!)}
                    onClose={() =>
                      setOpenMenu((cur) => (cur === item.menu ? null : cur))
                    }
                    wide={item.menu === "practice"}
                  >
                    {item.menu === "practice" ? (
                      <PracticePanel onNavigate={closeAll} />
                    ) : (
                      <AreasPanel onNavigate={closeAll} />
                    )}
                  </DesktopMenu>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cx(
                        "relative block px-2.5 py-2 text-[0.9375rem] font-medium whitespace-nowrap text-white/90 hover:text-white",
                        "after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-red after:transition-transform hover:after:scale-x-100",
                        isActive(item.href) && "text-white after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phone.href}
              className="btn btn-red btn-sm hidden whitespace-nowrap md:inline-flex"
              aria-label={`Call ${site.phone.display}`}
            >
              <Phone aria-hidden="true" className="size-4" strokeWidth={2.25} />
              {site.phone.display}
            </a>
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm hidden whitespace-nowrap xl:inline-flex"
            >
              Instant Estimate
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-[3px] border border-white/40 text-white hover:border-white xl:hidden"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <MobileOverlay onClose={closeAll} isActive={isActive} />
        ) : null}
      </header>
    </>
  );
}

/* ---------- Desktop dropdowns ---------- */

function DesktopMenu({
  label,
  active,
  open,
  onOpen,
  onClose,
  wide,
  children,
}: {
  label: string;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  wide?: boolean;
  children: ReactNode;
}) {
  const panelId = useId();
  const btnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Hovering opens the panel; a click right after must not toggle it shut again.
  const openedByHover = useRef(false);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(onClose, 140);
  };

  useEffect(() => () => cancelClose(), []);

  const onKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Escape" && open) {
      e.stopPropagation();
      onClose();
      btnRef.current?.focus();
    }
  };

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        if (!open) openedByHover.current = true;
        onOpen();
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={onKeyDown}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          onClose();
      }}
    >
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (open && !openedByHover.current) onClose();
          else onOpen();
          openedByHover.current = false;
        }}
        className={cx(
          "relative flex items-center gap-1 px-2.5 py-2 text-[0.9375rem] font-medium whitespace-nowrap text-white/90 hover:text-white",
          "after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-red after:transition-transform",
          (active || open) && "text-white after:scale-x-100",
        )}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cx(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className={cx(
          "absolute top-full pt-3",
          wide ? "left-1/2 w-[44rem] -translate-x-1/2" : "left-0 w-64",
        )}
      >
        <div className="rounded-[3px] border-t-[3px] border-red bg-white p-3 text-ink shadow-[0_24px_60px_-12px_rgb(0_0_0/0.45)]">
          {children}
        </div>
      </div>
    </li>
  );
}

function PracticePanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-1">
        {practiceNav.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              onClick={onNavigate}
              className="block rounded-[3px] px-4 py-3 hover:bg-stone focus-visible:outline-red"
            >
              <span className="block text-[1.0625rem] font-semibold text-ink">
                {p.label}
              </span>
              <span className="mt-0.5 block text-sm leading-snug text-muted">
                {p.short}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-2 border-t border-line px-4 pt-3 pb-1">
        <Link
          href="/practice-areas"
          onClick={onNavigate}
          className="text-[0.9375rem] font-semibold text-red hover:text-red-deep focus-visible:outline-red"
        >
          View all practice areas
        </Link>
      </div>
    </div>
  );
}

function AreasPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <ul>
      {areaNav.map((a) => (
        <li key={a.href}>
          <Link
            href={a.href}
            onClick={onNavigate}
            className="block rounded-[3px] px-4 py-2.5 text-[0.9375rem] font-medium text-ink hover:bg-stone focus-visible:outline-red"
          >
            {a.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Mobile full-screen overlay ---------- */

function MobileOverlay({
  onClose,
  isActive,
}: {
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key !== "Tab" || !ref.current) return;
    const focusable = ref.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
    );
    const visible = Array.from(focusable).filter(
      (el) => el.offsetParent !== null,
    );
    if (!visible.length) return;
    const first = visible[0];
    const last = visible[visible.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const linkClass = "block py-3 text-2xl font-semibold text-white";
  const subLinkClass =
    "block py-2.5 text-[1.0625rem] text-mist hover:text-white";

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      onKeyDown={onKeyDown}
      className="on-dark fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink xl:hidden"
    >
      <div className="container-site flex h-[4.5rem] flex-none items-center justify-between">
        <Logo onClick={onClose} />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid size-11 place-items-center rounded-[3px] border border-white/40 text-white hover:border-white"
        >
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      <nav aria-label="Mobile" className="container-site flex-1 pt-4 pb-8">
        <ul className="divide-y divide-ink-line border-y border-ink-line">
          {mainNav.map((item) =>
            item.menu ? (
              <li key={item.href}>
                <details className="group">
                  <summary
                    className={cx(
                      linkClass,
                      "flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-6 text-red-soft transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="pb-4 pl-1">
                    {item.menu === "practice" ? (
                      <>
                        {practiceNav.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/${p.slug}`}
                              onClick={onClose}
                              className={subLinkClass}
                            >
                              {p.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/practice-areas"
                            onClick={onClose}
                            className={cx(
                              subLinkClass,
                              "font-semibold text-white",
                            )}
                          >
                            All practice areas
                          </Link>
                        </li>
                      </>
                    ) : (
                      areaNav.map((a) => (
                        <li key={a.href}>
                          <Link
                            href={a.href}
                            onClick={onClose}
                            className={subLinkClass}
                          >
                            {a.label}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="mt-8 grid gap-3">
          <a href={site.phone.href} className="btn btn-red">
            <Phone
              aria-hidden="true"
              className="size-[1.05em]"
              strokeWidth={2.25}
            />
            Call {site.phone.display}
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="btn btn-outline-light"
          >
            Free Case Review
          </Link>
          <a
            href={site.estimateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Instant Estimate
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-mist">
          <span lang="es">Se habla español.</span>{" "}
          <span lang="fa" dir="rtl">
            فارسی صحبت می‌کنیم.
          </span>
        </p>
      </nav>
    </div>
  );
}
