import { Mail, MapPin, Github, Linkedin, Coffee } from "lucide-react";

const Contact = () => {
  return (
    <main className="w-full min-h-screen bg-bg-primary text-text-primary font-mono relative overflow-hidden py-12 md:py-16">
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-text-muted text-base md:text-lg">
            Let's connect and build something amazing together!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Contact Info */}
          <div className="bg-bg-secondary p-5 rounded-xl border border-border-muted shadow-lg">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-text-primary">
              Contact Information
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-text-accent" />
                <div>
                  <p className="font-medium text-sm md:text-base">Email</p>
                  <a
                    href="mailto:ndjangra1027@gmail.com"
                    className="text-text-accent hover:text-text-primary transition"
                  >
                    ndjangra1027@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-text-accent" />
                <div>
                  <p className="font-medium text-sm md:text-base">Location</p>
                  <p className="text-text-muted text-sm md:text-base">
                    Jhajjar, Haryana, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="bg-bg-secondary p-5 rounded-xl border border-border-muted shadow-lg">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-text-primary">
              Connect & Support
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Github size={20} className="text-text-accent" />
                <div>
                  <p className="font-medium text-sm md:text-base">GitHub</p>
                  <a
                    href="https://github.com/nishujangra"
                    target="_blank"
                    className="text-text-accent hover:text-text-primary transition"
                  >
                    github.com/nishujangra
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin size={20} className="text-text-accent" />
                <div>
                  <p className="font-medium text-sm md:text-base">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/nishujangra27"
                    target="_blank"
                    className="text-text-accent hover:text-text-primary transition"
                  >
                    linkedin.com/in/nishujangra27
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="https://buymeacoffee.com/nishujangra27"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-text-accent hover:bg-text-accent/80 text-black font-semibold px-4 py-2 rounded-lg transition"
                >
                  <Coffee size={16} />
                  Buy Me a Coffee
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 bg-bg-secondary p-5 rounded-xl border border-border-muted">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-text-primary">
            Let's Work Together
          </h3>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or
            just talking tech. Feel free to reach out anytime!
          </p>
        </div>

      </div>
    </main>
  );
};

export default Contact;
