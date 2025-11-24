const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-black text-green-500 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-mono font-bold mb-4 tracking-widest">
                    <span className="animate-pulse">COMING</span>
                </h1>

                <h1 className="text-5xl font-mono font-bold mb-6 tracking-widest">
                    <span className="animate-pulse">SOON</span>
                </h1>

                <p className="text-xl font-mono mb-6">
                    <span className="glitch-text">Initializing Module...</span>
                    <span className="blink ml-1">|</span>
                </p>

                <p className="font-mono opacity-70">
                    &gt;_ SYSTEM UNDER CONSTRUCTION
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
