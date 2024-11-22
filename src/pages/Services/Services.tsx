import NavBar from "@/components/Navbar"
import { services } from "@/data/services"

const Services = () => {
    return (
        <div className="bg-foreground w-full h-full rounded-lg">
            <NavBar />

            <h2 className="text-2xl pl-10 font-extrabold">Services</h2>

            <hr className="bg-gold h-2 w-1/4 rounded-lg ml-6 mt-4" />

            <div className="text-center text-gold py-7 mb-8 rounded-lg px-10">
                🎉 <strong>Special Offer:</strong> Get <span className="font-bold">FREE services for 3 weeks</span> if you're among the first 5 clients!
                Reach out to me at <a href="mailto:ndjangra1027@example.com" className="font-bold underline">ndjangra1027@example.com</a> to claim your spot!
            </div>

            <p className="text-gray-400 my-4 ml-10">
                Here are the services I provide to help you build your digital presence:
            </p>

            <div className="py-7 px-10 flex flex-col gap-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300 grid grid-cols-3"
                        >
                            <div className="text-4xl mb-4 flex items-center justify-center col-span-1">
                                {service.icon}
                            </div>
                            <div className="col-span-2 flex flex-col gap-4 justify-center items-center">
                                <h3 className="text-xl font-bold">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-xs">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
