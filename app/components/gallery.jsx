import Image from "next/image";

export default function Gallery() {
    return (
        <div className="home__gallery">
            <div className="home__gallery__inner">
                <div className="home__gallery__inner__title">
                    Gallery & Socials
                </div>
                <div className="home__gallery__inner__grid">
                    <Image src="/assets/gallery1.svg" width={426.6666564941406} height={348.3333435058594} />
                    <Image src="/assets/gallery2.svg" width={426.6666564941406} height={348.3333435058594} />
                    <Image src="/assets/gallery3.svg" width={426.6666564941406} height={348.3333435058594} />

                </div>
                <div className="home__gallery__inner__grid-mini">
                    <Image src="/assets/gallery4.svg" width={426.6666564941406} height={348.3333435058594} />
                    <Image src="/assets/gallery5.svg" width={869.3333129882812} height={348.3333435058594} />

                </div>
                <div className="home__gallery__inner__grid">
                    <Image src="/assets/gallery6.svg" width={426.6666564941406} height={348.3333435058594} />
                    <Image src="/assets/gallery7.svg" width={426.6666564941406} height={348.3333435058594} />
                    <Image src="/assets/gallery8.svg" width={426.6666564941406} height={348.3333435058594} />

                </div>

            </div>

        </div>
    )
}