/** Inline script that runs during HTML parsing; inert on the client so React doesn't warn about rendering a <script>. */
export default function InlineScript({ html }: { html: string }) {
    return (
        <script
            type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
