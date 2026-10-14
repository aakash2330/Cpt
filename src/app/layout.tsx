import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar/Navbar";
import { ThemeProvider } from "next-themes";
import { Footer } from "./_footer/page";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const googleAnalyticsId = "G-MGQ98QT69Q";

export const metadata: Metadata = {
  metadataBase: new URL("https://cptconstruction.com"),
  title: "CPT Construction",
  description:
    "Division 9 interior scopes self-performed across Ontario by CPT Construction.",
  icons: {
    icon: "/Newlogoupdate/ProfileCPT.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} overflow-x-hidden bg-black antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar></Navbar>
          <Suspense fallback={<Loading></Loading>}>
            <main className="w-full no-scrollbar h-full">{children}</main>
          </Suspense>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
