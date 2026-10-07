import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer, MobileCallBar } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Los Angeles Personal Injury Lawyer | ${site.titleSuffix}`,
    template: `%s | ${site.titleSuffix}`,
  },
  description:
    "California personal injury law firm with offices in Los Angeles, San Francisco and Oakland. Free consultation. No fees unless we win.",
  applicationName: site.shortName,
  formatDetection: { telephone: true, address: true, email: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0e10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* GA4 placeholder. Set NEXT_PUBLIC_GA_ID in Vercel to replace G-XXXXXXXXXX. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
        </Script>
        {/* Without JavaScript, scroll-reveal content must still be visible. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<style>[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}</style>',
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
          <MobileCallBar />
        </MotionProvider>
        <ChatWidget />
      </body>
    </html>
  );
}
