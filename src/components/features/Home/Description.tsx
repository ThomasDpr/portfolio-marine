import { links } from '@/app/data/links';
import React from 'react';

import { SocialLink } from './SocialLink';

export const Description = () => {
    return (
        <div className="gap- col-span-full col-start-1 row-start-1 flex flex-col items-center text-gray-800 dark:text-gray-200 md:col-span-6 md:col-start-2 md:row-span-6 md:row-start-2 md:items-start">
            <h1 className="text-3xl font-extrabold md:text-5xl">
                Marine Noizet
            </h1>
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400 md:text-3xl">
                Monteuse vidéo
            </h2>
            <p className="hidden hyphens-auto text-justify text-lg md:block">
                Passionnée par le{' '}
                <span className="font-extrabold text-primary">
                    montage créatif
                </span>{' '}
                et les effets spéciaux, j'aime réaliser des contenus visuels qui
                captivent et marquent les esprits. Chaque projet est pour moi
                une nouvelle aventure où j'exprime ma créativité et mon
                expertise pour donner vie à vos idées.
            </p>
            <div className="flex gap-4">
                {links.map(link => (
                    <SocialLink key={link.id} {...link} />
                ))}
            </div>
        </div>
    );
};
