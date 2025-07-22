import Image from "next/image";

export default function ClicHireSlide() {
    return (
        <div className="clichire-slide">
        <div className="clichire-slide__card">
            <Image src="/assets/clichireSlide.jpg" objectFit="cover" layout="fill" />
            <div className="clichire-slide__card">

            <div className="clichire-slide__card__title">
                Nneka works at a large enterprise with a dedicated recruitment team. She manages multiple job pipelines simultaneously, collaborates with different hiring teams, and reports to upper management. She also works with external clients through a white-label recruiting model.


            </div>

            <div className="clichire-slide__card__name">Nneka</div>
            <div className="clichire-slide__card__role">Recruiter</div>
            </div>


        </div>
    </div>
    )
}