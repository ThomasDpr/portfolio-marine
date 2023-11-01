'use client';

import { Button, buttonVariants } from '@/src/components/ui/button';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Icons } from './Icons';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './theme/ThemeToggle';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const pathname = usePathname();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    return (
        <div className="fixed left-0 right-0 top-0 z-10 w-full px-2 py-2 md:px-8 md:py-8 ">
            <div className="container flex items-center justify-between rounded-2xl border bg-white/50 py-4 drop-shadow-sm backdrop-blur dark:bg-black/50 lg:py-6">
                <Link href="/">
                    <span className="flex items-center gap-4">
                        <Icons.logo className="h-10 w-10 rounded-md bg-black dark:bg-white md:h-10 md:w-10" />
                        <span className="text-sm font-bold md:text-2xl">
                            <span className="text-black dark:text-red-700">
                                Marine{' '}
                            </span>
                            <span className="text-red-700 dark:text-white">
                                Noizet
                            </span>
                        </span>
                    </span>
                </Link>

                <div className="flex items-center">
                    <nav className="hidden items-center justify-center gap-6 md:flex">
                        <Link
                            href="/projects"
                            className={clsx(
                                buttonVariants({
                                    variant: 'outline',
                                    size: 'lg',
                                }),
                                'gap-4 hover:bg-red-700 hover:text-white',
                                `${
                                    pathname === '/projects'
                                        ? 'border-red-700 text-red-700'
                                        : ''
                                }`,
                            )}>
                            <Icons.layers />
                            Mes projets
                        </Link>

                        <Link
                            href="/skills"
                            className={clsx(
                                buttonVariants({
                                    variant: 'outline',
                                    size: 'lg',
                                }),
                                'gap-4 hover:bg-red-700 hover:text-white',
                                `${
                                    pathname === '/skills'
                                        ? 'border-red-700 text-red-700'
                                        : ''
                                }`,
                            )}>
                            <Icons.brain />
                            Mes compétences
                        </Link>

                        <Link
                            href="/contact"
                            className={clsx(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'lg',
                                }),
                                'link-hover gap-4 hover:bg-red-700 hover:text-white',
                                `${
                                    pathname === '/contact'
                                        ? 'bg-red-700 dark:text-white'
                                        : ''
                                }`,
                            )}>
                            <Icons.mail className="icon-mail" />
                            Me contacter
                        </Link>
                    </nav>

                    <div className="flex items-center gap-1">
                        <div className="ml-6 border-l border-slate-200 pl-6 dark:border-slate-800">
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
