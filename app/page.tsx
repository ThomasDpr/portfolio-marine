import React from 'react';
import { Header } from '@/components/features/Home/Header';
import { Projects } from '@/components/features/Home/Projects';

export default function Home() {
    return (
        <div className="flex h-full flex-col ">
            <Header />
            <Projects />
        </div>
    );
}
