import { ArrowUpRight } from "lucide-react";
import type { Blog } from "../../../data/blogs";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const visibleTags = blog.tags.slice(0, 4);
  const hiddenTagsCount = Math.max(blog.tags.length - visibleTags.length, 0);

  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex h-full flex-col gap-4 
        rounded-2xl border border-border-muted
        bg-bg-card/80 p-5 
        text-text-primary 
        shadow-[0_0_20px_rgba(15,22,30,0.35)]
        transition 
        hover:border-cyber-500 
        hover:bg-bg-hover/70 
        hover:shadow-[0_0_25px_rgba(0,180,216,0.25)]
      "
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="
          text-lg font-semibold leading-tight 
          text-electric-400 
          transition group-hover:text-cyber-400
        ">
          {blog.title}
        </h3>

        <ArrowUpRight
          className="
            h-5 w-5 shrink-0 text-cyber-400 
            opacity-0 transition group-hover:opacity-100
          "
        />
      </div>

      <p
        className="text-sm leading-relaxed text-text-secondary"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {blog.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md border border-border-muted 
              bg-space-800/40
              px-3 py-1 text-[11px] uppercase tracking-wide 
              text-cyber-400
            "
          >
            {tag}
          </span>
        ))}

        {hiddenTagsCount > 0 && (
          <span
            className="
              rounded-md border border-dashed border-border-muted 
              bg-transparent px-3 py-1 
              text-[11px] uppercase tracking-wide 
              text-text-secondary
            "
          >
            +{hiddenTagsCount} more
          </span>
        )}
      </div>
    </a>
  );
};

export default BlogCard;
