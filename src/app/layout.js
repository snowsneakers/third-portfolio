"use client";

import "./globals.css";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";

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
    <motion.html
      lang="en"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <body className={`${roboto.className}`}>
        <section className="max-w-[1150px] min-h-screen max-w-screen mx-auto">
          {children}
        </section>
        {/* <div className="blob-c absolute md:fixed -z-10">
          <div className="shape-blob one w-[400px] h-[300px] sm:w-[550px]"></div>
        </div> */}
      </body>
    </motion.html>
  );
}
