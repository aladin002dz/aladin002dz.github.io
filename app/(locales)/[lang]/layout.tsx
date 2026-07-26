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

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;

    const titles: Record<string, string> = {
        en: "Mahfoudh Arous | Senior Software Engineer & Full-stack Developer",
        fr: "Mahfoudh Arous | Ingénieur Logiciel Senior & Développeur Full-stack",
        ar: "محفوظ عروس | مهندس برمجيات قدير ومطور شامل",
    };

    const descriptions: Record<string, string> = {
        en: "Portfolio of Mahfoudh Arous, a Senior Software Engineer & Full-stack Developer specializing in React, Next.js, and modern web technologies.",
        fr: "Portfolio de Mahfoudh Arous, Ingénieur Logiciel Senior & Développeur Full-stack spécialisé en React, Next.js et technologies web modernes.",
        ar: "الموقع الشخصي لمحفوظ عروس، مهندس برمجيات قدير ومطور شامل متخصص في React و Next.js وتقنيات الويب الحديثة.",
    };

    const ogLocales: Record<string, string> = {
        en: "en_US",
        fr: "fr_FR",
        ar: "ar_AR",
    };

    const title = titles[lang] || titles.en;
    const description = descriptions[lang] || descriptions.en;
    const ogLocale = ogLocales[lang] || "en_US";
    const canonicalUrl = `https://aladin002dz.github.io/${lang}`;

    return {
        title,
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
            "Frontend",
            "Backend",
        ],
        authors: [{ name: "Mahfoudh Arous", url: "https://github.com/aladin002dz" }],
        creator: "Mahfoudh Arous",
        publisher: "Mahfoudh Arous",
        metadataBase: new URL("https://aladin002dz.github.io"),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                en: "https://aladin002dz.github.io/en",
                fr: "https://aladin002dz.github.io/fr",
                ar: "https://aladin002dz.github.io/ar",
                "x-default": "https://aladin002dz.github.io/en",
            },
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Mahfoudh Arous Portfolio",
            locale: ogLocale,
            type: "website",
            images: [
                {
                    url: "/opengraph-image",
                    width: 1200,
                    height: 630,
                    alt: "Mahfoudh Arous - Senior Software Engineer",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/opengraph-image"],
            creator: "@aladin002dz",
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
}

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
