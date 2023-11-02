'use client';

import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Arrow } from '@radix-ui/react-tooltip';
import Link from 'next/link';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/src/components/ui/avatar';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/src/components/ui/tooltip';

export const CreatorIndication = () => {
    return (
        <TooltipProvider delayDuration={0}>
            <Link
                href="https://www.tdupre.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="avatar-effect flex items-center gap-2 ">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Avatar className="rotate-avatar rounded-full border border-gray-300 dark:border-gray-700 ">
                            <AvatarImage
                                src="https://res.cloudinary.com/dimfha9hq/image/upload/v1695393723/portfolio_react/avatar-hero.webp"
                                alt="Avatar de Thomas Dupré"
                                className="bg-gray-100 object-cover dark:bg-gray-800 "
                            />
                            <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                    </TooltipTrigger>
                    <TooltipContent
                        side="top"
                        sideOffset={20}
                        className="w-40 bg-transparent">
                        <Avatar className="h-full w-full rounded-full border border-gray-300 dark:border-gray-700">
                            <AvatarImage
                                src="https://res.cloudinary.com/dimfha9hq/image/upload/v1695393723/portfolio_react/avatar-hero.webp"
                                alt="Avatar de Thomas Dupré"
                                className="bg-gray-100 object-cover transition-all duration-300 hover:scale-125 hover:transform hover:brightness-110 dark:bg-gray-800"
                            />
                            <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                        <Arrow className="fill-primary" />
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex gap-1 text-sm md:flex-col md:gap-0">
                            <span className="">Créé par</span>
                            <span className="font-bold text-red-700">
                                Thomas Dupré
                            </span>
                        </div>
                    </TooltipTrigger>

                    <TooltipContent
                        side="bottom"
                        align="center"
                        // sideOffset={10}
                        className="w-full">
                        <span className="flex items-center gap-2 [&>*:last-child]:hover:animate-pulse">
                            <span>Visiter son site web</span>

                            <span>
                                <FaArrowUpRightFromSquare />
                            </span>
                        </span>
                        <Arrow className="fill-primary" />
                    </TooltipContent>
                </Tooltip>
            </Link>
        </TooltipProvider>
    );
};
