import Script from "next/script";

const WIDGET_ID = "6ac3c19a20b336636fc0e4cb";

/**
 * LeadConnector chat widget, loaded on every page from the root layout.
 * The loader reads its two data attributes to find the widget, so keep them
 * on the tag. It copies the tag's other attributes onto <chat-widget> too,
 * so do not give the script an `id`. `lazyOnload` waits until the page is
 * idle so chat never competes with the hero for bandwidth.
 *
 * Launcher colour, greeting, position and when it appears (currently on the
 * visitor's first scroll or tap) are set in the LeadConnector dashboard.
 * On phones the launcher sits on the "Call Now" bar; see MobileCallBar.
 */
export function ChatWidget() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGET_ID}
      strategy="lazyOnload"
    />
  );
}
