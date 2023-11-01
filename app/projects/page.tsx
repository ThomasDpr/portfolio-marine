import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Mes projets',
    description: 'Ici vous trouverez tous mes projets',
    icons: {
        icon: ['/favicon.ico'],
        apple: ['/apple-touch-icon.png'],
        shortcut: ['/apple-touch-icon.png'],
    },
    manifest: '/site.webmanifest',
};

export default function Projects() {
    return <div>PAGE MES PROJETS</div>;
}
