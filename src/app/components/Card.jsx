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
import { BiLinkExternal } from "react-icons/bi";

export default function Card({ project }) {
  const renderSwtich = (lan) => {
    switch (lan) {
      case "gatsby":
        return <SiGatsby className="text-purple-900" />;
      case "sass":
        return <FaSass className="text-pink-500" />;
      case "tailwind":
        return <SiTailwindcss className="text-blue-600" />;
      case "node":
        return <FaNode className="text-green-500" />;
      case "next":
        return <SiNextdotjs />;
      case "bootstrap":
        return <SiBootstrap className="text-blue-700" />;
      default:
        return lan;
    }
  };

  return (
    <div className="py-3 min-h-[175px] space-y-5 rounded-[6px]">
      <div className="relative rounded-[3px] select-none aspect-video">
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
        <div className="col-span-2">
          <h2 className="text-lg font-semibold font-title">{project.name}</h2>
          <p className="mb-5">{project.description}</p>
        </div>
        <video
          className="block w-full transition duration-200 relative rounded-[3px] mb-5"
          width="640"
          height="400"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={project.alt_video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* <img src="./logos/team_stats.jpeg" alt="team stats project"  className="block w-full transition duration-200 relative rounded-[3px] mb-5"/> */}
        {/* <img src={project.gif} alt="team standing project" className="block w-full transition duration-200 relative rounded-[3px] mb-5"/> */}
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-3 flex-wrap text-black">
            {project.techUsed.map((language, i) => (
              <li key={i} className="text-lg">
                {renderSwtich(language)}
              </li>
            ))}
          </ul>
          {project.live ? <button className="text-sm relative z-10">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            Live <BiLinkExternal />
          </a>
        </button> : <button className="text-sm relative z-10">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            Repo <BiLinkExternal />
          </a>
        </button>}
        </div>
      </div>
    </div>
  );
}
