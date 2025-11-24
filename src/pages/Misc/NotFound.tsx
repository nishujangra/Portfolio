const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-green-500 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-mono font-bold mb-4 tracking-widest">
                    <span className="animate-pulse">404</span>
                </h1>

                <p className="text-xl font-mono mb-6">
                    <span className="glitch-text">Page Not Found</span>
                    <span className="blink ml-1">|</span>
                </p>

                <p className="font-mono opacity-70">
                    &gt;_ ACCESS DENIED  
                </p>
            </div>
        </div>
    );
};

export default NotFound;
