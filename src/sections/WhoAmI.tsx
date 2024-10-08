import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";

const WhoAmI = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-[85vw] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-start mb-6 pt-9"> &lt; Who Am I ? /&gt; </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 flex flex-col justify-center items-center gap-8">
            <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 mr-0 sm:mr-10">
              <strong>Hi, I&apos;m Nishant, a passionate Full Stack Developer</strong> specializing in creating dynamic, responsive, and user-friendly web applications using the MERN stack, with a strong background in JavaScript, TypeScript, React, and Next.js, I enjoy transforming ideas into digital experiences. Whether it&apos;s building a sleek frontend or engineering a powerful backend, I thrive on solving complex problems and delivering clean, efficient code. Constantly learning and growing, I aim to push the boundaries of what web applications can achieve. <strong>Let's create something amazing together!</strong>
            </p>
            <div className="flex justify-center md:justify-start w-full items-center">
              <Button className="bg-zinc-300 text-zinc-900 hover:bg-zinc-500 hover:text-zinc-200 px-3 sm:px-4 py-2 rounded shadow-md border border-zinc-500">
                <a href="/resume.pdf" download className="block text-center">
                  Check Out my Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mb-6 md:mb-0 order-first md:order-last">
            <BackgroundGradient>
              <img src="/assets/me.jpg" alt="Profile" className="rounded-full shadow-lg w-32 sm:w-48 md:w-full" />
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
