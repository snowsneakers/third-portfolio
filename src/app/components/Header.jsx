"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion, animate } from "framer-motion";

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

import HeaderDeco from "./HeaderDeco";

export default function Header() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <header className="lg:max-h-screen lg:sticky lg:top-0 lg:left-0 flex flex-col lg:justify-between py-12 lg:py-20 relative">
      <HeaderDeco />
      <div className="space-y-3 mb-3">
        <motion.svg
          width="200"
          height="150"
          viewBox="0 0 509 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M58.8268 100.653C58.8268 156.055 58.3477 213.535 49.5442 268.427C46.6774 286.302 44.903 305.254 44.903 323.349C44.903 328.437 43.7291 350.696 47.9971 352.83"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M10.8668 105.294C13.0547 105.021 12.7911 100.941 13.6172 99.1056C16.9561 91.6859 22.7826 85.3751 28.5725 79.6809C51.4421 57.1893 79.1034 53.8506 109.537 51.4894C127.625 50.086 152.939 51.1859 166.78 64.7256C178.307 76.0022 184.917 94.1313 186.892 109.935C189.386 129.886 179.51 146.837 165.92 160.646C150.683 176.129 135.311 180.796 114.007 182.993C100.111 184.425 86.8224 186.383 72.7507 185.743C65.3349 185.406 59.7163 178.23 52.6384 176.461"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M194.971 205.855C181.338 202.137 168.694 201.116 155.434 207.746C140.642 215.142 122.622 228.469 113.061 242.212C98.0981 263.722 106.225 284.196 122.344 300.314C131.893 309.863 148.899 320.87 163.17 314.754C170.292 311.702 175.394 300.807 179.586 294.728C187.881 282.7 194.81 269.615 200.3 256.05C207.513 238.231 210.442 220.897 210.442 201.902C210.442 199.065 210.389 212.86 210.528 215.224C211.155 225.884 216.473 237.078 218.951 247.541C222.278 261.586 224.371 275.534 225.57 289.914C226.96 306.601 228.164 316.536 238.634 329.623C248.941 342.507 267.259 338.029 276.366 326.701C293.321 305.611 299.677 275.763 307.91 250.549C318.636 217.701 325.966 183.706 333.351 149.988C340.107 119.139 346.79 88.4583 349.681 56.9902C350.605 46.9426 352.021 36.5193 350.283 26.4779C349.581 22.4243 348.328 18.5595 346.931 14.7028C346.42 13.2915 345.959 9.32827 345.126 10.5772C343.235 13.4137 345.04 23.8588 345.04 27.1655C345.04 41.4738 344.19 55.5955 343.493 69.8826C339.473 152.296 331.879 237.862 348.134 319.137C352.818 342.557 360.845 370.322 385.264 379.818C394.68 383.479 394.609 378.45 389.906 371.395"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M256.855 171.819C290.203 171.819 323.553 171.932 356.901 171.819C403.416 171.662 453.29 167.178 498.203 167.178"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
        </motion.svg>

        <div className="flex items-center gap-1">
          <span className="text-xl font-[600]">
            Web Developer
            {/* <span className="font-bold text-purple-700">Lakers</span> */}
          </span>
          {/* <img
            src="./logos/lakers_logo.svg"
            alt="lakers logo"
            className="w-[40px]"
          /> */}
        </div>
        <p className="max-w-xs">
          Just someone who loves sports and creating things for the web.
        </p>
        <ul className="hidden lg:block pt-10 space-y-3">
          <li>
            <ScrollLink
              activeClass="active"
              spy
              to="about"
              isDynamic={true}
              className="cursor-pointer relative z-100"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              spy
              to="projects"
              isDynamic={true}
              className="cursor-pointer relative z-100"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              spy
              to="experience"
              isDynamic={true}
              className="cursor-pointer relative z-100"
            >
              Experience
            </ScrollLink>
          </li>
        </ul>
      </div>
      <ul className="flex items-center gap-4 text-black text-2xl mt-3">
        <li className="cursor-pointer">
          <Link
            href="https://github.com/snowsneakers"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href="https://www.linkedin.com/in/patricksnowden/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href="https://twitter.com/snowsneakers_"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </Link>
        </li>
      </ul>
    </header>
  );
}
