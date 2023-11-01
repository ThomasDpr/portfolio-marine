import React from "react";
import FooterIcon from "../components/FooterIcon.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaHouseLaptop,
  FaLaptop,
} from "react-icons/fa6";

import { CreatorIndication } from "./Creator";

import { LegalFooter } from "./LegalFooter";

export const Footer = () => {
  return (
    // <footer className="px-2 py-2 md:px-8 md:py-8 ">
    <footer className="px-2 md:px-8 mt-40 ">
      <div className="container flex flex-col items-center gap-6 rounded-2xl border bg-white/50 py-4 drop-shadow-sm backdrop-blur dark:bg-black/50 lg:py-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="flex flex-col items-center text-xl font-semibold md:flex-row landscape:flex-row">
            <span>Votre vision, mon écran,</span>
            <span>
              <span className="px-1 uppercase text-red-700 underline underline-offset-4">
                notre
              </span>
              <span>chef-d'œuvre</span>
            </span>
          </h2>

          <p className="hyphens-auto text-justify text-base landscape:text-center">
            Monteuse vidéo expérimentée, spécialisée dans le montage créatif,
            les effets spéciaux et la réalisation de contenus visuels
            captivants.
          </p>
        </div>

        <hr className="w-full border-gray-300 dark:border-gray-700" />

        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-wrap justify-center gap-8 md:justify-around">
            <div className="flex flex-col">
              <nav className="flex flex-col gap-4">
                <h3
                  className="text-red-700
                                    "
                >
                  Contact
                </h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Button variant="link" size="xs" asChild>
                      <Link
                        className="gap-2 !no-underline"
                        href="tel:+33652002495"
                      >
                        <FaPhone />
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all hover:after:w-full">
                          Téléphone
                        </span>
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="linkSlide" size="xs" asChild>
                      <Link className="gap-2 " href="/contact">
                        <FaEnvelope />
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all hover:after:w-full">
                          Email
                        </span>
                      </Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-col">
              <nav className="flex  flex-col gap-4">
                <h3 className="text-red-700">Localisation</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Button variant="linkSlide" size="xs" asChild>
                      <Link
                        className="gap-2"
                        href="https://maps.app.goo.gl/RSC3JqswspTnwNXu8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLocationDot />
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all hover:after:w-full">
                          Paris
                        </span>
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" size="xs" asChild>
                      <div className="gap-2 !no-underline">
                        <FaLaptop />
                        Distanciel
                      </div>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className=" flex flex-col">
              <nav className="flex flex-col gap-4 md:gap-4">
                <h3 className="text-red-700">Suivez-moi</h3>
                <ul className="flex justify-center gap-2 md:flex-col landscape:justify-start">
                  <li>
                    <Button variant="linkSlide" size="xs" asChild>
                      <Link
                        className="gap-2 text-xl md:text-sm"
                        href="https://www.instagram.com/mn_design95/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                        <span className="relative hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all hover:after:w-full md:inline">
                          Instagram
                        </span>
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="linkSlide" size="xs" asChild>
                      <Link
                        className="gap-2 text-xl md:text-sm"
                        href="https://www.linkedin.com/in/marine-noizet-5a3136199/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                        <span className="relative hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-700 after:transition-all hover:after:w-full md:inline">
                          Linkedin
                        </span>
                      </Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 landscape:grid-cols-3 gap-y-4 w-full">
                        <div className="flex flex-col place-items-center">
                            <nav className="flex flex-col gap-4">
                                <h3
                                    className="text-red-700
                                    ">
                                    Contact
                                </h3>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Button
                                            variant="link"
                                            size="xs"
                                            asChild>
                                            <Link
                                                className="gap-2 !no-underline"
                                                href="tel:+33652002495">
                                                <FaPhone />
                                                <span className="relative after:absolute after:bg-red-700 after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all">
                                                    Téléphone
                                                </span>
                                            </Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="linkSlide"
                                            size="xs"
                                            asChild>
                                            <Link
                                                className="gap-2 "
                                                href="/contact">
                                                <FaEnvelope />
                                                <span className="relative after:absolute after:bg-red-700 after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all">
                                                    Email
                                                </span>
                                            </Link>
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex flex-col place-items-center">
                            <nav className="flex  flex-col gap-4">
                                <h3 className="text-red-700">Localisation</h3>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Button
                                            variant="linkSlide"
                                            size="xs"
                                            asChild>
                                            <Link
                                                className="gap-2"
                                                href="https://maps.app.goo.gl/RSC3JqswspTnwNXu8"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FaLocationDot />
                                                <span className="relative after:absolute after:bg-red-700 after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all">
                                                    Paris
                                                </span>
                                            </Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="link"
                                            size="xs"
                                            asChild>
                                            <div className="gap-2 !no-underline">
                                                <FaLaptop />
                                                Distanciel
                                            </div>
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className=" flex flex-col place-items-center col-span-full landscape:col-span-1">
                            <nav className="flex flex-col gap-4 md:gap-4">
                                <h3 className="text-red-700">Suivez-moi</h3>
                                <ul className="flex justify-center landscape:justify-start md:flex-col gap-2">
                                    <li>
                                        <Button
                                            variant="linkSlide"
                                            size="xs"
                                            asChild>
                                            <Link
                                                className="gap-2 text-2xl md:text-sm"
                                                href="https://www.instagram.com/mn_design95/"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FaInstagram />
                                                <span className="hidden md:inline relative after:absolute after:bg-red-700 after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all">
                                                    Instagram
                                                </span>
                                            </Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="linkSlide"
                                            size="xs"
                                            asChild>
                                            <Link
                                                className="gap-2 text-2xl md:text-sm"
                                                href="https://www.linkedin.com/in/marine-noizet-5a3136199/"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FaLinkedin />
                                                <span className="hidden md:inline relative after:absolute after:bg-red-700 after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all">
                                                    Linkedin
                                                </span>
                                            </Link>
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}

          <Image
            src={FooterIcon}
            alt="Illustration d'un espace de travail"
            width={200}
            height={200}
            className="hidden md:block"
          />
        </div>

        <hr className="w-full border-gray-300 dark:border-gray-700" />

        <div className="grid w-full grid-rows-2 gap-4 md:grid-cols-3 md:grid-rows-1 md:gap-0">
          <div className="flex justify-center md:justify-start">
            <CreatorIndication />
          </div>
          <div className="flex justify-center">
            <LegalFooter />
          </div>
        </div>
      </div>
    </footer>
  );
};
