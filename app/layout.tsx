import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "GSAP React Playbook - Animations with GSAP, React.js & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
