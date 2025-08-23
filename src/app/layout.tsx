import type { Metadata } from "next";
import { Kaisei_Opti } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from "@/components";

const kaiseiOpti = Kaisei_Opti({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-kaisei-opti",
});

export const metadata: Metadata = {
  title: {
    default: "西田明正（Akimasa NISHIDA）",
    template: "%s | 西田明正（Akimasa NISHIDA）",
  },
  description: "地球人です",
  metadataBase: new URL("https://www.akimasanishida.com"),
  openGraph: {
    title: "西田明正（Akimasa Nishida）",
    description: "西田明正（Akimasa NISHIDA）のウェブサイト",
    url: "https://www.akimasanishida.com",
    siteName: "西田明正（Akimasa Nishida）",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "西田明正のウェブサイト",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "西田明正（Akimasa Nishida）",
    description: "西田明正（Akimasa NISHIDA）のウェブサイト",
    images: ["/ogp.jpg"],
    creator: "@skrbcr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kaiseiOpti.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
