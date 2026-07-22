import Image from "next/image";
import { demicareAsset as assetUrl } from "@/lib/assetUrl";

const PHONE = { w: 311, h: 549 };

const SCROLL = {
    src: "/assets/introSingleFullScreen.svg",
    region: { x: 58.4614, y: 106.296, w: 194.316 },
    tabBarY: 408.164,
    contentEndY: 401.17,
    fullScreen: {
        w: 375,
        h: 1275,
        scrollStartY: 128,
        tabBarY: 1174,
    },
};

const mapPhoneYToFullScreen = (y, scroll) => {
    const t = (y - scroll.region.y) / (scroll.tabBarY - scroll.region.y);
    return (
        scroll.fullScreen.scrollStartY +
        t * (scroll.fullScreen.tabBarY - scroll.fullScreen.scrollStartY)
    );
};

const getScrollMetrics = (scroll) => {
    const scrollEndY = mapPhoneYToFullScreen(scroll.contentEndY, scroll);
    const scrollableHeight = scrollEndY - scroll.fullScreen.scrollStartY;

    return {
        scrollEndY,
        scrollableHeight,
        regionHeight: scroll.tabBarY - scroll.region.y,
    };
};

export default function DemicareIntroduction() {
    const scrollMetrics = getScrollMetrics(SCROLL);

    return (
        <div className="demicare__introduction">
            <div className="demicare__introduction__visual">
                <div className="demicare__introduction__phone">
                    <img src={assetUrl("/assets/introSingle.svg")} alt="DemiCare home screen" />

                    <div
                        className="demicare__introduction__scroll"
                        style={{
                            left: `${(SCROLL.region.x / PHONE.w) * 100}%`,
                            top: `${(SCROLL.region.y / PHONE.h) * 100}%`,
                            width: `${(SCROLL.region.w / PHONE.w) * 100}%`,
                            height: `${(scrollMetrics.regionHeight / PHONE.h) * 100}%`,
                        }}
                    >
                        <div
                            className="demicare__introduction__scroll-inner"
                            style={{
                                aspectRatio: `${SCROLL.fullScreen.w} / ${scrollMetrics.scrollableHeight}`,
                            }}
                        >
                            <img
                                src={assetUrl(SCROLL.src)}
                                alt="DemiCare home screen scrollable content"
                                style={{
                                    top: `calc(-${SCROLL.fullScreen.scrollStartY} / ${scrollMetrics.scrollableHeight} * 100%)`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="demicare__introduction__card1">
                <div className="demicare__introduction__card1__title">
                    Introduction
                </div>
                <div className="demicare__introduction__card1__subtitle">
                    DemiCare is a skincare platform designed for individuals
                    who want more than just beauty promises.
                    <br />
                    <br />
                    The goal of this project is to build a solution that
                    empowers users track their skincare journey, using
                    AI-powered facial scans and routine logging helping them
                    understand how their skin is improving over time.
                    <br />
                    <br />
                    By combining user-inputted routines with AI-powered scans
                    every 14 days, DemiCare monitors skin changes and shows
                    users how their products are truly performing.
                </div>

                <button className="demicare__introduction__card1__button">
                    View Hi-Fi
                    <Image
                        src="/assets/icons/downArrow.svg"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
}
