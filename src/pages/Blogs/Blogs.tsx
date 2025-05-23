import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <main className="p-6">
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg p-8 border border-yellow-200">
                    <h1 className="text-5xl font-extrabold text-center mb-8 text-yellow-600">
                        Blog Links
                    </h1>
                    <div className="mt-8">
                        <ul className="list-disc list-inside text-gray-600">
                            {blogs.map((blog, index) => (
                                <li key={index} className="mb-4">
                                    <Link
                                        to={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-500 hover:underline hover:text-yellow-700 transition duration-300"
                                    >
                                        {blog.title}
                                    </Link>
                                    <p className="text-gray-500 italic">
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
