import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </head>
      </head>
      <body>{children}</body>
    </html>
  );
}
