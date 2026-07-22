import { demicareAsset as assetUrl } from "@/lib/assetUrl";

const CANVAS = { w: 1184, h: 704 };
const PHONE = { w: 280, h: 577 };

const PHONES = [
    {
        id: "left",
        src: "/assets/trackProgress1.svg",
        x: 124,
        y: 64,
        w: 280,
    },
    {
        id: "middle",
        src: "/assets/trackProgress2.svg",
        x: 452,
        y: 64,
        w: 280,
        scroll: {
            src: "/assets/trackProgress2FullScreen.svg",
            region: { x: 12.5898, y: 199.378, w: 254.59 },
            tabBarY: 494.887,
            contentEndY: 484.024,
            fullScreen: {
                w: 375,
                h: 1682,
                scrollStartY: 269,
                tabBarY: 1581,
            },
        },
    },
    {
        id: "right",
        src: "/assets/trackProgress3.svg",
        x: 780,
        y: 64,
        w: 280,
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

export default function DemicareTrackProgressScreens() {
    return (
        <div
            className="demicare__track-progress"
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => {
                const scroll = phone.scroll;
                const scrollMetrics = scroll ? getScrollMetrics(scroll) : null;

                return (
                    <div
                        key={phone.id}
                        className={`demicare__track-progress__phone demicare__track-progress__phone--${phone.id}`}
                        style={{
                            left: `${(phone.x / CANVAS.w) * 100}%`,
                            top: `${(phone.y / CANVAS.h) * 100}%`,
                            width: `${(phone.w / CANVAS.w) * 100}%`,
                        }}
                    >
                        <img src={assetUrl(phone.src)} alt="Track progress screen design" />

                        {scroll && (
                            <div
                                className="demicare__track-progress__scroll"
                                style={{
                                    left: `${(scroll.region.x / PHONE.w) * 100}%`,
                                    top: `${(scroll.region.y / PHONE.h) * 100}%`,
                                    width: `${(scroll.region.w / PHONE.w) * 100}%`,
                                    height: `${(scrollMetrics.regionHeight / PHONE.h) * 100}%`,
                                }}
                            >
                                <div
                                    className="demicare__track-progress__scroll-inner"
                                    style={{
                                        aspectRatio: `${scroll.fullScreen.w} / ${scrollMetrics.scrollableHeight}`,
                                    }}
                                >
                                    <img
                                        src={assetUrl(scroll.src)}
                                        alt="Track progress scrollable content"
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
