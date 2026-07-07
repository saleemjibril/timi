const CANVAS = { w: 1184, h: 704 };

const PHONES = [
    {
        id: "left",
        src: "/assets/analyticsmockup1.svg",
        x: 124,
        y: 64,
        w: 280,
    },
    {
        id: "middle",
        src: "/assets/analyticsmockup2.svg",
        x: 452,
        y: 64,
        w: 280,
    },
    {
        id: "right",
        src: "/assets/analyticsmockup3.svg",
        x: 780,
        y: 64,
        w: 280,
    },
];

export default function DemicareAnalyticsScreens() {
    return (
        <div
            className="demicare__analytics"
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => (
                <img
                    key={phone.id}
                    className="demicare__analytics__phone"
                    src={phone.src}
                    alt="Analytics screen design"
                    style={{
                        left: `${(phone.x / CANVAS.w) * 100}%`,
                        top: `${(phone.y / CANVAS.h) * 100}%`,
                        width: `${(phone.w / CANVAS.w) * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}
