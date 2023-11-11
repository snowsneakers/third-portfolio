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
import { FaSass } from "react-icons/fa6";

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
    <div className="p-3 min-h-[175px] space-y-5 rounded-[6px]">
      <div className="relative rounded-[3px] overflow-hidden select-none aspect-video">
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
    </div>
  );
}
