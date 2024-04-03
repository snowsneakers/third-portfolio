import { BiLinkExternal } from "react-icons/bi";

export default function Experience() {
  return (
    <section
      className="pt-20 space-y-5 lg:space-y-0 min-h-0 lg:min-h-screen"
      id="experience"
    >
      <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h2 className="text-xl font-bold heading">Experience 🤓</h2>
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-4 space-y-5 sm:space-y-0">
          <div className="leading-4 col-span-4 sm:col-span-1">
            <img src="./logos/lakers_logo.svg" alt="lakers logo" className="w-[75px]" />
          </div>
          <div className="col-span-4 sm:col-span-3 space-y-5">
          <div>
            <span className="block text-sm leading-4 sm:-mb-0">2022-2024</span>
              <h2 className="text-lg font-semibold font-title tracking-wide leading-4">
                Los Angeles Lakers
              </h2>
          </div>
            <p>
              Recently started my second season. My responsibilities include
              shipping production code and carrying out quality assurance tests.
              I develop responsive web pages based on Adobe XD designs and
              efficiently manage tasks across multiple projects within tight
              timelines. Additionally, I refactor legacy code to enhance the
              end-user experience, ensure compliance with modern standards, and
              meet NBA requirements.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 space-y-5 sm:space-y-0">
          <div className="leading-4 col-span-4 sm:col-span-1">
            <img src="./logos/collab_lab.jpeg" alt="collab lab logo" className="w-[57.5px] rounded-md" />
          </div>
          <div className="col-span-4 sm:col-span-3 space-y-5">
          <div>
            <span className="block text-sm leading-4 sm:-mb-0">Aug-Dec 22</span>
              <h2 className="text-lg font-semibold font-title tracking-wide leading-4">
                Collab Lab
              </h2>
          </div>
            <p>
              I contributed to the creation of a responsive Smart Shopping List
              web application. Working in an Agile team of four, we handled
              everything from understanding project requirements and design to
              coding, testing, and ongoing improvements. We used pair
              programming and code reviews for iterative enhancements and
              collaborated remotely under the guidance of experienced engineers.
            </p>
          </div>
        </div>
        <button className="text-sm">
          <a
            href="https://drive.google.com/file/d/1dqSEtRB5rDv3jc855zXP8X79velFlGJd/view"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            Full Resume <BiLinkExternal />
          </a>
        </button>
      </div>
    </section>
  );
}
