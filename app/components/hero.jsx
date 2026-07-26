"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./themeProvider";

export default function Hero() {
    const { theme } = useTheme();
    const heroSrc =
        theme === "light" ? "/assets/heroLight.png" : "/assets/hero.png";

    return (
        <div className="hero">
            <div className="hero__inner">
                <div className="hero__inner__title">
                    An end-to-end recruitment solution for companies of all sizes.
                </div>
                <div className="hero__inner__subtitle">
                    Designed to simplify recruitment by enabling businesses to streamline hiring, evaluate candidates efficiently, and manage talent through a flexible, end-to-end platform
                </div>
                <Link href="/contact">Work with me <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} alt="" /></Link>

                <Image className="hero__inner__image" src={heroSrc} width={1206} height={727} alt="" />

            </div>
        </div>
    )
}
