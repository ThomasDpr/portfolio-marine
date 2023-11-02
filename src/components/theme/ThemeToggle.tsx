'use client';

import React from 'react';
import clsx from 'clsx';
import { Laptop2, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/src/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';

import { Icons } from '../Icons';

type Props = {
    isModal?: boolean;
};

export const ThemeToggle = ({ isModal = false }: Props) => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange =
        (selectedTheme: string) => (event: React.MouseEvent) => {
            event.stopPropagation();
            setTheme(selectedTheme);
        };

    return (
        <DropdownMenu modal={isModal}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-md p-2">
                    <Sun className="h-full w-full dark:hidden" />
                    <Moon className="hidden h-full w-full dark:block" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={handleThemeChange('light')}
                    className={clsx(
                        theme === 'light' ? 'text-red-700' : '',
                        'cursor-pointer gap-2',
                    )}>
                    <Icons.sun size="15" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleThemeChange('dark')}
                    className={clsx(
                        theme === 'dark' ? 'text-red-700' : '',
                        'cursor-pointer gap-2',
                    )}>
                    <Icons.moon size="15" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleThemeChange('system')}
                    className={clsx(
                        theme === 'system' ? 'text-red-700' : '',
                        'cursor-pointer gap-2',
                    )}>
                    <Laptop2 size="15" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
