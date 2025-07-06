import Image from "next/image";

export default function HireMe() {
    return (
      <div className="hire-me">
          <div className="hire-me__inner">
            <Image src="/assets/headshot.svg" width={120} height={120} />

            <div className="hire-me__inner__title">
            If you’ve read this far, I think we’d make a great team.
            </div>
            <div className="hire-me__inner__subtitle">
            I hope this case study gave you a glimpse of how I think, design, and solve problems. Let’s connect and see how we can build something great together
            </div>

            <div className="hire-me__inner__button-group">
                <button>
                Hire me

<Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} />
                </button>

                <button> See next project

<Image src={"/assets/icons/rightArrowLight.svg"} width={18} height={18} /></button>
            </div>
            
               
        </div>
      </div>
    )
}