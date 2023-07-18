import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <section className="space-y-20 md:space-y-0 relative w-full min-h-screen md:grid md:grid-cols-2 py-12 md:py-0">
      <Header />
      <main className="md:py-24 px-4">
        <div className="space-y-5">
          <p>
            {"I'm"} Pat, a web developer who has always had two loves:
            basketball and computers. After completing my undergrad, I continued
            to pursued my passion for basketball by working as a coach.
            Unfortunately, the pandemic forced the shutdown of sports leagues,
            which turned out to be a blessing in disguise as it gave me the
            opportunity to explore my other passion—computers.
          </p>
          <p>
            Since then, I have immersed myself in the world of web development.
            I have created websites and applications that I could never have
            imagined just a couple of years ago. Throughout this journey, I've
            been fortunate to grow my skills with the Collab Lab and the
            supportive 100devs community, both of which have played a
            significant role in shaping me into the developer I am today.
          </p>
          <p>
            I want to continue learning and building, and I'm lucky to be
            currently pursuing this passion with the Lakers. I'm excited to see
            what other opportunities lie ahead in my development journey. During
            my free time, I love creating memories with my girlfriend, eating
            yummy food, watching movies from 2008, and hopefully winning in
            counter-strike 😂
          </p>
        </div>
      </main>
    </section>
  );
}
