"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
        className="w-10 h-10 p-2 rounded-md"
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="w-full h-full dark:hidden" />
            <Moon className="hidden w-full h-full dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};
