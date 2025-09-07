import { Mail, MapPin, Github, Linkedin, Coffee } from "lucide-react"

const Contact = () => {
    return (
        <main className="w-full h-full py-8 md:p-0">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg">
                        Let's connect and build something amazing together!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700">
                        <h3 className="text-xl font-bold mb-6 text-gold">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail color="gold" size={20} />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a
                                        href="mailto:ndjangra1027@example.com"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        ndjangra1027@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin color="gold" size={20} />
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p>Jhajjar, Haryana, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links & Support */}
                    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700">
                        <h3 className="text-xl font-bold mb-6 text-gold">
                            Connect & Support
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Github color="gold" size={20} />
                                <div>
                                    <p className="font-medium">GitHub</p>
                                    <a
                                        href="https://github.com/nishujangra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        github.com/nishujangra
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Linkedin color="gold" size={20} />
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <a
                                        href="https://linkedin.com/in/nishujangra27"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        linkedin.com/in/nishujangra27
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="https://buymeacoffee.com/nishujangra27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    <Coffee size={18} />
                                    Buy Me a Coffee
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-gold">
                        Let's Work Together
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                        Whether you have a project in mind, want to discuss backend architecture, or just want to connect, 
                        feel free to reach out!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Contact
