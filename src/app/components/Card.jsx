"use client";

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiBootstrap,
} from "react-icons/si";
import { FaNode, FaLaptop } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { FaSass } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Card({ project }) {
  const renderSwtich = (lan) => {
    switch (lan) {
      case "gatsby":
        return <SiGatsby />;
      case "sass":
        return <FaSass />;
      case "tailwind":
        return <SiTailwindcss />;
      case "node":
        return <FaNode />;
      case "next":
        return <SiNextdotjs />;
      case "bootstrap":
        return <SiBootstrap />;
      default:
        return lan;
    }
  };

  return (
    <motion.div
      className="p-3 min-h-[175px] space-y-5 rounded-[6px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative rounded-[3px] overflow-hidden select-none aspect-video">
        <div
          role="overlay"
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[3px] transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="text-black animate-spin"
          >
            <path
              fill="white"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"
            ></path>
            <path
              fill="currentColor"
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            ></path>
          </svg>
        </div>
        <video
          className="block w-full transition duration-200 relative"
          width="640"
          height="400"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-span-2 space-y-3">
        <h2 className="text-lg font-semibold font-title">{project.name}</h2>
        <p className="">{project.description}</p>
        <ul className="flex items-center gap-3 flex-wrap text-black">
          {project.techUsed.map((language, i) => (
            <li key={i} className="text-lg">
              {renderSwtich(language)}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
