"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icons } from "./Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "./theme/ThemeToggle";

import { MobileMenu } from "./MobileMenu";
import clsx from "clsx";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const pathname = usePathname();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    return (
        <div className="fixed left-0 right-0 top-0 z-10 w-full px-2 py-2 md:px-8 md:py-8 ">
            <div className="container py-4 lg:py-6 flex justify-between items-center border bg-white/50 dark:bg-black/50 backdrop-blur drop-shadow-sm rounded-2xl">
                <Link href="/">
                    <span className="flex items-center gap-4">
                        <Icons.logo className="w-10 h-10 md:w-10 md:h-10 bg-black dark:bg-white rounded-md" />
                        <span className="font-bold text-sm md:text-2xl">
                            <span className="text-black dark:text-red-700">
                                Marine{" "}
                            </span>
                            <span className="text-red-700 dark:text-white">
                                Noizet
                            </span>
                        </span>
                    </span>
                </Link>

                <div className="flex items-center">
                    <nav className="hidden md:flex gap-6 items-center justify-center">
                        <Link
                            href="/projects"
                            className={clsx(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "gap-4 hover:bg-red-700 hover:text-white",
                                `${
                                    pathname === "/projects"
                                        ? "text-red-700 border-red-700"
                                        : ""
                                }`
                            )}>
                            <Icons.layers />
                            Mes projets
                        </Link>

                        <Link
                            href="/skills"
                            className={clsx(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "gap-4 hover:bg-red-700 hover:text-white",
                                `${
                                    pathname === "/skills"
                                        ? "text-red-700 border-red-700"
                                        : ""
                                }`
                            )}>
                            <Icons.brain />
                            Mes compétences
                        </Link>

                        <Link
                            href="/contact"
                            className={clsx(
                                buttonVariants({
                                    variant: "default",
                                    size: "lg",
                                }),
                                "gap-4 link-hover hover:bg-red-700 hover:text-white",
                                `${
                                    pathname === "/contact"
                                        ? "bg-red-700 dark:text-white"
                                        : ""
                                }`
                            )}>
                            <Icons.mail className="icon-mail" />
                            Me contacter
                        </Link>
                    </nav>

                    <div className="flex items-center gap-1">
                        <div className="border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                            <ThemeToggle aria-label="Changer de thème" />
                        </div>

                        <Button
                            onClick={toggleMenu}
                            size="icon"
                            variant="ghost"
                            className="md:hidden">
                            <Icons.menu />
                        </Button>
                    </div>
                </div>
            </div>

            {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </div>
    );
};
