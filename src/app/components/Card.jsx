import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { FaNode, FaLaptop } from "react-icons/fa";
import Link from "next/link";

export default function Card({ project }) {
  const renderSwtich = (lan) => {
    switch (lan) {
      case "JavaScript":
        return <SiJavascript />;
      case "CSS":
        return <SiCss3 />;
      case "HTML":
        return <SiHtml5 />;
      case "TailwindCSS":
        return <SiTailwindcss />;
      case "React":
        return <SiReact />;
      case "node":
        return <FaNode />;
      case "Next":
        return <SiNextdotjs />;
      default:
        return lan;
    }
  };

  return (
    <div className="flex flex-col rounded-md space-y-3">
      <img
        className="rounded-md max-h-[200px] object-cover"
        src="https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="thumbnail"
      />
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-semibold font-title tracking-wide">
          {project.name}
        </h2>
        <p className="text-sm">{project.description}</p>
        <ul className="flex items-center gap-3 flex-wrap text-black">
          {project.techUsed.map((language, i) => (
            <li key={i} className="text-lg">
              {renderSwtich(language)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
