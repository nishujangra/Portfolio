import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <main className="p-6">
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        Blog Links
                    </h1>
                    <div className="mt-8">
                        <ul className="list-disc list-inside text-gray-400">
                            {blogs.map((blog, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        {blog.title}
                                    </Link>
                                    <p className="text-gray-300">
                                        {blog.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blogs;
