import Image from "next/image";
import Link from "next/link";
import { cx } from "./ui";

/**
 * The firm's logo. `logo-dark-text.png` is the file the firm supplied;
 * `logo-light-text.png` is the same artwork with the wordmark turned white
 * for dark backgrounds. Both are 550x101 rasters: swap in SVGs if the firm
 * has them.
 */
export function Logo({
  onDark = true,
  className,
  onClick,
  compactOnDesktop = false,
}: {
  onDark?: boolean;
  className?: string;
  onClick?: () => void;
  /** Slightly smaller at desktop widths, where the full nav needs the room. */
  compactOnDesktop?: boolean;
}) {
  return (
    <Link href="/" onClick={onClick} className={cx("inline-flex flex-none items-center", className)}>
      <Image
        src={onDark ? "/brand/logo-light-text.png" : "/brand/logo-dark-text.png"}
        alt="Law Offices of David P. Kashani, APLC, home"
        width={550}
        height={101}
        sizes="260px"
        className={cx("h-10 w-auto xs:h-11", compactOnDesktop ? "xl:h-11" : "sm:h-12")}
      />
    </Link>
  );
}
