import type { MetadataRoute } from "next";
import { SITE_URL, LANGUAGE_ALTERNATES } from "../lib/site";

export const dynamic = "force-static";

const languages = {
    en: LANGUAGE_ALTERNATES.en,
    fr: LANGUAGE_ALTERNATES.fr,
    ar: LANGUAGE_ALTERNATES.ar,
};

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    // `/en` is deliberately absent: it canonicalises to the bare domain, which
    // is the entry listed here as the English page.
    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "monthly",
            priority: 1,
            alternates: { languages },
        },
        {
            url: `${SITE_URL}/fr`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: { languages },
        },
        {
            url: `${SITE_URL}/ar`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: { languages },
        },
    ];
}
