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
import Image from "next/image";
import { motion } from "framer-motion";

export default function Card({ project }) {
  const renderSwtich = (lan) => {
    switch (lan) {
      case "gatsby":
        return <SiGatsby />;
      case "scss":
        return <BsFiletypeScss />;
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
      {/* <Image
        className="rounded-[3px]"
        src={project.image}
        width={1920}
        height={1080}
        alt="thumbnail"
      /> */}
      <video
        className="block w-full transition duration-200 relative z-10 rounded-[3px]"
        width="640"
        height="360"
        autoplay="true"
        playsinline="true"
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/hundreddevs/video/upload/v1699421286/statsVideo_lfq7yg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
