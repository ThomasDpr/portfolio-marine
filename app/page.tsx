import React from 'react';

import { Header } from '@/src/components/features/Home/Header';
import { Projects } from '@/src/components/features/Home/Projects';

export default function Home() {
    return (
        <div className="flex h-full flex-col ">
            <Header />
            <Projects />
        </div>
    );
}
