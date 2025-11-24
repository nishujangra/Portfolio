import { useState } from "react";
import BlogCard from "./components/BlogCard";
import { blogs as blogCategories } from "../../data/blogs";

const Blog = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>("All");
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Flatten all blogs with category info
	const allBlogs = blogCategories.flatMap((category) =>
		category.blogs.map((blog) => ({ ...blog, category: category.title }))
	);

	// Filter by category
	let filteredBlogs =
		selectedCategory === "All"
			? allBlogs
			: allBlogs.filter((blog) => blog.category === selectedCategory);

	// Search filter (title, tags, description)
	if (searchQuery.trim() !== "") {
		const q = searchQuery.toLowerCase();
		filteredBlogs = filteredBlogs.filter((blog) => {
			return (
				blog.title.toLowerCase().includes(q) ||
				blog.description.toLowerCase().includes(q) ||
				blog.tags.some((tag) => tag.toLowerCase().includes(q))
			);
		});
	}

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-space-950 font-mono text-text-primary">
			<div className="relative z-10 mx-auto px-6 py-12 md:px-12 lg:px-24 lg:py-20">

				{/* Header */}
				<header className="mb-10 max-w-3xl space-y-4">
					<p className="text-xs tracking-[0.35em] text-cyber-400/70">
						[ BLOG FEED ]
					</p>
					<h1 className="text-3xl md:text-4xl font-black tracking-wider text-electric-400">
						DIGITAL LOGS & WRITE-UPS
					</h1>
					<p className="text-sm md:text-base text-text-primary/80">
						A collection of backend, systems, and Rust notes—from authentication to infrastructure tooling.
					</p>
				</header>

				{/* Search Box */}
				<div className="mb-6">
					<input
						type="text"
						placeholder="Search blogs by title, tag, or topic..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="
							w-full rounded-md bg-space-800 
							border border-border-muted 
							p-3 text-sm text-text-primary 
							placeholder-text-muted 
							focus:border-cyber-500 focus:outline-none 
							transition
						"
					/>
				</div>

				{/* Category Filter */}
				<div className="mb-8 flex flex-wrap gap-3">
					<button
						className={`px-3 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
							selectedCategory === "All"
								? "bg-cyber-500 text-black"
								: "bg-space-800 text-text-secondary border border-border-muted hover:bg-space-700"
						}`}
						onClick={() => setSelectedCategory("All")}
					>
						All
					</button>

					{blogCategories.map((cat) => (
						<button
							key={cat.title}
							className={`px-3 py-1 rounded-md text-sm font-medium transition cursor-pointer ${
								selectedCategory === cat.title
									? "bg-cyber-500 text-black"
									: "bg-space-800 text-text-secondary border border-border-muted hover:bg-space-700"
							}`}
							onClick={() => setSelectedCategory(cat.title)}
						>
							{cat.title}
						</button>
					))}
				</div>

				{/* Blogs Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
					{filteredBlogs.map((blog) => (
						<BlogCard key={blog.title} blog={blog} />
					))}

					{filteredBlogs.length === 0 && (
						<p className="text-text-secondary col-span-full text-center mt-8">
							No posts match your search.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Blog;
