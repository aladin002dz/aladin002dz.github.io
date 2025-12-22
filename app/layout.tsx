import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahfoudh Arous | Senior Software Engineer",
  description: "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Software Engineer", "Full-stack Developer", "React", "Next.js", "Portfolio", "Mahfoudh Arous", "Web Development"],
  authors: [{ name: "Mahfoudh Arous", url: "https://github.com/aladin002dz" }],
  creator: "Mahfoudh Arous",
  openGraph: {
    title: "Mahfoudh Arous | Senior Software Engineer",
    description: "Senior Software Engineer & Full-stack Developer. Explore my projects and contributions.",
    url: "https://your-portfolio-url.com", // TODO: Update with actual URL when deployed
    siteName: "Mahfoudh Arous Portfolio",
    images: [
      {
        url: "https://github.com/aladin002dz.png", // Using profile image as OG image
        width: 1200,
        height: 630,
        alt: "Mahfoudh Arous",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahfoudh Arous | Senior Software Engineer",
    description: "Senior Software Engineer & Full-stack Developer. Explore my projects and contributions.",
    images: ["https://github.com/aladin002dz.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
