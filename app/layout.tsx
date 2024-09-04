import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "GSAP React Playbook - Animations with GSAP, React.js & Next.js",
  description: "Learn how to use GSAP with React.js and Next.js to create amazing animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
