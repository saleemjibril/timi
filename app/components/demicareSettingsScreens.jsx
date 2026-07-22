"use client";

import { useState } from "react";
import { demicareAsset as assetUrl } from "@/lib/assetUrl";

const CANVAS = { w: 1184, h: 704 };
const PHONE = { w: 280, h: 577 };

const TOGGLE = { w: 21.725, h: 10.8625 };

const TOGGLES = [
    { id: "notifications", x: 227.061, y: 98.4385 },
    { id: "email", x: 227.061, y: 139.595 },
    { id: "reminders", x: 227.061, y: 180.751 },
    { id: "marketing", x: 227.061, y: 221.907 },
];

const PHONES = [
    {
        id: "left",
        src: "/assets/settingsScreen1.svg",
        x: 124,
        y: 64,
        w: 280,
    },
    {
        id: "middle",
        src: "/assets/settingsScreen2.svg",
        x: 452,
        y: 64,
        w: 280,
    },
    {
        id: "right",
        src: "/assets/settingsScreen3.svg",
        x: 780,
        y: 64,
        w: 280,
    },
];

export default function DemicareSettingsScreens() {
    const [toggleStates, setToggleStates] = useState(() =>
        Object.fromEntries(TOGGLES.map((toggle) => [toggle.id, true]))
    );

    const toggleSetting = (id) => {
        setToggleStates((states) => ({ ...states, [id]: !states[id] }));
    };

    return (
        <div
            className="demicare__settings"
            style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
        >
            {PHONES.map((phone) => (
                <div
                    key={phone.id}
                    className={`demicare__settings__phone demicare__settings__phone--${phone.id}`}
                    style={{
                        left: `${(phone.x / CANVAS.w) * 100}%`,
                        top: `${(phone.y / CANVAS.h) * 100}%`,
                        width: `${(phone.w / CANVAS.w) * 100}%`,
                    }}
                >
                    <img src={assetUrl(phone.src)} alt="Settings screen design" />

                    {phone.id === "right" &&
                        TOGGLES.map((toggle) => (
                            <button
                                key={toggle.id}
                                type="button"
                                className={`demicare__settings__toggle${
                                    toggleStates[toggle.id]
                                        ? " demicare__settings__toggle--on"
                                        : ""
                                }`}
                                aria-pressed={toggleStates[toggle.id]}
                                onClick={() => toggleSetting(toggle.id)}
                                style={{
                                    left: `${(toggle.x / PHONE.w) * 100}%`,
                                    top: `${(toggle.y / PHONE.h) * 100}%`,
                                    width: `${(TOGGLE.w / PHONE.w) * 100}%`,
                                    height: `${(TOGGLE.h / PHONE.h) * 100}%`,
                                }}
                            />
                        ))}
                </div>
            ))}
        </div>
    );
}
