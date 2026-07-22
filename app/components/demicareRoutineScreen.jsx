"use client";

import { useState } from "react";
import { demicareAsset as assetUrl } from "@/lib/assetUrl";

const CANVAS = { w: 1184, h: 704 };
const PHONE = { w: 280, h: 577 };

const ROW = { x: 24.0674, w: 232.865, h: 54.9914 };
const SWIPE_OFFSET = 40.7569;
const MENU_HIT_SIZE = 32;

const DELETE = {
    svgW: 275,
    stripW: 52,
    stripX: 202.194,
    bgPosX: 202.194 / (275 - 52),
    // Red trash icon lives on row 1 in the after-state SVG
    iconBgPosY: 207.21 / (577 - ROW.h),
};

const BG_POS_X = ROW.x / (PHONE.w - ROW.w);

const ROUTINE_ROWS = [
    { id: "1", y: 207.21, menuX: 243.354, menuY: 220.789 },
    { id: "2", y: 273.064, menuX: 243.354, menuY: 285.738 },
    { id: "3", y: 338.918, menuX: 243.354, menuY: 351.592 },
];

const PHONES = [
    {
        id: "left",
        src: "/assets/routineScreen1.svg",
        x: 124,
        y: 64,
        w: 280,
    },
    {
        id: "middle",
        src: "/assets/routineScreen2.svg",
        x: 452,
        y: 64,
        w: 280,
    },
    {
        id: "right",
        src: "/assets/routineScreen3.svg",
        x: 780,
        y: 64,
        w: 280,
    },
];

function RoutineSwipeRow({ row, swiped, onToggle }) {
    const bgPosY = row.y / (PHONE.h - ROW.h);
    const menuX = row.menuX - ROW.x;
    const menuY = row.menuY - row.y;

    return (
        <div
            className="demicare__routine__swipe-track"
            style={{ top: `${(row.y / PHONE.h) * 100}%` }}
        >
            <button
                type="button"
                className={`demicare__routine__delete-action${
                    swiped ? " demicare__routine__delete-action--visible" : ""
                }`}
                aria-label="Delete routine"
                aria-hidden={!swiped}
                tabIndex={swiped ? 0 : -1}
                style={{
                    backgroundImage: `url(${assetUrl("/assets/routineScreen1DeleteInteraction.svg")})`,
                    backgroundPosition: `${DELETE.bgPosX * 100}% ${
                        DELETE.iconBgPosY * 100
                    }%`,
                }}
            />

            <div
                className={`demicare__routine__swipe-card${
                    swiped ? " demicare__routine__swipe-card--swiped" : ""
                }`}
                style={{
                    backgroundImage: `url(${assetUrl("/assets/routineScreen1.svg")})`,
                    backgroundPosition: `${BG_POS_X * 100}% ${bgPosY * 100}%`,
                }}
            >
                <button
                    type="button"
                    className="demicare__routine__menu-trigger"
                    aria-label="Reveal delete option"
                    aria-pressed={swiped}
                    onClick={onToggle}
                    style={{
                        left: `${
                            ((menuX - MENU_HIT_SIZE / 2) / ROW.w) * 100
                        }%`,
                        top: `${
                            ((menuY - MENU_HIT_SIZE / 2) / ROW.h) * 100
                        }%`,
                        width: `${(MENU_HIT_SIZE / ROW.w) * 100}%`,
                        height: `${(MENU_HIT_SIZE / ROW.h) * 100}%`,
                    }}
                />
            </div>
        </div>
    );
}

export default function DemicareRoutineScreen() {
    const [swipedRows, setSwipedRows] = useState({});

    const toggleRow = (id) => {
        setSwipedRows((rows) => ({ ...rows, [id]: !rows[id] }));
    };

    return (
        <div
            className="demicare__routine"
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => (
                <div
                    key={phone.id}
                    className={`demicare__routine__phone demicare__routine__phone--${phone.id}`}
                    style={{
                        left: `${(phone.x / CANVAS.w) * 100}%`,
                        top: `${(phone.y / CANVAS.h) * 100}%`,
                        width: `${(phone.w / CANVAS.w) * 100}%`,
                    }}
                >
                    <img src={assetUrl(phone.src)} alt="Routine screen design" />

                    {phone.id === "left" &&
                        ROUTINE_ROWS.map((row) => (
                            <RoutineSwipeRow
                                key={row.id}
                                row={row}
                                swiped={!!swipedRows[row.id]}
                                onToggle={() => toggleRow(row.id)}
                            />
                        ))}
                </div>
            ))}
        </div>
    );
}
