import Image from "next/image";
import Link from "next/link";

export default function HomeHireMe({ title, image, subtitle }) {
    return (
        <div className="home__hire-me">
            <div className="home__hire-me__inner">

                <div className="home__hire-me__inner__image">
                <Image src={image}objectFit="cover" layout="fill" />
                    </div>
                <div className="home__hire-me__inner__subtitle">
                    {title}
                </div>
                <div className="home__hire-me__inner__title">
                    {subtitle}
                </div>

                <div className="home__hire-me__inner__button-group">
                    <Link href="/contact">
                        Hire me

                        <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} alt="" />
                    </Link>
                    <a href="mailto:ololadegrace.ot@gmail.com">
                        Email

                        <Image src={"/assets/icons/email.svg"} width={34} height={34} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}