import Image from "next/image";

export default function Hideout() {
    return (
        <div className="home__hideout">
            <Image src="/assets/hideout1.svg" width={905} height={321} />
            <Image src="/assets/hideout2.svg" width={407} height={170} />

        </div>
    )
}