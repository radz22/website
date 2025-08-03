import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientBody from "@/app/client-body";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital Marketing - Hire Amazing Video Editors for 70% Less",
  description:
    "Connect with vetted video editors from the Philippines. Get high-quality edits at a fraction of the cost of US talent. Professional video editing services for creators and agencies.",
  keywords: [
    "video editing",
    "video editors",
    "remote editors",
    "Philippines",
    "content creation",
    "video production",
    "affordable editing",
  ],
  authors: [{ name: "Digital Marketing" }],
  openGraph: {
    title: "Digital Marketing - Hire Amazing Video Editors for 70% Less",
    description:
      "Connect with vetted video editors from the Philippines. Get high-quality edits at a fraction of the cost of US talent.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing - Hire Amazing Video Editors for 70% Less",
    description:
      "Connect with vetted video editors from the Philippines. Get high-quality edits at a fraction of the cost of US talent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-inter">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
