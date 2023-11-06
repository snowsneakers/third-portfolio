"use client";

import Header from "./components/Header";
import Card from "./components/Card";
import { projects } from "./utils/projects";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { FaNode, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
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
    <section className="relative w-full lg:grid lg:grid-cols-2 px-6 lg:px-14 min-h-screen">
      <Header />
      <main className="mt-5 lg:mt-0 mb-20">
        <section
          className="pt-0 lg:pt-20 space-y-5 lg:space-y-0 leading-7"
          id="about"
        >
          <div className="lg:hidden sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h2 className="text-lg font-bold">About</h2>
          </div>
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {"I'm"} Pat, a web developer who has always had two loves:{" "}
              basketball and computers. After completing my undergrad, I
              continued to pursued my passion for basketball by working as a
              coach. Unfortunately, the pandemic forced the shutdown of sports
              leagues, which turned out to be a blessing in disguise as it gave
              me the opportunity to explore my other passion—computers.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Since then, I have immersed myself in the world of web
              development. I have created{" "}
              <span className="font-bold">websites</span> and{" "}
              <span className="font-bold">applications</span> that I could never
              have imagined just a couple of years ago. Throughout this journey,{" "}
              {"I've"} been fortunate to grow my skills with the{" "}
              <span className="font-bold">Collab Lab</span> and the supportive{" "}
              <span className="font-bold">100devs community</span>, both of
              which have played a significant role in shaping me into the
              developer I am today.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I want to continue learning and building, and {"I'm"} lucky to be
              currently pursuing this passion with the Lakers. {"I'm"} excited
              to see what other opportunities lie ahead in my development
              journey. During my free time, I love creating memories with my
              girlfriend, eating yummy food, watching movies from 2008, and
              hopefully winning in counter-strike 😂
            </motion.p>
          </div>
        </section>
        <section className="pt-20 space-y-5 lg:space-y-0" id="projects">
          <div className="lg:hidden sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h2 className="text-lg font-bold">Projects</h2>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {projects.slice(0, 4).map((project) => {
                return <Card key={project.id} project={project} />;
              })}
            </div>
            <button className="underline underline-offset-1 text-sm">
              see more projects here
            </button>
          </div>
        </section>
        <section
          className="pt-20 space-y-5 lg:space-y-0 min-h-0 lg:min-h-screen"
          id="experience"
        >
          <div className="lg:hidden sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h2 className="text-lg font-bold">Experience</h2>
          </div>
          <div className="space-y-10">
            <motion.div
              className="grid grid-cols-4 space-y-5 sm:space-y-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="leading-4 col-span-4 sm:col-span-1">
                <span className="block text-sm leading-4 sm:-mb-0">
                  2022-2024
                </span>
              </div>
              <div className="col-span-4 sm:col-span-3 space-y-5">
                <h2 className="text-xl font-semibold font-title tracking-wide leading-4">
                  Los Angeles Lakers
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  quod amet praesentium eveniet saepe ducimus cupiditate cum
                  quibusdam ullam, dolorum tenetur at sed voluptates dolore
                  officiis corporis quia modi!
                </p>
                <ul className="flex items-center gap-3 flex-wrap text-black">
                  {projects[0].techUsed.map((language, i) => (
                    <li key={i} className="">
                      {renderSwtich(language)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-4 space-y-5 sm:space-y-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="leading-4 col-span-4 sm:col-span-1">
                <span className="block text-sm leading-4 sm:-mb-0">
                  Aug-Dec 22
                </span>
              </div>
              <div className="col-span-4 sm:col-span-3 space-y-5">
                <h2 className="text-xl font-semibold font-title tracking-wide leading-4">
                  Collab Lab
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  quod amet praesentium eveniet saepe ducimus cupiditate cum
                  quibusdam ullam, dolorum tenetur at sed voluptates dolore
                  officiis corporis quia modi!
                </p>
                <ul className="flex items-center gap-3 flex-wrap text-black">
                  {projects[0].techUsed.map((language, i) => (
                    <li key={i} className="">
                      {renderSwtich(language)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </section>
  );
}
