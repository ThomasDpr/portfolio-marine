import React from 'react';
import Link from 'next/link';

import { Button } from '@/src/components/ui/button';

export default function NotFound() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 rounded-2xl border-2 drop-shadow-sm backdrop-blur dark:bg-black/50">
            <h2 className="text-4xl font-bold">
                Désolé, cette page{' '}
                <span className="text-red-500 underline underline-offset-4">
                    {' '}
                    n'existe pas
                </span>
            </h2>
            <p className="text-xl">
                Vous pouvez retourner à la page d'accueil en cliquant sur le
                lien ci-dessous
            </p>
            <Link href="/">
                <Button>Retour à l'accueil</Button>
            </Link>
        </div>
    );
}
