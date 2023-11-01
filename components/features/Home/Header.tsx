import { Avatar } from "@/components/features/Home/Avatar";
import { Description } from "@/components/features/Home/Description";

export const Header = () => {
  return (
    <div className="flex flex-col oh ">
      <main
        className="grid grid-cols-2 items-center md:gap-6
        bg-gradient-to-b
        from-transparent to-neutral-100
        px-6 md:pb-10 pb-20
        dark:from-transparent dark:to-neutral-900 md:grid-cols-12 md:grid-rows-6 md:gap-x-32 md:px-10"
      >
        <Description />
        <Avatar />
      </main>

      <div className="">
        <svg
          viewBox="0 0 1792 128"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl oh"
        >
          <path
            d="M0 42V0H1792V97.488C1792 97.488 1654 128 1381 128C1108 128 689 16 414.5 16C140 16 0 42 0 42Z"
            fill=""
            className="fill-neutral-100 dark:fill-neutral-900"
          />
        </svg>
      </div>


      {/* <div className="relative">
        <div className="absolute-center">
          <svg className="circle-svg animate-spin-slow " viewBox="0 0 500 500">
            <defs>
              <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle_top"
              ></path>
            </defs>
            <text className="circle-text" dy="70" textLength="1220">
              <textPath xlinkHref="#textcircle_top">
                Davinci • Photoshop • Illustrator • InDesign • Premiere Pro •
              </textPath>
            </text>
          </svg>
        </div>
      </div> */}
    </div>
  );
};
