import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
      <head>
        <link
          rel="preload"
          href={`${basePath}/fonts/neue-montreal-regular.otf`}
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/EditorialNew-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/pp-editorial-new-italic.otf`}
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={`${basePath}/fonts.css`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
