import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "500",
});

export const metadata: Metadata = {
    title: "Marine Noizet - Monteuse Vidéo Professionnelle",
    description:
        "Marine Noizet, monteuse vidéo expérimentée, spécialisée dans le montage créatif, les effets spéciaux et la réalisation de contenus visuels captivants.",
    icons: {
        icon: ["/favicon.ico"],
        apple: ["/apple-touch-icon.png"],
        shortcut: ["/apple-touch-icon.png"],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="h-full">
            <body className={clsx(poppins.className, "bg-background h-full")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem>
                    <div className="flex flex-col h-full w-full">
                        <Header />
                        <div className="flex-1 max-w-screen-xl m-auto w-full pt-28 md:pt-48">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
