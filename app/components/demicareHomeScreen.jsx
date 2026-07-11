const CANVAS = { w: 1184, h: 704 };
const PHONE = { w: 280, h: 577 };

const PHONES = [
    {
        id: "left",
        src: "/assets/homeScreen1.svg",
        x: 124,
        y: 64,
        w: 280,
        scroll: {
            src: "/assets/homeScreenFullScreen.svg",
            region: { x: 13.2051, y: 99.2646, w: 254.59 },
            tabBarY: 495.25,
            contentEndY: 485.948,
            fullScreen: {
                w: 375,
                h: 1275,
                scrollStartY: 128,
                tabBarY: 1174,
            },
        },
    },
    {
        id: "middle",
        src: "/assets/homeScreen2.svg",
        x: 452,
        y: 64,
        w: 280,
    },
    {
        id: "right",
        src: "/assets/homeScreen3.svg",
        x: 780,
        y: 64,
        w: 280,
        scroll: {
            src: "/assets/homeScreen3FullScreen.svg",
            region: { x: 13.2051, y: 90.6218, w: 254.59 },
            tabBarY: 496.25,
            contentEndY: 485.388,
            fullScreen: {
                w: 375,
                h: 1237,
                scrollStartY: 84.15,
                tabBarY: 1136,
            },
        },
    },
];

const mapPhoneYToFullScreen = (y, scroll) => {
    const t = (y - scroll.region.y) / (scroll.tabBarY - scroll.region.y);
    return (
        scroll.fullScreen.scrollStartY +
        t * (scroll.fullScreen.tabBarY - scroll.fullScreen.scrollStartY)
    );
};

const getScrollMetrics = (scroll) => {
    const scrollEndY = mapPhoneYToFullScreen(scroll.contentEndY, scroll);
    const scrollableHeight =
        scrollEndY - scroll.fullScreen.scrollStartY;

    return {
        scrollEndY,
        scrollableHeight,
        regionHeight: scroll.tabBarY - scroll.region.y,
    };
};

export default function DemicareHomeScreen() {
    return (
        <div
            className="demicare__home"
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => {
                const scroll = phone.scroll;
                const scrollMetrics = scroll ? getScrollMetrics(scroll) : null;

                return (
                    <div
                        key={phone.id}
                        className={`demicare__home__phone demicare__home__phone--${phone.id}`}
                        style={{
                            left: `${(phone.x / CANVAS.w) * 100}%`,
                            top: `${(phone.y / CANVAS.h) * 100}%`,
                            width: `${(phone.w / CANVAS.w) * 100}%`,
                        }}
                    >
                        <img src={phone.src} alt="Home screen design" />

                        {scroll && (
                            <div
                                className="demicare__home__scroll"
                                style={{
                                    left: `${(scroll.region.x / PHONE.w) * 100}%`,
                                    top: `${(scroll.region.y / PHONE.h) * 100}%`,
                                    width: `${(scroll.region.w / PHONE.w) * 100}%`,
                                    height: `${(scrollMetrics.regionHeight / PHONE.h) * 100}%`,
                                }}
                            >
                                <div
                                    className="demicare__home__scroll-inner"
                                    style={{
                                        aspectRatio: `${scroll.fullScreen.w} / ${scrollMetrics.scrollableHeight}`,
                                    }}
                                >
                                    <img
                                        src={scroll.src}
                                        alt="Home screen scrollable content"
                                        style={{
                                            top: `calc(-${scroll.fullScreen.scrollStartY} / ${scrollMetrics.scrollableHeight} * 100%)`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
