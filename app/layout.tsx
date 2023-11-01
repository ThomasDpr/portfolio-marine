import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import clsx from "clsx";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={clsx(poppins.className, "h-full bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-full w-full flex-col">
            <Navbar />
            <div className="m-auto flex w-full max-w-screen-2xl flex-col pt-28 md:pt-40">
              {children}
            </div>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
