import { useState } from "react";
import BlogCard from "./components/BlogCard";
import { blogs as blogCategories } from "../../data/blogs";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allBlogs = blogCategories.flatMap((category) =>
    category.blogs.map((blog) => ({ ...blog, category: category.title }))
  );

  let filteredBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((b) => b.category === selectedCategory);

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filteredBlogs = filteredBlogs.filter((b) =>
      b.title.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-bg-primary font-mono text-text-primary">
      <div className="relative z-10 mx-auto px-6 py-12 md:px-12 lg:px-24 lg:py-20">

        <header className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs tracking-[0.35em] text-text-primary/70">[ BLOG FEED ]</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-wide text-text-primary">
            DIGITAL LOGS & WRITE-UPS
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Backend, systems, Rust notes & tutorials.
          </p>
        </header>

        <input
          type="text"
          placeholder="Search by title, tag, or topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full mb-6 rounded-md bg-bg-secondary border border-border-muted p-3 text-sm text-text-primary placeholder-text-muted focus:border-primary transition"
        />

        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-3 py-1 rounded-md text-sm transition ${
              selectedCategory === "All"
                ? "bg-bg-hover text-text-primary"
                : "bg-bg-secondary text-text-muted border border-border-muted hover:bg-bg-hover"
            }`}
          >
            All
          </button>

          {blogCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1 rounded-md text-sm transition ${
                selectedCategory === cat.title
                  ? "bg-bg-hover text-text-primary"
                  : "bg-bg-secondary text-text-muted border border-border-muted hover:bg-bg-hover"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}

          {filteredBlogs.length === 0 && (
            <p className="col-span-full text-center text-text-muted mt-8">
              No posts found.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Blog;
