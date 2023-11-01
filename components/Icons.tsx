import React from 'react';
import {
    LucideProps,
    Moon,
    Sun,
    Twitter,
    IconNode as LucideIcon,
    Mail,
    Brain,
    Layers,
    Menu,
    X,
    Download,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
    sun: Sun,
    moon: Moon,
    twitter: Twitter,
    mail: Mail,
    brain: Brain,
    layers: Layers,
    menu: Menu,
    x: X,
    download: Download,
    logo: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            {...props}>
            <path
                d="M24.22 26.1875C24.3851 26.1875 25.4511 24.1872 26.5891 21.7424L28.6574 17.2973H29.766H30.8742V32.372V47.4468H29.7204H28.5662L28.4642 35.7542L28.3617 24.0616L26.8349 27.5404C25.9954 29.4537 25.2737 31.0737 25.232 31.1406C25.1898 31.2074 23.9243 30.6419 22.4196 29.8843C20.9152 29.1267 19.6192 28.5067 19.5399 28.5067C19.4607 28.5067 19.0649 29.2415 18.6606 30.1398C18.1198 31.3412 17.9277 32.6442 17.9346 35.0681C17.9428 37.9211 18.0912 38.6485 19.0417 40.4892C19.6454 41.6585 20.4142 42.9267 20.7498 43.3078C21.316 43.9506 21.2441 44.1168 19.7533 45.6077L18.1465 47.2145L17.1817 45.1071C15.4651 41.3574 14.5328 36.5176 14.7284 32.372C14.9143 28.4364 15.6414 26.1968 17.5435 23.7033L18.5635 22.3659L21.2414 24.2769C22.7145 25.3275 24.0546 26.1875 24.22 26.1875Z"
                fill="#FA0404"
            />
            <path
                d="M31.7794 40.4274C31.9194 36.5667 32.0338 29.8352 32.0338 25.4686C32.0338 21.0103 32.1795 17.6904 32.3662 17.8964C32.549 18.0982 33.7318 19.6551 34.995 21.3559C40.3148 28.5199 41.5108 30.0529 41.7798 30.0529C42.6159 30.0529 44.2513 25.2641 44.9482 20.7761L45.3981 17.8771L47.0679 17.7561L48.7381 17.6351L48.4768 20.4618C47.9338 26.3363 46.0633 31.3798 43.4372 34.0508L41.9769 35.5358L38.3582 31.9322L36.5489 30.1305L34.7395 28.3289V37.8878V47.4468H33.1323H31.5251L31.7794 40.4274Z"
                fill="#FA0404"
            />
        </svg>
    ),
};
