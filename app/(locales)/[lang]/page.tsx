import HomeContent from "../../components/HomeContent";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <HomeContent lang={lang} />;
}
