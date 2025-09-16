const About = () => {
    return (
        <section className="p-8 w-full flex flex-col items-center justify-center">
            <div className="flex flex-col w-full ">
                <h2 className="text-lg md:text-2xl font-bold">
                    &nbsp;About Me
                </h2>
                <hr className="bg-gold h-1 w-[35vw] md:w-[20vw] lg:w-[15vw] rounded-full" />

                <div className="mt-6 space-y-4 p-4 text-sm md:text-base leading-relaxed">
                    <strong className="text-lg md:text-xl font-semibold">
                        Hi, I&apos;m Nishant
                    </strong>
                    , a Backend & Infrastructure Engineer passionate about{" "}
                    <strong className="text-blue-400">
                        building scalable systems, real-time applications, and high-performance infrastructure
                    </strong>. 
                    Currently ranked{" "}
                    <strong className="text-blue-400">Top 11.8% in METI Japan IT Contest 2025</strong>.

                    <p>
                        At <strong className="text-blue-400">Udyansh</strong>, I built distributed ETL pipelines 
                        processing 1,000+ events daily from multiple sources using concurrent Go routines. 
                        I developed secure API key management and RBAC middleware protecting 20+ internal routes, 
                        and deployed isolated NAT test environments using VirtualBox, iptables, and dnsmasq.
                    </p>

                    <p>
                        I contribute actively to{" "}
                        <strong className="text-blue-400">open source</strong> — 
                        projects like <strong>Serac</strong> (Rust RBAC Auth with Argon2), 
                        <strong>BalancerX</strong> (Go Load Balancer handling 11-12k req/sec), and 
                        <strong>debforge</strong> (CLI .deb package builder). 
                        I also author{" "}
                        <strong className="text-blue-400">10+ technical documentation guides</strong> 
                        covering Redis, KeyDB, Juju orchestration, and Linux administration.
                    </p>

                    <p>
                        I enjoy solving complex backend challenges and building infrastructure that is{" "}
                        fast, secure, and production-ready.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
