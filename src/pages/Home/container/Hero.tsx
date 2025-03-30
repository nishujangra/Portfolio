import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="text-center py-16 w-full space-y-4 px-8">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-col items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
                    <motion.h2
                        className="text-sm md:text-2xl lg:text-2xl font-extrabold text-white w-full md:w-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Backend Developer | Open-Source Enthusiast | Self Taught
                        Developer
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-sm md:text-xl lg:text-2xl text-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Building efficient and secure web services with Golang.
                    </motion.p>
                </div>
                <motion.div
                    className="w-48 h-48 mx-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img
                        src="/nishu.png"
                        alt="Profile"
                        className="rounded-full border-4 border-white shadow-lg"
                    />
                </motion.div>
            </div>

            <div>
                <Button variant="outline" className="mt-8">
                    <a
                        href="https://drive.google.com/file/d/1koDFnVpsktYxxQpXtP_tluEJgQWZzWjd/view"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Checkout My Resume
                    </a>
                </Button>
            </div>
        </section>
    );
};

export default Hero;
