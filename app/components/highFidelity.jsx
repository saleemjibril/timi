"use client";
import Image from "next/image";
import { useState } from "react";

export default function HighFidelity() {
    const [activeTab, setActiveTab] = useState("Professional View");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="sketching">
        <div className="sketching__title">
        High - Fidelity
        </div>
        <div className="sketching__subtitle">
        Once the structure was solid, it was time to add detail, personality, and polish. The high-fidelity designs represent the near-final look and feel of Clichire, complete with color, typography, icons, and real content.
This stage was all about creating a visually engaging experience while staying true to usability and clarity. Every element was crafted to align with the brand’s identity and make the interface intuitive and seamless for users.
<br />
<br />
From layout consistency to micro-interactions, I focused on refining the user journey and ensuring that each screen communicates both function and feel. Below is a snapshot of the high-fidelity designs that bring Clichire to life in full color:
        </div>

        <button className="sketching__title-button" onClick={scrollToTop}>Back to Top <Image src="/assets/icons/upArrow.svg" width={24} height={24} />
        </button>

        <div className="sketching__tab-label">
            <div className={`pointer ${activeTab === "Professional View" ? "sketching__tab-label__active" : ""}`} onClick={() => setActiveTab("Professional View")}>Professional View</div>
            <Image src="/assets/icons/divider.svg" width={24} height={24} />
            <div className={`pointer ${activeTab === "Enterprise View" ? "sketching__tab-label__active" : ""}`} onClick={() => setActiveTab("Enterprise View")}>Enterprise View</div>
        </div>

        <div className="sketching__view">
            <div className="sketching__view__title">Onboarding & Dashboard</div>
            <div className="sketching__view__subtitle">
            The screens below show a new user’s first interaction with Clichire, starting with a simple, guided onboarding process that captures key details like organization type and hiring preferences. Once completed, users are directed to a clean, minimal dashboard that highlights key actions like posting a job or inviting team members helping them get started with confidence and clarity.
            </div>

            <div className="sketching__view__grid">
            <Image src="/assets/high1.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high2.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high3.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high4.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high5.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high6.svg" width={378.6700134277344} height={245.10537719726562} />
            <Image src="/assets/high7.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high8.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/high9.svg" width={378.67} height={269.2764587402344} />
            
            </div>
        </div>
        <div className="sketching__view">
            <div className="sketching__view__title">Jobs</div>
            <div className="sketching__view__subtitle">
            The Job Section enables users to create, manage, and track job postings seamlessly. It’s designed to support businesses of all sizes, with a streamlined layout for posting roles, managing applicants, and progressing candidates through each hiring stage. This section serves as the core of the platform, offering clarity and control to recruiters and hiring managers.
            </div>

            <div className="sketching__view__grid">
            <Image src="/assets/jobs1.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/jobs2.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/jobs3.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/jobs4.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/jobs5.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/jobs6.svg" width={378.6700134277344} height={245.10537719726562} />
            </div>
        </div>
        <div className="sketching__view">
            <div className="sketching__view__title">Recruitment status</div>
            <div className="sketching__view__subtitle">
            The Recruitment Status section provides a clear, organized view of where each candidate stands in the hiring process, from application to offer. It allows recruiters to track progress at a glance, manage next steps efficiently, and make informed decisions with ease.
            </div>

            <div className="sketching__view__grid">
            <Image src="/assets/recruit1.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/recruit2.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/recruit3.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/recruit4.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/recruit5.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/recruit6.svg" width={378.6700134277344} height={245.10537719726562} />
            <Image src="/assets/recruit7.svg" width={378.6700134277344} height={245.10537719726562} />
            </div>
        </div>
        <div className="sketching__view">
            <div className="sketching__view__title">Client management</div>
            <div className="sketching__view__subtitle">
            The Client Management section allows users to efficiently onboard and manage clients within the platform. It offers tools to create customized recruitment forms, track client-specific projects, and maintain seamless communication, ensuring a smooth and personalized hiring experience for each client.
            </div>

            <div className="sketching__view__grid">
            <Image src="/assets/client1.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/client2.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/client3.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/client4.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/client5.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/client6.svg" width={378.6700134277344} height={245.10537719726562} />
            
            </div>
        </div>
        <div className="sketching__view">
            <div className="sketching__view__title">Team collaboration</div>
            <div className="sketching__view__subtitle">
            The Team Collaboration section enables recruiters and hiring managers to work together seamlessly. It allows teams to assign roles, manage permissions, and collaborate on candidate evaluations, ensuring a unified and efficient hiring process across the organization.
            </div>

            <div className="sketching__view__grid">
            <Image src="/assets/team1.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/team2.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/team3.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/team4.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/team5.svg" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/team6.svg" width={378.6700134277344} height={245.10537719726562} />
            
            </div>
        </div>
    </div>
    )
}