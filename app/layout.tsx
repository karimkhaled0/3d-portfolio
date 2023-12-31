import type { Metadata } from "next";
import "./globals.css";
import "./splash.scss";
import { headers } from "next/headers";
import MobileHeader from "@/components/mobile/header/MobileHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const isMobile = userAgent!.includes("Mobile");
  if (isMobile) {
    return (
      <html lang="en">
        <body className="min-h-screen font-aeonik scrollbar-none cursor-none">
          <MobileHeader />
          <div className="relative z-30">{children}</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="min-h-screen font-aeonik bg-white scrollbar-none">
        {/* Splash screen */}
        <div className="splash">
          <div className="splash_logo">KARIM</div>
          <div className="splash_svg">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" />
            </svg>
          </div>
          <div className="splash_minimize">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" />
            </svg>
          </div>
        </div>

        <div id="children" className="relative z-40">
          {children}
        </div>
      </body>
    </html>
  );
}
