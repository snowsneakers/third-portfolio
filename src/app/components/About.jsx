export default function About() {
  return (
    <section
      className="pt-0 lg:pt-20 space-y-5 lg:space-y-0 leading-7"
      id="about"
    >
      <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h2 className="text-xl font-bold">About</h2>
      </div>
      <div className="space-y-5">
        <p>
          Just a web developer with a passion for both basketball and computers.
          After completing my undergrad, I coached basketball, but the pandemic
          shut down most leagues. That gave me the opprotunity to rediscover my
          love for computers. {"I've"} grown my skills participating in the{" "}
          <span className="font-bold">
            <a
              className="hover:text-[#552583]"
              href="https://the-collab-lab.codes/"
              target="_blank"
              rel="noreferrer"
            >
              Collab Lab
            </a>
          </span>{" "}
          and being a part of the{" "}
          <span className="font-bold">
            <a
              className="hover:text-[#552583]"
              href="https://leonnoel.com/100devs/"
              target="_blank"
              rel="noreferrer"
            >
              100devs
            </a>
          </span>{" "}
          community, shaping me into the developer I am today.
        </p>
        <p>
          Now, {"I'm"} fortunate to be pursuing my passion with the{" "}
          <span className="font-bold">
            <a
              className="hover:text-[#552583]"
              href="https://www.nba.com/lakers/"
              target="_blank"
              rel="noreferrer"
            >
              Lakers
            </a>
          </span>{" "}
          and look forward to more opportunities ahead. In my free time, I enjoy
          making memories with my girlfriend, eating yummy food, watching movies
          from 2008, and hopfully winning in Counter-Strike 😂
        </p>
      </div>
    </section>
  );
}
