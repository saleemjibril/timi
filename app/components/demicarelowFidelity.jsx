import Image from "next/image";

export default function DemicarelowFidelity() {
    return (
        <div className="demicare__low-fidelity">
        <div className="demicare__low-fidelity__inner">
            <div>
                <div className="demicare__low-fidelity__inner__title">
                    Low Fi Designs
                </div>
                <div className="demicare__low-fidelity__inner__subtitle">
                    For DemiCare, I started by sketching low-fidelity wireframes on paper. This simple, quick approach helped me visualize the layout, user flow, and key interactions, ensuring everything worked seamlessly before moving into the high-fidelity design phase.

                    It was an essential step to align ideas and spot early usability challenges.
                </div>
                <button className="">View Hi-Fi <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
            </button>
            </div>

            <Image src="/assets/demicarelowFidelity.svg" width={638} height={595} />
        </div>
        </div>
    )
}