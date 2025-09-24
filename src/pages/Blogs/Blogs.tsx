import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    
    const groupedBlogs = blogs.reduce((acc, blog) => {
        const category = blog.category || "Other";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(blog);
        return acc;
    }, {} as Record<string, typeof blogs>);

    const categories = ["All", ...Object.keys(groupedBlogs)];
    
    const filteredBlogs = selectedCategory === "All" 
        ? groupedBlogs 
        : { [selectedCategory]: groupedBlogs[selectedCategory] || [] };

    return (
        <main className="w-full h-full py-8 md:p-0">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-4">Technical Documentation</h1>
                    <p className="text-gray-400 text-lg mb-6">
                        A collection of technical articles covering Linux administration, DevOps practices, 
                        database management, and software development.
                    </p>
                    
                    {/* Category Filter */}
                    <div className="flex justify-center">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-slate-800/50 border border-slate-600/50 text-slate-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent hover:bg-slate-700/50 transition-colors duration-200"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category} className="bg-slate-800">
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                    
                <div className="space-y-8">
                    {Object.entries(filteredBlogs).map(([category, categoryBlogs], index) => (
                        <>
                        <div key={category} className="p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-6 text-slate-200">
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categoryBlogs.map((blog, index) => (
                                    <div key={index} className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30 hover:bg-slate-600/40 transition-colors duration-200">
                                        <Link
                                            to={blog.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full"
                                        >
                                            <h3 className="text-lg font-semibold text-slate-100 hover:text-white transition-colors duration-200 mb-2 line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            <p className="text-slate-300 text-sm mb-3 line-clamp-3">
                                                {blog.description}
                                            </p>
                                            {blog.tags && (
                                                <div className="flex flex-wrap gap-1">
                                                    {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="text-xs px-2 py-1 bg-slate-600/40 text-slate-200 rounded border border-slate-500/30"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {blog.tags.length > 3 && (
                                                        <span className="text-xs text-slate-400">
                                                            +{blog.tags.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {index !== Object.entries(filteredBlogs).length - 1 && (
                            <div className="flex justify-center my-8">
                                <div className="w-96 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
                            </div>
                        )}
                        </>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        {selectedCategory === "All" 
                            ? `Total: ${blogs.length} articles` 
                            : `${filteredBlogs[selectedCategory]?.length || 0} articles in ${selectedCategory}`
                        }
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Blogs;
