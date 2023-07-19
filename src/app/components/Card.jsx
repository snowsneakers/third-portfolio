import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

import { FaNode } from "react-icons/fa";

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
    <div>
      <div className="flex flex-row gap-5 text-xs rounded-md">
        <img
          className="rounded-md w-[50%] md:w-[40%] max-h-[200px] object-cover"
          src="https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="thumbnail"
        />
        <div className="w-[50%] md:w-[60%] space-y-5 flex flex-col">
          <h2 className="text-xl font-semibold font-title tracking-wide">
            {project.name}
          </h2>
          <p>{project.description}</p>
          <ul className="flex items-center gap-3 flex-wrap text-black">
            {project.techUsed.map((language, i) => (
              <li key={i} className="text-lg">
                {renderSwtich(language)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
