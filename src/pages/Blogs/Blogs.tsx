import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <main className="p-6">
    <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Link to My Devuan Wiki Blogs
            </h1>
            <div className="mt-8">
                <ul className="list-disc list-inside text-gray-400">
                    <li className="mb-4">
                        <Link className="hover:underline" to="https://bitbucket.org/tirveni/devuan/wiki/Redis-Cluster">
                            Redis Cluster: What It Is and How to Set It Up on Devuan
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link className="hover:underline" to="https://bitbucket.org/tirveni/devuan/wiki/Redis">
                            How to Install Redis on Devuan Linux (Daedalus 5.0)
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link className="hover:underline" to="https://bitbucket.org/tirveni/devuan/wiki/Sudoers">
                            How to Add a User to the Sudoers in Devuan Linux (Daedalus 5.0)
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
