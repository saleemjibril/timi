import Image from "next/image";

export default function LowFidelity() {
    return (
        <div className="sketching">
        <div className="sketching__title">
        Sketching the Blueprint (Low-Fidelity)
        </div>
        <div className="sketching__subtitle">
        Before diving into high-fidelity visuals, I started with low-fidelity wireframes, think of it as the "bones" of the interface. These frames help outline layout, structure, and functionality without the distraction of colors or fancy visuals.
<br />
<br />
Built using insights from my initial research and user flows, these wireframes served as a quick and clear way to test and iterate on ideas. At this stage, the focus was purely on usability and flow, not polish. As you'll see below, each screen lays the groundwork for what would eventually become a dynamic, user-friendly experience.
        </div>

        <button className="sketching__title-button">View Hi-Fi <Image src="/assets/icons/downArrow.svg" width={24} height={24} />
        </button>

        <div className="sketching__tab-label">
            <div className="sketching__tab-label__active">Professional View</div>
            <Image src="/assets/icons/divider.svg" width={24} height={24} />
            <div>Enterprise View</div>
        </div>

        <div className="sketching__view">
            <div className="sketching__view__title">Professional View</div>

            <div className="sketching__view__grid">
            <Image src="/assets/view1.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view2.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view3.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view4.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view5.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view6.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view7.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view8.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view9.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view10.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view11.png" width={378.6700134277344} height={269.2764587402344} />
            <Image src="/assets/view12.png" width={378.6700134277344} height={269.2764587402344} />
            </div>
        </div>
    </div>
    )
}