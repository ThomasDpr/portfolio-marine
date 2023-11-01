import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Projects = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Separator
        orientation="vertical"
        className="-mt-20 h-40 border border-dashed bg-transparent"
      />
      <div className="h-5 w-5 rounded-full border border-slate-400 items-center justify-center flex">
        <div className="h-3 w-3 rounded-full bg-slate-400"></div>
      </div>
    </div>
  );
};
{
  /* <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Projects
          </h1>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Here are some of my projects
          </h2>
        </div>
      </div>
    </div> */
}
