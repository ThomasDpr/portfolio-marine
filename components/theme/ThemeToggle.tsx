"use client";

import React from "react";
import { Laptop2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "../Icons";
import clsx from "clsx";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange =
        (selectedTheme: string) => (event: React.MouseEvent) => {
            event.stopPropagation();
            setTheme(selectedTheme);
        };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 p-2 rounded-md">
                    <Sun className="w-full h-full dark:hidden" />
                    <Moon className="hidden w-full h-full dark:block" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={handleThemeChange("light")}
                    className={clsx(
                        theme === "light" ? "text-red-700" : "",
                        "gap-2 cursor-pointer"
                    )}>
                    <Icons.sun size="15"/>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleThemeChange("dark")}
                    className={clsx(
                        theme === "dark" ? "text-red-700" : "",
                        "gap-2 cursor-pointer"
                    )}>
                    <Icons.moon size="15"/>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleThemeChange("system")}
                    className={clsx(
                        theme === "system" ? "text-red-700" : "",
                        "gap-2 cursor-pointer"
                    )}>
                    <Laptop2 size="15"/>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
