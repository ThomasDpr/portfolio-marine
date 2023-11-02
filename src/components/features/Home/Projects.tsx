import React from 'react';

import { Separator } from '@/src/components/ui/separator';

export const Projects = () => {
    return (
        <div className=" flex flex-col items-center justify-center">
            <Separator
                orientation="vertical"
                className="-mt-20 h-40 border border-dashed bg-transparent"
            />
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-400">
                <div className="h-3 w-3 rounded-full bg-slate-400"></div>
            </div>
        </div>
    );
};
