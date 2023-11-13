import Card from "./Card";
import { BiLinkExternal } from "react-icons/bi";

// async function getProjects() {
//   //   await new Promise((resolve) => setTimeout(resolve, 2000));

//   console.log(res);
//   return res;
// }

export default async function Projects() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await import("../api/projects/route");
  const projects = await (await res.GET()).json();

  return (
    <section className="pt-20 space-y-5 lg:space-y-0" id="projects">
      <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h2 className="text-xl font-bold">Projects</h2>
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {projects.length > 0 &&
            projects.slice(0, 4).map((project) => {
              return <Card key={project.id} project={project} />;
            })}
        </div>
        <button>
          <a
            href="https://www.github.com/snowsneakers"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            See More Projects <BiLinkExternal />
          </a>
        </button>
      </div>
    </section>
  );
}
