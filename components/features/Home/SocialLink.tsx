import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {
    id: string;
    title: string;
    href: string;
    icon: React.ReactElement;
};

export const SocialLink = ({ title, href, icon }: Props) => {
    return (
    <Link

      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        buttonVariants({
          variant: "outline",
          size: "sm",
        }),
        "gap-2 text-xl hover:bg-red-700 hover:text-white md:text-sm",
      )}
    >
      {icon}
      <span className="">{title}</span>
    </Link>
  );
};
