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
        group flex flex-col gap-4 h-full
        rounded-2xl border border-border-muted
        bg-bg-secondary/80 p-5
        text-text-primary
        shadow-[0_0_20px_rgba(10,10,15,0.3)]
        transition
        hover:bg-bg-hover/70
        hover:border-border-primary
        hover:shadow-[0_0_25px_rgba(157,78,221,0.35)]
      "
    >
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold leading-tight transition group-hover:text-text-accent">
          {blog.title}
        </h3>

        <ArrowUpRight
          className="
            w-5 h-5 text-text-primary
            opacity-0 group-hover:opacity-100 transition
          "
        />
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed text-text-muted"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {blog.description}
      </p>

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-2">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md border border-border-muted 
              bg-bg-primary/40
              px-3 py-1 text-[11px] uppercase tracking-wide 
              text-text-primary
            "
          >
            {tag}
          </span>
        ))}

        {hiddenTagsCount > 0 && (
          <span
            className="
              rounded-md border border-dashed border-border-muted 
              px-3 py-1 
              text-[11px] uppercase tracking-wide 
              text-text-muted
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
