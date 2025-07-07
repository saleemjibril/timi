import Image from "next/image";

export default function HomeHireMe() {
    return (
        <div className="home__hire-me">
            <div className="home__hire-me__inner">
                <Image src="/assets/headshot2.svg" width={120} height={120} />
                <div className="home__hire-me__inner__subtitle">
                    Just before you go...
                </div>
                <div className="home__hire-me__inner__title">
                    If you’ve made it this far, I trust it’s clear that I bring the skills, creativity, and insight to elevate your product and drive real results. Ready when you are.
                </div>


                <div className="home__hire-me__inner__button-group">
                    <button>
                        Hire me

                        <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} />
                    </button>
                    <button>
                        Email

                        <Image src={"/assets/icons/email.svg"} width={34} height={34} />
                    </button>
                </div>
            </div>
        </div>
    )
}