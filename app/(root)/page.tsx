import Link from "next/link";

export default function RootPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
            <meta httpEquiv="refresh" content="0;url=/en" />
            <script
                dangerouslySetInnerHTML={{
                    __html: `if (typeof window !== 'undefined') { window.location.replace('/en'); }`,
                }}
            />
            <div className="max-w-xl space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">
                    Mahfoudh Arous | Senior Software Engineer
                </h1>
                <p className="text-slate-400">
                    Senior Software Engineer &amp; Full-stack Developer.
                </p>
                <p className="text-sm text-slate-500 pt-4">
                    Redirecting to portfolio... If you are not redirected automatically,{" "}
                    <Link href="/en" className="text-blue-400 underline hover:text-blue-300">
                        click here to view English Portfolio
                    </Link>.
                </p>
            </div>
        </main>
    );
}

