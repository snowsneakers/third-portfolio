import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="md:sticky md:max-h-screen md:top-0 md:left-0 md:py-24 px-4 flex flex-col md:justify-between">
      <div className="space-y-3 mb-3">
        <h1 className="text-8xl font-bold">
          Pat<span className="text-sm">🏀</span>
        </h1>
        <p className="text-2xl font-medium">
          Web dev Intern @{" "}
          <span className="font-bold text-purple-700">Lakers</span>
        </p>
        <p className="max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          totam minima!
        </p>
      </div>
      <ul className="flex items-center gap-4 text-black text-2xl mt-3">
        <li className="cursor-pointer">
          <a
            href="https://github.com/snowsneakers"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="https://www.linkedin.com/in/patricksnowden/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="https://twitter.com/snowsneakers_"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </header>
  );
}
