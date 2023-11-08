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
import Link from "next/link";
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
      className="grid grid-cols-3 gap-3 rounded-md min-h-[125px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        className="rounded-md object-cover min-h-full"
        src={project.image}
        alt="thumbnail"
      />
      <div className="col-span-2 space-y-3">
        <h2 className="font-semibold font-title tracking-wide leading-4">
          {project.name}
        </h2>
        <p className="text-sm">{project.description}</p>
        <ul className="flex items-center gap-3 flex-wrap text-black">
          {project.techUsed.map((language, i) => (
            <li key={i} className="text-sm">
              {renderSwtich(language)}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
