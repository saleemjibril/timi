"use client";
import Image from "next/image";
import { useTheme } from "./themeProvider";

const LIGHT_STYLE_GUIDE_ASSETS = new Set([
  "/assets/icongraphy.svg",
  "/assets/colorscheme.svg",
  "/assets/typography.svg",
  "/assets/uicomponents.svg",
  "/assets/demicareIcongraphy.svg",
  "/assets/eazinviteIcongraphy.svg",
  "/assets/eazinviteColorScheme.svg",
  "/assets/eazinviteTypography.svg",
  "/assets/eazinviteUIComponents.svg",
]);

function themedImageSrc(src, theme) {
  if (theme !== "light" || !src || !LIGHT_STYLE_GUIDE_ASSETS.has(src)) {
    return src;
  }
  return src.replace(/(\.svg|\.png|\.jpg|\.jpeg|\.webp)$/i, "Light$1");
}

export default function StyleGuide({ subtitle, images }) {
  const { theme } = useTheme();
  const themedImages = (images || []).map((src) => themedImageSrc(src, theme));

  return (
    <div className="style-guide">
      <div className="style-guide__title">Style Guide</div>
      <div className="style-guide__subtitle">{subtitle}</div>

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Back to Top{" "}
        <Image src="/assets/icons/upArrow.svg" width={24} height={24} alt="" />
      </button>

      <div className="style-guide__grid">
        <Image src={themedImages[0]} width={644} height={568} alt="" />
        <Image src={themedImages[1]} width={644} height={568} alt="" />
      </div>

      <Image
        className="style-guide__typography"
        src={themedImages[2]}
        width={644}
        height={568}
        alt=""
      />

     {themedImages[3] &&  <Image
        className="style-guide__uicomponents"
        src={themedImages[3]}
        width={644}
        height={568}
        alt=""
      />}
    </div>
  );
}
