import { demicareAsset as assetUrl } from "@/lib/assetUrl";

const CANVAS = { w: 1184, h: 704 };
const PHONE = { w: 280, h: 577 };

const ANALYTICS_HORIZONTAL_SCROLL = {
    src: "/assets/analyticsHorizontalFullScreen.svg",
    fullScreen: {
        w: 460,
        h: 125,
        scrollStartX: 0,
        contentEndX: 460,
    },
};

const PHONES = [
    {
        id: "left",
        src: "/assets/analyticsScreen1.svg",
        x: 124,
        y: 64,
        w: 280,
        horizontalScroll: {
            ...ANALYTICS_HORIZONTAL_SCROLL,
            slot: { x: 13.2051, y: 93.1543, w: 254.59, h: 86.1657 },
        },
        scroll: {
            src: "/assets/analyticsScreen1FullScreen.svg",
            region: { x: 13.2051, y: 194.99, w: 254.59 },
            tabBarY: 495.25,
            contentEndY: 484.388,
            fullScreen: {
                w: 375,
                h: 994,
                scrollStartY: 268.5,
                tabBarY: 893,
            },
        },
    },
    {
        id: "middle",
        src: "/assets/analyticsScreen2.svg",
        x: 452,
        y: 64,
        w: 280,
        horizontalScroll: {
            ...ANALYTICS_HORIZONTAL_SCROLL,
            slot: { x: 13, y: 92.7905, w: 254.59, h: 86.1657 },
        },
        scroll: {
            src: "/assets/analyticsScreen2FullScreen.svg",
            region: { x: 13, y: 206.249, w: 254.59 },
            tabBarY: 494.887,
            contentEndY: 484.024,
            fullScreen: {
                w: 375,
                h: 1023,
                scrollStartY: 268,
                tabBarY: 922,
            },
        },
    },
    {
        id: "right",
        src: "/assets/analyticsScreen3.svg",
        x: 780,
        y: 64,
        w: 280,
        horizontalScroll: {
            ...ANALYTICS_HORIZONTAL_SCROLL,
            slot: { x: 13.2051, y: 94.1543, w: 254.59, h: 86.1657 },
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

export default function DemicareAnalyticsScreens() {
    return (
        <div
            className="demicare__analytics"
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
                        className={`demicare__analytics__phone demicare__analytics__phone--${phone.id}`}
                        style={{
                            left: `${(phone.x / CANVAS.w) * 100}%`,
                            top: `${(phone.y / CANVAS.h) * 100}%`,
                            width: `${(phone.w / CANVAS.w) * 100}%`,
                        }}
                    >
                        <img src={assetUrl(phone.src)} alt="Analytics screen design" />

                        {horizontalScroll && (
                            <div
                                className="demicare__analytics__scroll demicare__analytics__scroll--horizontal"
                                style={{
                                    left: `${(horizontalScroll.slot.x / PHONE.w) * 100}%`,
                                    top: `${(horizontalScroll.slot.y / PHONE.h) * 100}%`,
                                    width: `${(horizontalScroll.slot.w / PHONE.w) * 100}%`,
                                    height: `${(horizontalScroll.slot.h / PHONE.h) * 100}%`,
                                }}
                                onWheel={(event) => event.stopPropagation()}
                            >
                                <div
                                    className="demicare__analytics__scroll-inner demicare__analytics__scroll-inner--horizontal"
                                    style={{
                                        aspectRatio: `${horizontalScrollMetrics.scrollableWidth} / ${horizontalScroll.fullScreen.h}`,
                                    }}
                                >
                                    <img
                                        src={assetUrl(horizontalScroll.src)}
                                        alt="Analytics stats scrollable content"
                                        style={{
                                            left: `calc(-${horizontalScroll.fullScreen.scrollStartX} / ${horizontalScrollMetrics.scrollableWidth} * 100%)`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {scroll && (
                            <div
                                className="demicare__analytics__scroll"
                                style={{
                                    left: `${(scroll.region.x / PHONE.w) * 100}%`,
                                    top: `${(scroll.region.y / PHONE.h) * 100}%`,
                                    width: `${(scroll.region.w / PHONE.w) * 100}%`,
                                    height: `${(scrollMetrics.regionHeight / PHONE.h) * 100}%`,
                                }}
                            >
                                <div
                                    className="demicare__analytics__scroll-inner"
                                    style={{
                                        aspectRatio: `${scroll.fullScreen.w} / ${scrollMetrics.scrollableHeight}`,
                                    }}
                                >
                                    <img
                                        src={assetUrl(scroll.src)}
                                        alt="Analytics screen scrollable content"
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
