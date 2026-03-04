import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

/**
 * Montserrat — fonte padrão do Design System RETRIEVER 2.6.
 * Pesos: 400 (regular), 500 (medium), 700 (bold).
 * O `variable` CSS é injetado no <html> e referenciado no tema Chakra.
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RETRIEVER App",
    template: "%s | RETRIEVER",
  },
  description: "Aplicação baseada no Design System RETRIEVER 2.6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning  // Necessário para next-themes evitar mismatch
      className={montserrat.variable}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
