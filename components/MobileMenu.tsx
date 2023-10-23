import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "./Icons";
import { ThemeToggle } from "./theme/ThemeToggle";
import clsx from "clsx";

type Props = {
    toggleMenu: () => void;
};

export const MobileMenu = ({ toggleMenu }: Props) => {
    const pathname = usePathname();

    return (
        <div
        className="fixed inset-0 bg-background/50 backdrop-blur z-20"
        onClick={toggleMenu}>
            <div className="flex flex-col fixed right-0 top-0 w-[70%] h-full p-5 bg-background backdrop-blur border rounded-l-2xl animate-in slide-in-from-right duration-300 gap-4 overflow-y-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <span className="flex items-center gap-4 cursor-pointer">
                            <Icons.logo className="w-10 h-10 bg-black dark:bg-white rounded-md " />
                            <span className="font-bold text-base">
                                <span className="text-black dark:text-red-700">
                                    Marine{" "}
                                </span>
                                <span className="text-red-700 dark:text-white">
                                    Noizet
                                </span>
                            </span>
                        </span>
                    </Link>

                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                        <Icons.x />
                    </Button>
                </div>

                <hr className="border-slate-200 dark:border-slate-800" />

                <div className="flex items-center self-end gap-1">
                    <span>Thème</span>
                    <ThemeToggle aria-label="Changer de thème" />
                </div>

                <div className="flex flex-col gap-4 ">
                    <Link
                        href="/projects"
                        className={clsx(
                            buttonVariants({
                                variant: "outline",
                                size: "lg",
                            }),
                            "hover:bg-red-700 hover:text-white",
                            `${
                                pathname === "/projects"
                                    ? "text-red-700 border-red-700"
                                    : ""
                            }`
                        )}>
                        <div className="gap-4 flex items-center justify-start w-full">
                            <Icons.layers />
                            <span>Mes projets</span>
                        </div>
                    </Link>
                    <Link
                        href="/skills"
                        className={clsx(
                            buttonVariants({
                                variant: "outline",
                                size: "lg",
                            }),
                            "hover:bg-red-700 hover:text-white",
                            `${
                                pathname === "/skills"
                                    ? "text-red-700 border-red-700"
                                    : ""
                            }`
                        )}>
                        <div className="gap-4 flex items-center justify-start w-full">
                            <Icons.brain />
                            <span>Mes compétences</span>
                        </div>
                    </Link>
                    <Link
                        href="/contact"
                        className={clsx(
                            buttonVariants({
                                variant: "default",
                                size: "lg",
                            }),
                            "link-hover hover:bg-red-700 hover:text-white",
                            `${
                                pathname === "/contact"
                                    ? "bg-red-700 dark:text-white"
                                    : ""
                            }`
                        )}>
                        <div className="gap-4 flex items-center justify-start w-fit">
                            <Icons.mail />
                            <span>Contact</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
