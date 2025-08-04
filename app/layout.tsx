import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ClientBody from "@/app/client-body";

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
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,401,700,701&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://api.fontshare.com/v2/css?f[]=melodrama@400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
