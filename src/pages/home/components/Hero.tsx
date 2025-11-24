import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";

const Hero = () => {
  const allBlogs = blogs.flatMap((category) =>
    category.blogs.map((blog) => ({ ...blog, category: category.title }))
  );

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:pt-20 gap-10 md:gap-16">

      {/* TEXT SECTION */}
      <div className="flex-1 space-y-6 md:space-y-8">

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold text-text-primary tracking-wide"
        >
          &gt; Nishant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
        >
          I'm a backend developer passionate about building fast, reliable, and scalable systems
          using Go, PostgreSQL, and Linux.<br />
          I've written <span className="text-highlight font-semibold">{allBlogs.length}</span> blogs so far.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex gap-4 text-sm"
        >
          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1koDFnVpsktYxxQpXtP_tluEJgQWZzWjd/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-text-accent rounded-lg hover:bg-text-accent/10 transition-all"
          >
            View Resume
          </a>

          {/* Contact */}
          <a
            href="/contact"
            className="px-6 py-3 bg-text-accent text-bg-primary rounded-lg hover:bg-text-accent/80 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/pic.jpg"
          alt="Nishant"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-highlight shadow-lg"
        />
      </motion.div>

    </section>
  );
};

export default Hero;
