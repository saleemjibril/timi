import Image from "next/image";

export default function HomeHero(params) {
    return (
        <div className="home__hero">
        <div className="home__hero__group">
        <div className="home__hero__group__card1">
          <div className="home__hero__group__card1__pills">
            <div>Product Design</div>
            <div>UX Research</div>
            <div>UX Strategy</div>
            <div>Framer</div>
          </div>
  
         <Image src="/assets/home-hero-title.svg" width={589} height={216} />
          </div>
  
          <div className="home__hero__group__card2">
          <div>
          I design experiences that are growth driven, scalable and user friendly by integrating product strategy, marketing insight and behavioral psychology, <span>*basically, I kick ass*</span>. I specialize in turning bold ideas into beautiful, intuitive products that drives business growth and meets user needs.
          </div>
  
          <button>
                  Work with me
  
  <Image src={"/assets/icons/rightArrow.svg"} width={18} height={18} />
                  </button>
          </div>
  
        </div>
          <div className="home__hero__image-grid">
          <Image src={"/assets/hero1.png"} width={383} height={468} />
          <Image src={"/assets/hero2.png"} width={498} height={468} />
          <Image src={"/assets/hero3.png"} width={383} height={468} />
          </div>
  
          <Image className="home__hero__bg" src={"/assets/hero-bg.svg"} width={1440} height={224} />
  
        </div>
    )
}