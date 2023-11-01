"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const LegalFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col items-center gap-2 text-center text-xs">
            <div className="flex items-center gap-2">
                <Link href="/terms-and-conditions">Termes et Conditions</Link>
                <Separator orientation="vertical" className="h-full" decorative />
                <Link href="/privacy-policy">Politique de Confidentialité</Link>
            </div>

            <span>&copy; {currentYear} - Tous droits réservés</span>
        </div>
    );
};
