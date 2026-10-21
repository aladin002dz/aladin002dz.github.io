export const SITE_URL = "https://mahfoudh.dev";

export const CONTACT_EMAIL = "hello@mahfoudh.dev";

export const LOCALES = ["en", "fr", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
    return (LOCALES as readonly string[]).includes(value);
}

/**
 * English is served from the bare domain (https://mahfoudh.dev); the other
 * locales live under /<lang>. `/en` still builds so old inbound links keep
 * working, but it declares the bare domain as its canonical URL.
 */
export function localeUrl(lang: string): string {
    return lang === DEFAULT_LOCALE ? SITE_URL : `${SITE_URL}/${lang}`;
}

export const LANGUAGE_ALTERNATES: Record<string, string> = {
    en: SITE_URL,
    fr: `${SITE_URL}/fr`,
    ar: `${SITE_URL}/ar`,
    "x-default": SITE_URL,
};

export const OG_IMAGE = {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: "Mahfoudh Arous - Senior Software Engineer & Full-stack Developer",
};
