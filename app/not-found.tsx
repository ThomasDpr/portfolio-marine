import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center dark:bg-black/50 backdrop-blur drop-shadow-sm gap-10 h-full border-2 rounded-2xl">
            <h2 className="text-4xl font-bold">
                Désolé, cette page{" "}
                <span className="text-red-500 underline underline-offset-4">
                    {" "}
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
