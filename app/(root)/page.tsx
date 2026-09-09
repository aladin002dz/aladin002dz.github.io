import HomeContent from "../components/HomeContent";
import { DEFAULT_LOCALE } from "../../lib/site";

/**
 * The bare domain serves the English portfolio directly. It used to be a
 * meta-refresh stub that bounced visitors to /en, which cost a round trip for
 * humans and leaked "Redirecting to portfolio..." into crawlers and link
 * previews.
 */
export default function RootPage() {
    return <HomeContent lang={DEFAULT_LOCALE} />;
}
