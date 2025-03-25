import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <main className="p-6">
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        Our Blog
                    </h1>
                    <p className="text-center text-gray-300 mb-12">
                        Welcome to my blog! Stay tuned for insightful articles
                        and updates coming soon.
                    </p>
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-center mb-4">
                            Until Checkout my Previous Blogs:
                        </h2>
                        <ul className="list-disc list-inside text-gray-400">
                            <li className="mb-2 underline">
                                <Link to="https://bitbucket.org/tirveni/devuan/wiki/Redis-Cluster">
                                    Redis Cluster: What It Is and How to Set It
                                    Up on Devuan
                                </Link>
                            </li>
                            <li className="mb-2 underline">
                                <Link to="https://bitbucket.org/tirveni/devuan/wiki/Redis">
                                    How to Install Redis on Devuan Linux
                                    (Daedalus 5.0)
                                </Link>
                            </li>
                            <li className="mb-2 underline">
                                <Link to="https://bitbucket.org/tirveni/devuan/wiki/Sudoers">
                                    How to Add a User to the Sudoers in Devuan
                                    Linux (Daedalus 5.0)
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blogs;
