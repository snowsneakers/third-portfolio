"use client";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
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
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProjects();
  }, []);

  console.log(projects);

  return (
    <motion.section
      className="relative w-full lg:grid lg:grid-cols-2 px-6 lg:px-14 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
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
              {"I'm"} Pat, a web developer with a passion for both basketball
              and computers. After completing my undergrad, I coached
              basketball, but the pandemic led me to discover my love for web
              development. {"I've"} grown my skills through the{" "}
              <span className="font-bold">Collab Lab</span> and
              <span className="font-bold">100devs</span> community, shaping me
              into the developer I am today.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Now, {"I'm"} fortunate to be pursuing my passion with the{" "}
              <span className="font-bold">Lakers</span> and look forward to more
              opportunities ahead. In my free time, I enjoy making memories with
              my girlfriend, savoring delicious food, watching 2008 movies, and
              hoping to win in Counter-Strike 😂
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
            <motion.button
              className="text-sm underline underline-offset-1"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.github.com/snowsneakers"
                target="_blank"
                rel="noreferrer"
              >
                See More Projects
              </a>
            </motion.button>
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
            <div className="grid grid-cols-4 space-y-5 sm:space-y-0">
              <div className="leading-4 col-span-4 sm:col-span-1">
                <motion.span
                  className="block text-sm leading-4 sm:-mb-0"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  2022-2024
                </motion.span>
              </div>
              <div className="col-span-4 sm:col-span-3 space-y-5">
                <motion.h2
                  className="text-xl font-semibold font-title tracking-wide leading-4"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Los Angeles Lakers
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  quod amet praesentium eveniet saepe ducimus cupiditate cum
                  quibusdam ullam, dolorum tenetur at sed voluptates dolore
                  officiis corporis quia modi!
                </motion.p>
                {/* <ul className="flex items-center gap-3 flex-wrap text-black">
                  {projects[0].techUsed.map((language, i) => (
                    <li key={i} className="">
                      {renderSwtich(language)}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
            <div
              className="grid grid-cols-4 space-y-5 sm:space-y-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="leading-4 col-span-4 sm:col-span-1">
                <motion.span
                  className="block text-sm leading-4 sm:-mb-0"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Aug-Dec 22
                </motion.span>
              </div>
              <div className="col-span-4 sm:col-span-3 space-y-5">
                <motion.h2
                  className="text-xl font-semibold font-title tracking-wide leading-4"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Collab Lab
                </motion.h2>
                <ul className="list-disc space-y-2">
                  <motion.li
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Created a fully responsive Smart Shopping List web
                    application, covering web accessibility and adhering to ADA
                    compliance principles.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Engaged in Agile teamwork to comprehend project
                    requirements, create designs, write code, conduct testing,
                    and maintain innovative our application.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Enhanced our product iteratively through pair programming
                    and thorough code reviews.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Collaborated remotely as a team member in a group of four,
                    under the guidance of experienced software engineers.
                  </motion.li>
                </ul>
                {/* <ul className="flex items-center gap-3 flex-wrap text-black">
                  {projects[0].techUsed.map((language, i) => (
                    <li key={i} className="">
                      {renderSwtich(language)}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
            <motion.button
              className="text-sm underline underline-offset-1"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="https://drive.google.com/file/d/1dqSEtRB5rDv3jc855zXP8X79velFlGJd/view"
                target="_blank"
                rel="noreferrer"
              >
                See Full Resume
              </a>
            </motion.button>
          </div>
        </section>
      </main>
    </motion.section>
  );
}
