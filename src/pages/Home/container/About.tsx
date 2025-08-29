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
                        secure APIs, distributed systems, and automation tools
                    </strong>. 
                    Currently ranked{" "}
                    <strong className="text-blue-400">Top 11.8% in METI Japan IT Contest 2025</strong>.
                    
                    <p>
                        I work primarily with{" "}
                        <strong className="text-blue-400">Go, PostgreSQL, and Redis</strong>,
                        and have hands-on experience in{" "}
                        <strong className="text-blue-400">
                            RBAC systems, load balancing, clustering, and orchestration
                        </strong>. 
                        At Udyansh, I design ETL pipelines, cron-based data integrations, 
                        and secure auth systems, while also contributing to infra setups like{" "}
                        <strong className="text-blue-400">
                            NAT gateways, firewall automation, and Juju orchestration
                        </strong>.
                    </p>

                    <p>
                        Beyond work, I contribute actively to{" "}
                        <strong className="text-blue-400">open source</strong> — 
                        projects like <strong>Serac</strong> (Rust RBAC Auth), and 
                        <strong>BalancerX</strong> (Go Load Balancer). 
                        I also document my learning through{" "}
                        <strong className="text-blue-400">technical blogs and deployment guides</strong>.
                    </p>

                    <p>
                        I enjoy solving backend scaling challenges, designing infra workflows, 
                        and writing code that is{" "}fast, secure, and well-documented
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
