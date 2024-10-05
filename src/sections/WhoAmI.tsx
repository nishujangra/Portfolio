import { BackgroundGradient } from "@/components/ui/background-gradient";


const WhoAmI = () => {
  return (
    <section id="about" className="px-10 py-10">
      <div className="max-w-[80vw] mx-auto">
        <h1 className="text-4xl font-bold text-start mb-6 pt-9"> &lt; Who Am I ? /&gt; </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <p className="mt-4 text-lg leading-8 mr-10">
              Hi, I&apos;m Nishant, a passionate Full Stack Developer specializing in creating dynamic, responsive, and user-friendly web applications using the MERN stack. With a strong background in JavaScript, TypeScript, and frameworks like React and Next.js, I enjoy transforming ideas into digital experiences. Whether it&apos;s building a sleek frontend or engineering a powerful backend, I thrive on solving complex problems and delivering clean, efficient code. Constantly learning and growing, I aim to push the boundaries of what web applications can achieve. Let's create something amazing together!
            </p>
          </div>
          <div className="md:w-1/3 mb-6 md:mb-0 order-first md:order-last">
            <BackgroundGradient>
              <img src="/src/assets/me.jpg" alt="Profile" className="rounded-full shadow-lg" />
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
