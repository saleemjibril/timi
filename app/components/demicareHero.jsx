import Image from "next/image";

export default function DemicareHero() {
    return (
        <div className="demicare__hero">

             <div className="demicare__hero__inner">
            <Image className="demicare__hero__back" src="/assets/icons/backWhite.svg" width={75} height={27} />

                    <div className="demicare__hero__inner__title">
                    Empowering users to track and improve skin health through AI-driven insights
                    </div>
                    <div className="demicare__hero__inner__subtitle">
                    DemiCare is an AI-powered skincare platform that helps users log their routines, scan their face every 14 days, and get insights on how their skin responds over time.
                    </div>

                    <button>Work with me <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} /></button>
             </div>

                {/* <Image src="/assets/demicareMockup.svg" width={246.8960723876953} height={511.1579284667969} /> */}
                
        </div>
    )
}