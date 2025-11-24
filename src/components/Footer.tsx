import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bg-primary text-text-primary pt-16 pb-10">
      <div className="mx-auto px-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-mono font-bold text-text-accent mb-3">
              nishant@portfolio
            </h3>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Backend developer focused on Go, PostgreSQL, and Linux.
              I build fast, reliable, production-ready systems.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <a
              href="mailto:ndjangra1027@gmail.com"
              className="block text-text-muted hover:text-highlight transition text-sm"
            >
              ndjangra1027@gmail.com
            </a>

            <a
              href="https://buymeacoffee.com/nishujangra27"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-text-muted hover:text-highlight transition text-sm mt-2"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <IconLink href="https://github.com/nishujangra">
            <Github size={22} />
          </IconLink>

          <IconLink href="https://www.linkedin.com/in/nishujangra27/">
            <Linkedin size={22} />
          </IconLink>

          <IconLink href="https://x.com/nishujangra27">
            <Twitter size={22} />
          </IconLink>

          <IconLink href="mailto:ndjangra1027@gmail.com">
            <Mail size={22} />
          </IconLink>
        </div>

        {/* Bottom */}
        <div className="border-t border-border-muted pt-6 text-center">
          <p className="text-text-muted text-sm">
            © 2025 <span className="text-text-primary font-medium">Nishant</span>.
            All rights reserved.
          </p>

          <p className="text-text-muted text-xs mt-1">
            Built with <span className="text-highlight font-semibold">React</span> &{" "}
            <span className="text-highlight font-semibold">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const IconLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-muted hover:text-highlight transition"
  >
    {children}
  </a>
);

export default Footer;
