import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://aladin002dz.github.io"),
    title: {
        default: "Mahfoudh Arous | Senior Software Engineer & Full-stack Developer",
        template: "%s | Mahfoudh Arous",
    },
    description: "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.",
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
        canonical: "https://aladin002dz.github.io",
        languages: {
            en: "https://aladin002dz.github.io/en",
            fr: "https://aladin002dz.github.io/fr",
            ar: "https://aladin002dz.github.io/ar",
            "x-default": "https://aladin002dz.github.io/en",
        },
    },
    openGraph: {
        title: "Mahfoudh Arous | Senior Software Engineer & Full-stack Developer",
        description: "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.",
        url: "https://aladin002dz.github.io",
        siteName: "Mahfoudh Arous Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Mahfoudh Arous - Senior Software Engineer & Full-stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mahfoudh Arous | Senior Software Engineer",
        description: "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.",
        creator: "@aladin002dz",
        images: ["/opengraph-image"],
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
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

