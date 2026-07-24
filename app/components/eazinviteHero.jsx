import Image from "next/image";
import Link from "next/link";

export default function EazInviteHero(params) {
    return (
        <div className="eazinvite__hero">
            <div className="eazinvite__hero__inner">
                <div>
                    <div className="eazinvite__hero__inner__title">

                        An <span>Event Management</span> tool for creating, sending, and tracking invitations.
                    </div>
                    <div className="eazinvite__hero__inner__subtitle">
                        Eazinvite simplifies how events are planned, managed, and experienced. From creating beautiful digital invitations to managing guest lists, tracking RSVPs, sending reminders, and monitoring event performance in real-time, the platform empowers hosts and admins with the tools they need to run organized, engaging, and stress-free events.
                    </div>

                    <Link href="/contact" className="eazinvite__hero__inner__button">Work with me <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} alt="" /></Link>

                </div>

                <div className="eazinvite__hero__inner__bg">
                    <Image src={"/assets/eazinviteHero.svg"} width={600} height={646.15380859375} />
                </div>
            </div>
        </div>
    )
}
