import Image from "next/image";

export default function DesignTools() {
    return (
        <div className="home__design-tools">
                <div className="home__design-tools__card1">
                    My Design Tools
                </div>
                <div className="home__design-tools__card2">
                    <div className="home__design-tools__card2__card">
                        <Image src={"/assets/icons/figma.svg"} width={64} height={64} />
                        <div>
                            <div className="home__design-tools__card2__card__title">
                                Figma
                            </div>
                            <div className="home__design-tools__card2__card__subtitle">
                                For creating web, mobile interfaces and interactive prototypes.
                            </div>
                        </div>
                    </div>
                    <div className="home__design-tools__card2__card">
                        <Image src={"/assets/icons/framer.svg"} width={64} height={64} />
                        <div>
                            <div className="home__design-tools__card2__card__title">
                                Framer
                            </div>
                            <div className="home__design-tools__card2__card__subtitle">
                                For production-ready websites and web applications
                            </div>
                        </div>
                    </div>
                    <div className="home__design-tools__card2__card">
                        <Image src={"/assets/icons/figma.svg"} width={64} height={64} />
                        <div>
                            <div className="home__design-tools__card2__card__title">
                                FigJam
                            </div>
                            <div className="home__design-tools__card2__card__subtitle">
                                Used for early-stage ideation, user flow mapping.                        </div>
                        </div>
                    </div>
                    <div className="home__design-tools__card2__card">
                        <Image src={"/assets/icons/figma.svg"} width={64} height={64} />
                        <div>
                            <div className="home__design-tools__card2__card__title">
                                Maze
                            </div>
                            <div className="home__design-tools__card2__card__subtitle">
                                Used to simplify the process of identifying what works and what doesn't in design.                        </div>
                        </div>
                    </div>
                    <div className="home__design-tools__card2__card">
                        <Image src={"/assets/icons/team.svg"} width={64} height={64} />
                        <div>
                            <div className="home__design-tools__card2__card__title">
                                Jira, Teams & Slack
                            </div>
                            <div className="home__design-tools__card2__card__subtitle">
                                Used for communication, collaboration and manage workflows.
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}