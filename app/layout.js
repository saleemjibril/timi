import "../styles/index.scss";
import { Inter, Syne, Geist, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: {
    default: "Ololade.designs — Timilehin | Product Designer",
    template: "%s | Ololade.designs",
  },
  description:
    "Product designer helping businesses move from idea to launch. Specializing in UX research, product strategy, and high-fidelity design across web and mobile.",
};

// const silkFlower = localFont({
//   src: "../public/assets/SilkFlower.woff2",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-silkflower",
// });

// const durkWide = localFont({
//   src: "../public/assets/DrukWideBold.ttf",
//   weight: "200 800", // For variable fonts, specify the weight range
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-durkwide",
// });

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});
const geist = Geist({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
       ${syne.variable} ${inter.variable} ${geist.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
