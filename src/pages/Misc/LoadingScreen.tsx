const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-black text-green-500 flex items-center justify-center">
            <div className="text-center font-mono">
                
                <h1 className="text-4xl mb-6 font-bold tracking-widest animate-pulse">
                    INITIALIZING
                </h1>

                <div className="text-left inline-block text-lg leading-relaxed">
                    <p className="glitch-text"> Loading core modules...</p>
                    <p className="glitch-text"> Establishing secure channel...</p>
                    <p className="glitch-text"> Checking system integrity...</p>
                    <p className="glitch-text"> Boot sequence active...</p>
                    <p className="blink mt-4 inline-block">|</p>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
