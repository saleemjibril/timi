import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";

export default function DemicareHero() {
    return (
        <div
            className="demicare__hero"
            style={{
                backgroundImage: `url(${assetUrl("/assets/demicareMockup.svg", {
                    width: 2560,
                })})`,
            }}
        >
            <div className="demicare__hero__inner">
                <Image
                    className="demicare__hero__back"
                    src="/assets/icons/backWhite.svg"
                    width={75}
                    height={27}
                    alt=""
                />

                <div className="demicare__hero__inner__title">
                    Empowering users to track and improve skin health through
                    AI-driven insights
                </div>
                <div className="demicare__hero__inner__subtitle">
                    DemiCare is an AI-powered skincare platform that helps users
                    log their routines, scan their face every 14 days, and get
                    insights on how their skin responds over time.
                </div>

                <button>
                    Work with me{" "}
                    <Image
                        src={"/assets/icons/rightArrow.svg"}
                        width={18}
                        height={18}
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
}