import Image from "next/image";

export default function EazinviteDesignStartergy() {
    return (
        <div className="eazinvite__problem">
            <div className="eazinvite__problem__title-group">
                <div className="eazinvite__problem__title-group__title">Design Strategy</div>

                <div>
                    <div className="eazinvite__problem__title-group__subtitle">My approach began by analyzing the PRD and aligning it with business goals to simplifying digital invitation processes. I worked closely with stakeholder inputs to map out the user roles for hosts, guests, and admins for the unique needs of each. This helped me design an dashboard that manage users, monitor events, and track RSVP data efficiently. With insights from the problem areas, I built a clear user flow for event creation, guest list management, and analytics tracking. From there, I developed mid-to-high fidelity wireframes to visualize and validate the structure of the entire experience.</div>


                    <button className="eazinvite__problem__title-group__button">View Hi-Fi <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
                    </button>
                    


                </div>
            </div>

            <div className="eazinvite__problem__tasks">
                <div className="eazinvite__problem__tasks__title">
                    Tasks I carried out
                </div>

                <div className="eazinvite__problem__tasks__card">
                    <div>
                        <div className="eazinvite__problem__tasks__card__title">
                            PRD Alignment
                        </div>
                        <div className="eazinvite__problem__tasks__card__subtitle">
                            I aligned the expectations with business goals, particularly around simplifying the digital invitation process. This ensured that the direction of the product would solve key pain points like invitation tracking, RSVP data accuracy, and event monitoring.
                        </div>
                    </div>


                    <Image src="/assets/eazinviteDesign1.svg" width={656} height={523} />
                </div>

                <div className="eazinvite__problem__tasks__card">
                    <div>
                        <div className="eazinvite__problem__tasks__card__title">
                            User Role Mapping
                        </div>
                        <div className="eazinvite__problem__tasks__card__subtitle">
                            I worked closely with stakeholders to define the distinct roles of users hosts, guests, and admins. Each role had unique needs and access levels, which helped in structuring the platform’s flow, permissions, and interface logic. This clarity played a vital role in developing a system that offers a tailored experience for each user type.
                        </div>
                    </div>


                    <Image src="/assets/eazinviteDesign2.svg" width={656} height={523} />
                </div>
                <div className="eazinvite__problem__tasks__card">
                    <div>
                        <div className="eazinvite__problem__tasks__card__title">
                            User Flow Design
                        </div>
                        <div className="eazinvite__problem__tasks__card__subtitle">
                            To ensure smooth navigation and clarity of operations, I developed detailed user flows for critical features like event creation, guest list management, and admin analytics. This visual mapping allowed stakeholders to see how users would interact with each part of the system and supported a streamlined experience across the board.
                        </div>
                    </div>


                    <Image src="/assets/eazinviteDesign3.svg" width={656} height={523} />
                </div>
                <div className="eazinvite__problem__tasks__card">
                    <div>
                        <div className="eazinvite__problem__tasks__card__title">
                            Wireframes & Structure
                        </div>
                        <div className="eazinvite__problem__tasks__card__subtitle">
                            I created mid-to-high fidelity wireframes to visualize how the dashboard and other key features would look and function. This process helped validate structure early, ensuring visual hierarchy, discoverability of insights, and ease of task completion especially for busy event planners managing multiple events.
                        </div>
                    </div>


                    <Image src="/assets/eazinviteDesign4.svg" width={656} height={523} />
                </div>

            </div>


            <div className="eazinvite__problem__title-group">
                <div className="eazinvite__problem__title-group__title">Solution</div>

                <div>
                    <div className="eazinvite__problem__title-group__subtitle">After conducting a series of research and aligning with business objectives, I identified the core features needed to solve the problem areas around digital event management. These features were designed with clarity and usability in mind, and are broken into four core sections: Template Customization, RSVP Tracking, Invitation Management, Guest Management, each tailored to ensure smooth coordination between Hosts (Event planner/managers) and guest.</div>


                    <button className="eazinvite__problem__title-group__button">View Hi-Fi <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
                    </button>


                </div>
            </div>

            <div className="eazinvite__problem__cards">
                <div className="eazinvite__problem__cards__card">
                    <Image src="/assets/icons/templateCustomization.svg" width={48} height={48} />

                    <div className="eazinvite__problem__cards__card__title">
                        Template Customization
                    </div>
                    <div className="eazinvite__problem__cards__card__subtitle">
                        Users can choose from a library of pre-designed templates and personalize them to suit their event theme, tone, or style without needing to create from scratch.
                    </div>
                </div>
                <div className="eazinvite__problem__cards__card">
                    <Image src="/assets/icons/rsvpTracking.svg" width={48} height={48} />

                    <div className="eazinvite__problem__cards__card__title">
                        RSVP Tracking
                    </div>
                    <div className="eazinvite__problem__cards__card__subtitle">
                        This feature allows users view real-time RSVP data, send reminders to non-responders, and download RSVP reports in CSV format to stay fully in control.
                    </div>
                </div>
                <div className="eazinvite__problem__cards__card">
                    <Image src="/assets/icons/rsvpTracking.svg" width={48} height={48} />

                    <div className="eazinvite__problem__cards__card__title">
                    Invitation Management
                    </div>
                    <div className="eazinvite__problem__cards__card__subtitle">
                    It makes it easy to send out personalized digital invitations, monitor delivery status, and track how many have been opened or interacted with in real time.
                    </div>
                </div>
                <div className="eazinvite__problem__cards__card">
                    <Image src="/assets/icons/guestManagement.svg" width={48} height={48} />

                    <div className="eazinvite__problem__cards__card__title">
                    Guest Management
                    </div>
                    <div className="eazinvite__problem__cards__card__subtitle">
                    Add, edit, and organize your guest list with ease. Tag VIPs, track individual RSVP status, and ensure smooth event planning with centralized guest information.
                    </div>
                </div>
            </div>
        </div>
    )
}