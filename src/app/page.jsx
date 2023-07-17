import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex justify-center text-black dark:text-[#eaeaea] tracking-tighter">
      <div className="w-full">
        <h1 className="text-7xl mb-10">
          I'm Pat,
          <br />a web developer.
        </h1>
      </div>
    </section>
  );
}
