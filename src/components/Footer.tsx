import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-space-950/97 text-text-primary pt-12 pb-8">
			<div className="mx-auto px-10">
				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
					{/* Brand / About */}
					<div>
						<h3 className="text-2xl font-mono font-bold text-terminal-blue mb-3">
							nishant@portfolio
						</h3>
						<p className="text-text-secondary text-sm leading-relaxed max-w-sm">
							I'm a backend developer who loves building fast, reliable systems with Go, PostgreSQL, and Linux.
						</p>
					</div>


					{/* Contact */}
					<div className="text-center md:text-right">
						<h3 className="text-lg font-semibold text-text-primary mb-4">
							Contact
						</h3>
						<a
							href="mailto:ndjangra1027@gmail.com"
							className="block text-text-secondary hover:text-neon-400 transition text-sm"
						>
							ndjangra1027@gmail.com
						</a>
						<a
							href="https://buymeacoffee.com/nishujangra27"
							target="_blank"
							rel="noopener noreferrer"
							className="block text-text-secondary hover:text-neon-400 transition text-sm mt-2"
						>
							Buy Me a Coffee
						</a>
					</div>
				</div>

				{/* Social Icons */}
				<div className="flex justify-center space-x-8 mb-10">
					<a
						href="https://github.com/nishujangra"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-secondary hover:text-neon-400 transition"
					>
						<Github size={22} />
					</a>
					<a
						href="https://www.linkedin.com/in/nishujangra27/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-secondary hover:text-neon-400 transition"
					>
						<Linkedin size={22} />
					</a>
					<a
						href="https://x.com/nishujangra27"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-secondary hover:text-neon-400 transition"
					>
						<Twitter size={22} />
					</a>
					<a
						href="mailto:ndjangra1027@gmail.com"
						className="text-text-secondary hover:text-neon-400 transition"
					>
						<Mail size={22} />
					</a>
				</div>

				{/* Bottom */}
				<div className="border-t border-bg-secondary pt-6 text-center">
					<p className="text-text-secondary text-sm">
						© 2025{" "}
						<span className="text-text-primary font-medium">
							Nishant
						</span>
						. All rights reserved.
					</p>
					<p className="text-text-secondary text-xs mt-1">
						Built with{" "}
						<span className="text-neon-400 font-semibold">
							React
						</span>{" "}
						&{" "}
						<span className="text-neon-400 font-semibold">
							TypeScript
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
