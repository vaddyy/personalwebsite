import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: "../../public/fonts/neue-montreal-regular.otf",
  variable: "--font-neue-montreal",
  weight: "400",
  display: "swap",
});

const editorialNew = localFont({
  src: [
    {
      path: "../../public/fonts/EditorialNew-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/pp-editorial-new-italic.otf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-editorial-new",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Dhuper | Creative Marketing Professional",
  description:
    "Personal homepage for Vishal Dhuper, a London-based creative marketing and media intelligence professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} ${editorialNew.variable}`}>{children}</body>
    </html>
  );
}
