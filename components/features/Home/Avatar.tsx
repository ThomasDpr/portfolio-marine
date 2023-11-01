import React from 'react';
import Image from 'next/image';
import avatar from '@/public/avatar.png';
import Link from 'next/link';
import clsx from 'clsx';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/Icons';

export const Avatar = () => {
    return (
        <div className="relative col-span-full col-start-1 row-start-2 md:col-span-4 md:col-start-8 md:row-span-6 md:row-start-2">
            <div
                className="
                    mx-auto h-[320px] w-[320px] rounded-2xl border
                    bg-gradient-to-b from-transparent to-neutral-100
                    shadow-xl dark:from-transparent
                    dark:to-neutral-900 xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px] ">
                <div
                    className="
                    absolute right-[-5%]
                    top-[-10%] h-20 w-20
                    rounded-2xl bg-gradient-to-tl from-red-700 to-neutral-900 shadow-md"></div>
                <div
                    className="absolute bottom-[-10%]
                        left-[-5%]
                        flex
                        h-20
                        w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-neutral-900 shadow-md "></div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image
                        alt="Avatar de Marine Noizet"
                        className="rounded-2xl backdrop-blur-sm"
                        src={avatar}
                    />
                    <Link
                        href="/Marine_Noizet.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            buttonVariants({
                                variant: 'outline',
                                size: 'lg',
                            }),
                            'icon-visible z-10 gap-4 transition-transform !duration-1000 hover:bg-red-700 hover:text-white',
                        )}>
                        <Icons.download className="icon-download hidden text-white transition-all duration-700 animate-in slide-in-from-top-2" />
                        <span>Curiculum Vitae</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
