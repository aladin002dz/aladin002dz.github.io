import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SITE_URL, LANGUAGE_ALTERNATES, OG_IMAGE } from "../../lib/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const title = "Mahfoudh Arous | Senior Software Engineer & Full-stack Developer";
const description =
    "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: title,
        template: "%s | Mahfoudh Arous",
    },
    description,
    keywords: [
        "Software Engineer",
        "Full-stack Developer",
        "React",
        "Next.js",
        "Portfolio",
        "Mahfoudh Arous",
        "Web Development",
        "TypeScript",
        "Frontend Engineer",
    ],
    authors: [{ name: "Mahfoudh Arous", url: "https://github.com/aladin002dz" }],
    creator: "Mahfoudh Arous",
    publisher: "Mahfoudh Arous",
    alternates: {
        canonical: SITE_URL,
        languages: LANGUAGE_ALTERNATES,
    },
    openGraph: {
        title,
        description,
        url: SITE_URL,
        siteName: "Mahfoudh Arous Portfolio",
        locale: "en_US",
        type: "website",
        images: [OG_IMAGE],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@aladin002dz",
        images: [OG_IMAGE.url],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
