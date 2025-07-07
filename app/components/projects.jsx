import Image from "next/image";
import Link from "next/link";

export default function Projects() {
   return (
    <div className="home__projects">
    <div className="home__projects__title">
    Projects and More
    </div>
    
    <div className="home__projects__card">
    <div className="home__projects__card__card1">
    <div className="home__projects__card__card1__subsubtitle">
    (Web based platform)
        </div>
    <div className="home__projects__card__card1__title">
    Clichire
        </div>
    <div className="home__projects__card__card1__subtitle">
    Clichire is an end-to-end recruitment platform designed to simplify and streamline the hiring process for businesses of all sizes. It serves as a digital tool for recruiters, HR professionals, and business owners to manage job postings, evaluate candidates, schedule interviews, and onboard clients.
        </div>
    
        <Link href="/clichire" prefetch={true} className="home__projects__card__card1__button">
        <button>
        View Project
      
      <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} />
                      </button>
        </Link>
    
        </div>
    
        <Image src={"/assets/clichire.svg"} width={715} height={770} />
    
    </div>
    <div className="home__projects__card">
    <Image src={"/assets/demicare.svg"} width={715} height={770} />
    
    <div className="home__projects__card__card1">
    <div className="home__projects__card__card1__subsubtitle">
    (Mobile app)
        </div>
    <div className="home__projects__card__card1__title">
    DemiCare
        </div>
    <div className="home__projects__card__card1__subtitle">
    DemiCare is an AI-powered skincare platform designed to help users track and improve their skin health over time. It serves as a digital tool that allows users to log their skincare routines, scan their face every 14 days, and receive AI-driven insights.        </div>
    
        <div className="home__projects__card__card1__button">
        <button>
        View Project
      
     
                      </button>
        </div>
    
        </div>
    
       
    </div>
    <div className="home__projects__card">

    
    <div className="home__projects__card__card1">
    <div className="home__projects__card__card1__subsubtitle">
    (Web based platform)
        </div>
    <div className="home__projects__card__card1__title">
    Eazinvite
        </div>
    <div className="home__projects__card__card1__subtitle">
    EazInvites is an end-to-end digital event invitation and management platform built to modernize how events are planned and experienced. It empowers event organizers, planners, and hosts to design stunning invitations, manage guest lists, track RSVPs, send reminders, and monitor real-time event performance, all from one centralized dashboard.       </div>
    
        <div className="home__projects__card__card1__button">
        <button>
        View Project
      
     
                      </button>
        </div>
    
        </div>
    
        <Image src={"/assets/eazinvite.svg"} width={715} height={770} />
       
    </div>
        </div>
   )
}