import Image from "next/image";
import Link from "next/link";

export default function DesignExploration() {
   return (
    <div className="home__design-exploration">
<div className="home__design-exploration__inner">
<div className="home__design-exploration__inner__title">
Design Exploration
</div>

<div className="home__design-exploration__inner__link">Mobile (Web3 & Web2)</div>
<div className="home__design-exploration__inner__grid">
    <Image src="/assets/exploration1.svg" width={480} height={520} />
    <Image src="/assets/exploration2.svg" width={480} height={520} />
    <Image src="/assets/exploration3.svg" width={480} height={520} />
</div>

<div className="home__design-exploration__inner__link">Landing Page Design</div>
<div className="home__design-exploration__inner__grid-mini">
    <Image src="/assets/landingpages1.svg" width={891} height={586} />
    <Image src="/assets/landingpages2.svg" width={891} height={586} />
</div>
    </div>
    </div>
    )}