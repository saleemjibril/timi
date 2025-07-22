import Image from "next/image";

export default function EazInviteProblem(params) {
    return (
       <div className="eazinvite__problem">
       <div className="eazinvite__problem__title">
       The Problem
        </div>
       <div className="eazinvite__problem__subtitle">
       With events becoming more digital, one major challenge has been the disjointed way invitations and guest management are handled. Event planners often juggle multiple tools to send invites, track RSVPs, and manage guest updates which leads to missed responses, poor coordination, and last-minute confusion.
<br />
<br />
As a result, hosts face low engagement, frustrated guests, and disorganized events that fall short of expectations.
        </div>

        <Image src={"/assets/eazinviteProblem.svg"} width={1016} height={753} />
       
       </div>
    )
}