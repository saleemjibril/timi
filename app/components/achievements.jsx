import Image from "next/image";

export default function Achievements() {
    return (
        <div className="achievements">
        <div className="achievements__inner">
        <div className="achievements__inner__title-group">
                <div>Achievements</div>
                <div><div>From my collaboration with stakeholders, we set goals to onboard 30 businesses and achieve 60% feature engagement in the first quarter. By focusing on user-centered design and clear value propositions, we exceeded expectations: 70% recruiter adoption, a 35% reduction in time-to-hire, and a 70% increase in platform sign-ups within three months.</div>
                <button>Back to Top <Image src="/assets/icons/upArrow.svg" width={24} height={24} />
        </button>

                </div>
            </div>

            <div className="achievements__inner__metrics">
            <div className="achievements__inner__metrics__title">
            Key Metrics
                </div>
            <div className="achievements__inner__metrics__grid">
            
            <div>
                <div>70%</div>
                <div>Recruiter Adoption</div>
            </div>
            <div className="achievements__inner__metrics__grid__divider"></div>
            <div>
                <div>35%</div>
                <div>Reduction in time-to-hire</div>
            </div>
            <div className="achievements__inner__metrics__grid__divider"></div>
            <div>
                <div>70%</div>
                <div>Increase in platform sign-ups</div>
            </div>
           
                </div>

            </div>
            </div>
            
        </div>
    )
}