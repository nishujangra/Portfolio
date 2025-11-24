import { Mail, MapPin, Github, Linkedin, Coffee } from "lucide-react";

const Contact = () => {
  return (
    <main className="w-full min-h-screen bg-space-950 text-text-primary font-mono relative overflow-hidden py-12 md:py-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-400 mb-2 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Let's connect and build something amazing together!
          </p>
        </div>

        {/* Contact & Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900/50 p-4 md:p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-neon-400">
              Contact Information
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                <Mail color="#39FF14" size={18} />
                <div>
                  <p className="font-medium text-text-primary text-sm md:text-base">Email</p>
                  <a
                    href="mailto:ndjangra1027@gmail.com"
                    className="text-neon-400 hover:text-neon-300 transition-colors text-sm md:text-base"
                  >
                    ndjangra1027@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                <MapPin color="#39FF14" size={18} />
                <div>
                  <p className="font-medium text-text-primary text-sm md:text-base">Location</p>
                  <p className="text-sm md:text-base">Jhajjar, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Support */}
          <div className="bg-gray-900/50 p-4 md:p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-neon-400">
              Connect & Support
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                <Github color="#39FF14" size={18} />
                <div>
                  <p className="font-medium text-text-primary text-sm md:text-base">GitHub</p>
                  <a
                    href="https://github.com/nishujangra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-400 hover:text-neon-300 transition-colors text-sm md:text-base"
                  >
                    github.com/nishujangra
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                <Linkedin color="#39FF14" size={18} />
                <div>
                  <p className="font-medium text-text-primary text-sm md:text-base">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/nishujangra27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-400 hover:text-neon-300 transition-colors text-sm md:text-base"
                  >
                    linkedin.com/in/nishujangra27
                  </a>
                </div>
              </div>

              <div className="pt-3 md:pt-4">
                <a
                  href="https://buymeacoffee.com/nishujangra27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neon-400 hover:bg-neon-300 text-black font-semibold px-3 md:px-4 py-2 rounded-lg transition-colors duration-200 text-sm md:text-base"
                >
                  <Coffee size={16} />
                  Buy Me a Coffee
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 md:mt-8 bg-gray-900/30 p-4 md:p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-neon-400">
            Let's Work Together
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Whether you have a project in
            mind, want to discuss backend architecture, or just want to connect,
            feel free to reach out!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
