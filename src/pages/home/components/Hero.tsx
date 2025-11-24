import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";

const Hero = () => {
  const allBlogs = blogs.flatMap((category) =>
		category.blogs.map((blog) => ({ ...blog, category: category.title }))
	);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:pt-20 gap-8">
      {/* Text Content */}
      <div className="flex-1 space-y-6 md:space-y-8">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-terminal-blue tracking-wide"
        >
          &gt; Nishant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl text-text-secondary max-w-xl leading-relaxed"
        >
          I'm a backend developer who loves building fast, reliable systems with Go, PostgreSQL, and Linux. Written {allBlogs.length} blogs
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1koDFnVpsktYxxQpXtP_tluEJgQWZzWjd/view"
            target="_blank"
            className="px-6 py-3 border border-neon-400 rounded-lg hover:bg-neon-400/10 transition-all"
          >
            Check out my Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-neon-400 text-space-950 rounded-lg hover:bg-neon-500 transition-all"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/pic.jpg"
          alt="Nishant"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-neon-400 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
