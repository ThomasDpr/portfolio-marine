import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <div className="px-2 md:px-8 py-2 md:py-8 w-screen fixed top-0 left-0 right-0">
            <Navbar />
        </div>
    );
};
