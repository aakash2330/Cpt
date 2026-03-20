import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "CPT",
  description: "City Professional Trades",
  icons: {
    icon: "/Newlogoupdate/CPT_PS%20Version.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} overflow-x-hidden antialiased screen-image bg-background top-shadow-overlay`}
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
      </body>
    </html>
  );
}
