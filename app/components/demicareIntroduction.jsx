import Image from "next/image";
import Link from "next/link";

export default function DemicareIntroduction(params) {
    return (
        <div className="demicare__introduction">
            <Image src={"/assets/demicare-intro.svg"} width={632} height={595} />

            <div className="demicare__introduction__card1">
                
                <div className="demicare__introduction__card1__title">
                Introduction
                </div>
                <div className="demicare__introduction__card1__subtitle">
                DemiCare is a skincare platform designed for individuals who want more than just beauty promises. 
<br />
<br />
The goal of this project is to build a solution that empowers users track their skincare journey, using AI-powered facial scans and routine logging helping them understand how their skin is improving over time.
<br />
<br />
By combining user-inputted routines with AI-powered scans every 14 days, DemiCare monitors skin changes and shows users how their products are truly performing.
                </div>

                    <button className="demicare__introduction__card1__button">
                    View Hi-Fi

                        <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
                    </button>

            </div>


        </div>
    )
}