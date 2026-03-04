import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata: Metadata = {
    title: "RETRIEVER Playground",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={montserrat.variable}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
