import Header from "./components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Patrick Snowden",
  description: "Check out my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <section className="max-w-[1150px] min-h-screen max-w-screen mx-auto">
          {children}
        </section>
        <div className="blob-c absolute md:fixed -z-10">
          <div class="shape-blob one w-[400px] h-[300px] sm:w-[550px]"></div>
          {/* <div class="shape-blob two w-[200px] h-[100px] sm:w-[400px] sm:h-[300px]"></div>
          <div class="shape-blob three w-[200px] h-[100px] sm:w-[400px] sm:h-[300px]"></div> */}
        </div>
        <svg
          className="fixed top-0 left-0 opacity-20 dark:opacity-10 -z-50 min-h-screen"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </body>
    </html>
  );
}
