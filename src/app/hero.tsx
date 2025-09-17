"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
    return (
        <header className="bg-white px-8 py-28">
            <div className="container mx-auto flex h-[60vh] w-full items-center justify-center">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !leading-tight text-center"
                >
                    <div className="flex flex-col items-center">
                        <span className="bg-gray-900 px-6 py-2 text-xl md:text-4xl font-medium tracking-widest text-white">
                            FADLI NURHIDAYAT
                        </span>
                        <span className="bg-gray-900 px-6 py-2 text-xl md:text-2xl font-medium tracking-widest text-white mt-2">
                            WEB DEVELOPER
                        </span>
                    </div>
                </Typography>
            </div>


        </header>
    );
}

export default Hero;
