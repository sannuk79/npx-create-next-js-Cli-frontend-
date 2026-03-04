import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Next App",
  description: "Ultra-clean Next.js starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
