const Contact = () => {
    return (
        <footer id="contact" className="p-10 mx-auto bg-zinc-800">
            <h2 className="text-4xl font-extrabold mb-5 text-center">Contact</h2>
            <p className="mt-4 text-lg text-center">
                Feel free to reach me at&nbsp;
                <a href="mailto:ndjangra1027@gmail.com" className="underline hover:text-zinc-300 hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer">
                    ndjangra1027@gmail.com
                </a>
            </p>
            <div className="mt-4 flex justify-center space-x-6">
                <a href="https://github.com/nishujangra" className="hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/git.svg" alt="GitHub" className="h-8 w-8 inline" />
                </a>
                <a href="https://buymeacoffee.com/nishujangra27" className="hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/bmc.svg" alt="Buy Me A Coffee" className="h-8 w-8 inline" />
                </a>
            </div>
        </footer>
    );
};

export default Contact;
