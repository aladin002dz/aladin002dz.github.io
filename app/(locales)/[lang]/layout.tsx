import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic"],
});

export const metadata: Metadata = {
    title: "Mahfoudh Arous | Senior Software Engineer",
    description: "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.",
    keywords: ["Software Engineer", "Full-stack Developer", "React", "Next.js", "Portfolio", "Mahfoudh Arous", "Web Development"],
    authors: [{ name: "Mahfoudh Arous", url: "https://github.com/aladin002dz" }],
    creator: "Mahfoudh Arous",
};

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "fr" }, { lang: "ar" }];
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const isArabic = lang === 'ar';

    return (
        <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${isArabic ? cairo.variable : ''} ${isArabic ? 'font-arabic' : 'font-sans'} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
