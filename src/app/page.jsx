import { Suspense } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Loading from "./loading";
import Skeleton from "./components/Skeleton";

export default function Home() {
  return (
    <section className="relative w-full lg:grid lg:grid-cols-2 px-6 lg:px-14 min-h-screen">
      <Header />
      <main className="mt-5 lg:mt-0 mb-20">
        <About />
        {/* <Skeleton /> */}
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
        <Experience />
      </main>
    </section>
  );
}
