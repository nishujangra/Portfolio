import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
    // Group blogs by category field
    const groupedBlogs = blogs.reduce((acc, blog) => {
        const category = blog.category || "Other";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(blog);
        return acc;
    }, {} as Record<string, typeof blogs>);

    return (
        <main className="p-6 bg-[#111827] min-h-screen">
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                    <h1 className="text-5xl font-extrabold text-center mb-8">
                        Blog Posts
                    </h1>
                    <p className="text-center mb-8 max-w-2xl mx-auto text-gray-300">
                        A collection of technical articles covering Linux administration, DevOps practices, 
                        database management, and software development.
                    </p>
                    
                    <div className="space-y-8">
                        {Object.entries(groupedBlogs).map(([category, categoryBlogs]) => (
                            <div key={category} className="border-b border-gray-700 pb-6 last:border-b-0">
                                <h2 className="text-2xl font-bold mb-4 text-gray-100">
                                    {category}
                                </h2>
                                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                    {categoryBlogs.map((blog, index) => (
                                        <div 
                                            key={index} 
                                            className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-200 border border-gray-700"
                                        >
                                            <Link
                                                to={blog.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block group"
                                            >
                                                <h3 className="text-lg font-semibold transition-colors duration-200 mb-2 line-clamp-2">
                                                    {blog.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                                                    {blog.description}
                                                </p>
                                                {blog.tags && (
                                                    <div className="flex flex-wrap gap-1 mb-3">
                                                        {blog.tags.map((tag, tagIndex) => (
                                                            <span
                                                                key={tagIndex}
                                                                className="inline-block bg-gray-700/50 text-gray-200 text-xs px-2 py-1 rounded-full font-medium border border-gray-600"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                <div className="flex items-center text-xs text-gray-400">
                                                    <span className="inline-flex items-center">
                                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                        Read Article
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            Total: {blogs.length} articles
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blogs;
