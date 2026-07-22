import { demicareAsset as assetUrl } from "@/lib/assetUrl";

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
        horizontalScroll: {
            src: "/assets/homeScreen1HorizontalScroll.svg",
            slot: { x: 16, y: 544, w: 359, h: 240 },
            fullScreen: {
                w: 656,
                h: 241,
                scrollStartX: 0,
                contentEndX: 656,
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
            region: { x: 13.2051, y: 121.696, w: 254.59 },
            tabBarY: 496.25,
            contentEndY: 485.388,
            fullScreen: {
                w: 375,
                h: 1237,
                scrollStartY: 159,
                tabBarY: 1136,
            },
        },
        horizontalScroll: {
            src: "/assets/homeScreen1HorizontalScroll.svg",
            slot: { x: 16, y: 470, w: 359, h: 240 },
            fullScreen: {
                w: 656,
                h: 241,
                scrollStartX: 0,
                contentEndX: 656,
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

const getHorizontalScrollMetrics = (horizontalScroll) => ({
    scrollableWidth:
        horizontalScroll.fullScreen.contentEndX -
        horizontalScroll.fullScreen.scrollStartX,
});

export default function DemicareHomeScreen() {
    return (
        <div
            className="demicare__home"
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => {
                const scroll = phone.scroll;
                const horizontalScroll = phone.horizontalScroll;
                const scrollMetrics = scroll ? getScrollMetrics(scroll) : null;
                const horizontalScrollMetrics = horizontalScroll
                    ? getHorizontalScrollMetrics(horizontalScroll)
                    : null;

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
                        <img src={assetUrl(phone.src)} alt="Home screen design" />

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
                                        src={assetUrl(scroll.src)}
                                        alt="Home screen scrollable content"
                                        style={{
                                            top: `calc(-${scroll.fullScreen.scrollStartY} / ${scrollMetrics.scrollableHeight} * 100%)`,
                                        }}
                                    />

                                    {horizontalScroll && (
                                        <div
                                            className="demicare__home__scroll demicare__home__scroll--horizontal"
                                            style={{
                                                left: `${(horizontalScroll.slot.x / scroll.fullScreen.w) * 100}%`,
                                                top: `calc(${(horizontalScroll.slot.y - scroll.fullScreen.scrollStartY) / scrollMetrics.scrollableHeight} * 100%)`,
                                                width: `${(horizontalScroll.slot.w / scroll.fullScreen.w) * 100}%`,
                                                height: `calc(${horizontalScroll.slot.h} / ${scrollMetrics.scrollableHeight} * 100%)`,
                                            }}
                                            onWheel={(event) =>
                                                event.stopPropagation()
                                            }
                                        >
                                            <div
                                                className="demicare__home__scroll-inner demicare__home__scroll-inner--horizontal"
                                                style={{
                                                    aspectRatio: `${horizontalScrollMetrics.scrollableWidth} / ${horizontalScroll.fullScreen.h}`,
                                                }}
                                            >
                                                <img
                                                    src={assetUrl(horizontalScroll.src)}
                                                    alt="Guided topics scrollable content"
                                                    style={{
                                                        left: `calc(-${horizontalScroll.fullScreen.scrollStartX} / ${horizontalScrollMetrics.scrollableWidth} * 100%)`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
