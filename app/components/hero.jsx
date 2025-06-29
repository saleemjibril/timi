import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__inner">
                <div className="hero__inner__title">
                    An end-to-end recruitment solution for companies of all sizes.
                </div>
                <div className="hero__inner__subtitle">
                    Designed to simplify recruitment by enabling businesses to streamline hiring, evaluate candidates efficiently, and manage talent through a flexible, end-to-end platform
                </div>
                <button>Work with me <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} /></button>

                <Image className="hero__inner__image" src={"/assets/hero.png"} width={1206} height={727} />

            </div>
        </div>
    )
}