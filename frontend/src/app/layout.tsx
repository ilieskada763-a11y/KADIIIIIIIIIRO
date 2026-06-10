import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKAI STREAM",
  description: "Futuristic Anime Streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
