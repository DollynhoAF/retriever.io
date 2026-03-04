import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "RETRIEVER Playground",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <style dangerouslySetInnerHTML={{ __html: `:root { --font-montserrat: 'Montserrat', sans-serif; }` }} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
