"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Arrow } from "@radix-ui/react-tooltip";

import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const CreatorIndication = () => {
    return (
        <TooltipProvider delayDuration={0}>
            <Link
                href="https://www.tdupre.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center avatar-effect ">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Avatar className="rounded-full border border-gray-300 dark:border-gray-700 rotate-avatar ">
                            <AvatarImage
                                src="https://res.cloudinary.com/dimfha9hq/image/upload/v1695393723/portfolio_react/avatar-hero.webp"
                                alt="Avatar de Thomas Dupré"
                                className="object-cover bg-gray-100 dark:bg-gray-800 "
                            />
                            <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                    </TooltipTrigger>
                    <TooltipContent
                        side="top"
                        sideOffset={20}
                        className="w-40 bg-transparent">
                        <Avatar className="w-full h-full rounded-full border border-gray-300 dark:border-gray-700">
                            <AvatarImage
                                src="https://res.cloudinary.com/dimfha9hq/image/upload/v1695393723/portfolio_react/avatar-hero.webp"
                                alt="Avatar de Thomas Dupré"
                                className="object-cover bg-gray-100 dark:bg-gray-800 hover:transform hover:scale-125 transition-all duration-300 hover:brightness-110"
                            />
                            <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                        <Arrow className="fill-primary" />
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex md:flex-col gap-1 md:gap-0 text-sm">
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
