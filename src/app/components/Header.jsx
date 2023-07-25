"use client";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { animate, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
    <header className="lg:max-h-screen lg:sticky lg:top-0 lg:left-0 flex flex-col lg:justify-between py-12 lg:py-20">
      <div className="space-y-3 mb-3">
        {/* <h1 className="hidden lg:block text-8xl font-bold">Pat</h1>
        <h1 className="lg:hidden text-6xl font-bold">{"I'm"} Pat</h1> */}
        {/* <motion.svg
          width="200"
          height="100"
          viewBox="0 0 493 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M61.9534 59.6165C60.0245 80.8336 54.4206 101.358 54.2179 123.048C53.9526 151.435 51.1237 179.812 51.1237 208.138"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M10.8991 67.352C10.8991 59.5264 11.9343 54.8498 17.0875 48.4431C23.525 40.4397 30.6852 37.057 40.2081 33.3159C52.4568 28.5039 63.7164 21.6165 75.8773 16.6416C89.6333 11.0142 113.441 8.04887 128.135 12.3441C141.63 16.2888 155.148 38.4657 158.733 51.1935C161.972 62.692 161.694 70.7708 152.888 79.385C147.503 84.653 140.586 88.3408 134.667 92.9651C129.073 97.3355 124.105 102.519 117.649 105.686C105.049 111.867 100.086 104.482 88.254 104.482"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M177.986 123.048C170.188 115.561 155.934 115.133 145.497 117.031C132.852 119.33 122.462 135.347 119.196 146.598C115.486 159.378 111.468 182.088 123.837 191.807C132.747 198.808 135.626 190.36 142.402 183.384C148.946 176.648 156.191 171.961 162.515 164.733C170.267 155.874 174.632 140.673 178.33 129.58C179.083 127.319 179.533 120.149 179.533 122.532C179.533 129.387 179.239 136.317 179.619 143.16C180.164 152.966 182.452 162.736 182.627 172.555C182.755 179.72 182.99 186.209 186.409 192.667C190.017 199.482 197.097 205.667 205.06 206.505C225.065 208.611 237.593 184.895 244.167 169.461C257.313 138.597 267.717 106.555 267.717 72.8528C267.717 63.5129 267.717 54.1731 267.717 44.8332C267.717 37.8375 266.17 46.6582 266.17 49.1307C266.17 73.3573 256.542 97.0245 253.02 120.899C250.295 139.367 250.699 157.895 250.699 176.508C250.699 190.088 250.542 202.721 256.544 215.186C260.234 222.85 266.32 225.331 274.679 226.617C282.09 227.757 304.61 228.25 297.112 228.25"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M210.475 89.0114C229.342 89.0114 248.183 90.5585 267.116 90.5585C289.631 90.5585 311.818 85.9172 334.243 85.9172"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M394.579 17.8449C391.21 17.8449 389.651 17.7313 388.047 20.9391C387.522 21.9893 385.647 30.5513 387.703 29.9638C392.612 28.5614 391.485 14.4714 391.485 19.392"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M448.728 22.4862C440.756 22.4862 436.351 23.4772 436.351 32.5423C436.351 34.0522 436.736 38.6471 438.672 36.3241C440.689 33.9036 439.445 27.2216 439.445 24.0333"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M358.996 48.7869C359.597 53.593 365.293 59.7888 367.075 64.6016C369.942 72.3414 378.386 78.367 384.953 82.823C392.249 87.7735 400.146 95.2475 408.16 98.6378C410.536 99.6433 413.153 101.727 414.778 103.623C416.976 106.187 421.868 105.533 424.662 106.803C434.426 111.241 452.664 106.311 461.792 102.162C469.507 98.6551 480.051 84.7733 482.764 76.6346"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
        </motion.svg> */}
        {/* <motion.svg
          width="150"
          height="100"
          viewBox="0 0 410 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M61.9534 59.6165C60.0245 80.8336 54.4206 101.358 54.2179 123.048C53.9526 151.435 51.1237 179.812 51.1237 208.138"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M10.8991 67.352C10.8991 59.5264 11.9343 54.8498 17.0875 48.4431C23.525 40.4397 30.6852 37.057 40.2081 33.3159C52.4568 28.5039 63.7164 21.6165 75.8773 16.6416C89.6333 11.0142 113.441 8.04887 128.135 12.3441C141.63 16.2888 155.148 38.4657 158.733 51.1935C161.972 62.692 161.694 70.7708 152.888 79.385C147.503 84.653 140.586 88.3408 134.667 92.9651C129.073 97.3355 124.105 102.519 117.649 105.686C105.049 111.867 100.086 104.482 88.254 104.482"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M177.986 123.048C170.188 115.561 155.934 115.133 145.497 117.031C132.852 119.33 122.462 135.347 119.196 146.598C115.486 159.378 111.468 182.088 123.837 191.807C132.747 198.808 135.626 190.36 142.402 183.384C148.946 176.648 156.191 171.961 162.515 164.733C170.267 155.874 174.632 140.673 178.33 129.58C179.083 127.319 179.533 120.149 179.533 122.532C179.533 129.387 179.239 136.317 179.619 143.16C180.164 152.966 182.452 162.736 182.627 172.555C182.755 179.72 182.99 186.209 186.409 192.667C190.017 199.482 197.097 205.667 205.06 206.505C225.065 208.611 237.593 184.895 244.167 169.461C257.313 138.597 267.717 106.555 267.717 72.8528C267.717 63.5129 267.717 54.1731 267.717 44.8332C267.717 37.8375 266.17 46.6582 266.17 49.1307C266.17 73.3573 256.542 97.0245 253.02 120.899C250.295 139.367 250.699 157.895 250.699 176.508C250.699 190.088 250.542 202.721 256.544 215.186C260.234 222.85 266.32 225.331 274.679 226.617C282.09 227.757 304.61 228.25 297.112 228.25"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M210.475 89.0114C229.342 89.0114 248.183 90.5585 267.116 90.5585C289.631 90.5585 311.818 85.9172 334.243 85.9172"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M399.221 22.4862C399.221 56.0737 397.674 89.4295 397.674 123.048C397.674 145.789 389.938 166.831 389.938 189.573"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
          <motion.path
            d="M388.391 231.344C388.596 233.192 393.385 237.146 392.689 235.986C391.367 233.783 387.752 231.344 385.297 231.344"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="round"
            variants={draw}
          />
        </motion.svg> */}
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

        <p className="text-xl font-medium">
          Web dev Intern @{" "}
          <span className="font-bold text-purple-700">Lakers</span>
        </p>
        <p className="max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          totam minima!
        </p>
        <ul className="hidden lg:block pt-10 space-y-3">
          <li>
            <ScrollLink activeClass="active" spy to="about" isDynamic={true}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="active" spy to="projects" isDynamic={true}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              spy
              to="experience"
              isDynamic={true}
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
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </header>
  );
}
