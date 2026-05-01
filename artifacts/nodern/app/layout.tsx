import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nodern — Web Development Agency",
  description:
    "Custom, high-performance websites designed to attract, engage, and convert your customers. Modern web design & development agency.",
  keywords: "web development, web design, UI/UX, Next.js, React, agency",
  openGraph: {
    title: "Nodern — Web Development Agency",
    description: "We Build Websites That Grow Your Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
