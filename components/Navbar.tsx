"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme/ThemeToggle";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center w-full p-4 lg:p-6 border bg-white/50 dark:bg-black/50 backdrop-blur drop-shadow-sm rounded-2xl">
            <Link href="/">
                <span className="flex items-center gap-4">
                    <Icons.logo className="w-10 h-10 bg-black dark:bg-white rounded-md " />
                    <span className="font-bold text-2xl">
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
                <nav className="flex gap-6 items-center justify-center">
                    <Link href="/projects">
                        <Button
                            variant="outline"
                            className={`flex items-center transition-transform transform duration-500 hover:scale-110  ${
                                pathname === "/projects" ? "text-red-700" : ""
                            }`}>
                            Mes projets
                        </Button>
                    </Link>

                    <Link href="/skills">
                        <Button
                            variant="outline"
                            className={`flex items-center transition-transform transform duration-500 hover:scale-110 ${
                                pathname === "/skills" ? "text-red-700" : ""
                            }`}>
                            Mes compétences
                        </Button>
                    </Link>

                    <Link href="/contact">
                        <Button
                            variant="default"
                            className={`flex items-center transition-transform transform duration-500 hover:scale-110 ${
                                pathname === "/contact" ? "bg-red-700" : ""
                            }`}>
                            Contact
                        </Button>
                    </Link>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                    <ThemeToggle aria-label="Changer de thème" />
                </div>
            </div>
        </div>
    );
};
