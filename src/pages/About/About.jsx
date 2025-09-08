import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Front-End Developer, React Specialist, Problem Solver
          </h2>
          <div className="grid gap-6 md:gap-12 lg:gap-24">
            {/* <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div> */}

            <div className="relative space-y-4 w-full">
              <p className="text-white">
                Hello! I'm Ahmad Mustafa, a passionate Front-End Developer
                specialized in React.js, JavaScript, Tailwind CSS, and Bootstrap.{" "}
                <span className="font-bold text-white">
                  I love debugging—it's like solving a puzzle!
                </span>
                I focus on building responsive, interactive web interfaces using React.js for components and JavaScript for functionality.
              </p>
              <p className="text-white">
                My work ensures smooth, user-friendly experiences across devices. I'm highly skilled in React.js, Redux, Redux Toolkit, and React Query for building dynamic web applications. I'm experienced in modern UI frameworks like Tailwind, Next.js 14, Shadcn UI, Styled Components, Bootstrap, and Framer Motion.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a passion for
                    creating modern web applications that deliver exceptional user
                    experiences. With expertise in React.js, TypeScript, and modern
                    development tools, I'm committed to building scalable solutions
                    that make a real impact. I'm adept at delivering efficient, user-focused web applications with a focus on quality and performance.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ahmad Mustafa, Front-End Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">React.js Specialist</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
