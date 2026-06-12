import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AKAI STREAM | Next-Gen Anime Platform",
    template: "%s | AKAI STREAM"
  },
  description: "Experience anime like never before. AKAI STREAM is a premium, futuristic anime streaming platform with cinematic UI and high-fidelity streaming.",
  keywords: ["anime", "streaming", "cyberpunk", "akai stream", "watch anime", "premium anime"],
  authors: [{ name: "Akira Team" }],
  creator: "Akira Team",
  publisher: "AKAI STREAM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AKAI STREAM | Next-Gen Anime Platform",
    description: "Experience anime like never before. Cinematic UI, premium quality.",
    url: "https://akaistream.com",
    siteName: "AKAI STREAM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKAI STREAM | Next-Gen Anime Platform",
    description: "Experience anime like never before. Cinematic UI, premium quality.",
    creator: "@akaistream",
    images: ["/og-image.jpg"],
  },
  themeColor: "#050505",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
