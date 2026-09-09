import type { MetadataRoute } from "next";
import { SITE_URL, LANGUAGE_ALTERNATES } from "../lib/site";

export const dynamic = "force-static";

/**
 * Bump this when the page content actually changes. Deriving it from
 * `new Date()` would re-stamp every URL on every deploy, which teaches
 * crawlers to ignore the field.
 */
const LAST_MODIFIED = new Date("2026-09-09T00:00:00.000Z");

const languages = {
    en: LANGUAGE_ALTERNATES.en,
    fr: LANGUAGE_ALTERNATES.fr,
    ar: LANGUAGE_ALTERNATES.ar,
};

export default function sitemap(): MetadataRoute.Sitemap {
    // `/en` is deliberately absent: it canonicalises to the bare domain, which
    // is the entry listed here as the English page.
    return [
        {
            url: SITE_URL,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 1,
            alternates: { languages },
        },
        {
            url: `${SITE_URL}/fr`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: { languages },
        },
        {
            url: `${SITE_URL}/ar`,
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: { languages },
        },
    ];
}
