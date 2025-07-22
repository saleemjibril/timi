import Image from "next/image";

export default function Achievements({ subtitle, numbers, bg }) {
    return (
        <div className="achievements" style={{background: bg}}>
            <div className="achievements__inner">
                <div className="achievements__inner__title-group">
                    <div>Achievements</div>
                    <div><div>{subtitle}</div>
                        <button>Back to Top <Image src="/assets/icons/upArrow.svg" width={24} height={24} />
                        </button>

                    </div>
                </div>

                <div className="achievements__inner__metrics">
                    <div className="achievements__inner__metrics__title">
                        Key Metrics
                    </div>
                    <div className="achievements__inner__metrics__grid">

                        {numbers.slice(0, -1).map((number) =>
                            <>
                                <div>
                                    <div>{number?.title}%</div>
                                    <div>{number?.subtitle}</div>
                                </div>
                                <div className="achievements__inner__metrics__grid__divider"></div>
                            </>
                        )}
                        <div>
                            <div>{numbers[numbers?.length - 1]?.title}%</div>
                            <div>{numbers[numbers?.length - 1]?.subtitle}</div>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}