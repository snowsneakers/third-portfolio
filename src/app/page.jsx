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
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(true);
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        setError(true);
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
          <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h2 className="text-xl font-bold">About</h2>
          </div>
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {"I'm"} Pat, a web developer with a passion for both basketball
              and computers. After completing my undergrad, I coached
              basketball, but the pandemic shut down most leagues. That gave me
              the opprotunity to rediscover my love for computers. {"I've"}{" "}
              grown my skills participating in the{" "}
              <span className="font-bold">Collab Lab</span> and being a part of
              the <span className="font-bold">100devs</span> community, shaping
              me into the developer I am today.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Now, {"I'm"} fortunate to be pursuing my passion with the{" "}
              <span className="font-bold">Lakers</span> and look forward to more
              opportunities ahead. In my free time, I enjoy making memories with
              my girlfriend, eating yummy food, watching movies from 2008, and
              hopfully winning in Counter-Strike 😂
            </motion.p>
          </div>
        </section>
        <section className="pt-20 space-y-5 lg:space-y-0" id="projects">
          <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h2 className="text-xl font-bold">Projects</h2>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {projects.slice(0, 4).map((project) => {
                return (
                  <Card key={project.id} project={project} loading={loading} />
                );
              })}
            </div>
            <motion.button
              className="text-sm"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.github.com/snowsneakers"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1"
              >
                See More Projects <BiLinkExternal />
              </a>
            </motion.button>
          </div>
        </section>
        <section
          className="pt-20 space-y-5 lg:space-y-0 min-h-0 lg:min-h-screen"
          id="experience"
        >
          <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <h2 className="text-xl font-bold">Experience</h2>
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
                <h2 className="text-lg font-semibold font-title tracking-wide leading-4">
                  Los Angeles Lakers
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  quod amet praesentium eveniet saepe ducimus cupiditate cum
                  quibusdam ullam, dolorum tenetur at sed voluptates dolore
                  officiis corporis quia modi!
                </p>
                {/* <ul className="flex items-center gap-3 flex-wrap text-black">
                  {projects[0].techUsed.map((language, i) => (
                    <li key={i} className="">
                      {renderSwtich(language)}
                    </li>
                  ))}
                </ul> */}
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
                <h2 className="text-lg font-semibold font-title tracking-wide leading-4">
                  Collab Lab
                </h2>
                <p>
                  I contributed to the creation of a responsive Smart Shopping
                  List web application. Working in an Agile team of four, we
                  handled everything from understanding project requirements and
                  design to coding, testing, and ongoing improvements. We used
                  pair programming and code reviews for iterative enhancements
                  and collaborated remotely under the guidance of experienced
                  engineers.
                </p>
                {/* <ul className="flex items-center gap-3 flex-wrap text-black">
                  {projects[0].techUsed.map((language, i) => (
                    <li key={i} className="">
                      {renderSwtich(language)}
                    </li>
                  ))}
                </ul> */}
              </div>
            </motion.div>
            <motion.button
              className="text-sm"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.github.com/snowsneakers"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1"
              >
                See Full Resume <BiLinkExternal />
              </a>
            </motion.button>
          </div>
        </section>
      </main>
    </motion.section>
  );
}
