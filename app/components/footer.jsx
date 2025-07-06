import Image from "next/image";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__inner">
                <div className="footer__inner__title-group">
                    <Image src="/assets/icons/logo.svg" width={63} height={99} />

                    <div className="footer__inner__title-group__social-group">
                        <Image src="/assets/icons/home.svg" width={32} height={32} />
                        <Image src="/assets/icons/email.svg" width={32} height={32} />
                        <Image src="/assets/icons/linkedin.svg" width={32} height={32} />
                        <Image src="/assets/icons/twitter.svg" width={32} height={32} />
                        <Image src="/assets/icons/tiktok.svg" width={32} height={32} />
                        <Image src="/assets/icons/instagram.svg" width={32} height={32} />

                    </div>
                </div>

                <div className="footer__inner__group">
                    <div>
                        <div className="footer__inner__group__title">
                            Ololade.designs
                        </div>

                        <button className="footer__inner__group__button">
                            Work with me

                            <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} />
                        </button>
                    </div>

                    <div className="footer__inner__group__links">
                        <a href="">Home</a>
                        <a href="">Projects</a>
                        <a href="">Experience</a>
                        <a href="">Resume</a>
                    </div>
                </div>

            <Image className="footer__inner__bg" src={"/assets/footer-bg.svg"} width={1440} height={224} />
            </div>


        </div>
    )
}