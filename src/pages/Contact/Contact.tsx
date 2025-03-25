import { Mail, MapPin, Smartphone } from "lucide-react"


const Contact = () => {
    return (
        <main className="w-full h-full py-8 md:p-0">
            <div className="grid grid-cols-1 gap-8 py-7 px-10">
                <div className="hidden lg:block">
                    <h3 className="text-lg font-bold text-white mb-4">My Location:</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14011.614433009143!2d76.65282199999999!3d28.6026684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742813206765!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="eager"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>

                {/* Contact Info */}
                <div className="bg-background p-6 rounded-lg shadow-lg text-sm">
                    <h3 className="text-lg font-bold mb-4">
                        Get in Touch
                    </h3>
                    <p className="text-gray-400 mb-4 flex gap-2">
                        <Mail
                            color="gold"
                            size={20}
                        /> Email:{" "}
                        <a
                            href="mailto:ndjangra1027@example.com"
                            className="underline"
                        >
                            ndjangra1027@example.com
                        </a>
                    </p>
                    <p className="text-gray-400 mb-4 flex gap-2">
                        <Smartphone
                            color="gold"
                            size={20}
                        />
                        Phone:{" "}
                        <a
                            href="tel:+919896774495"
                            className="underline"
                        >
                            +91 9896774495
                        </a>
                    </p>
                    <p className="text-gray-400 flex gap-2">
                        <MapPin
                            color="gold"
                            size={20}
                        />
                        Location: Faridabad, Haryana, India
                    </p>

                    {/* Special Offer */}
                    <div className="mt-8 text-gold p-4 rounded-lg text-center shadow-lg">
                        🎉 <strong>Special Offer:</strong> First 5 clients get <span className="font-bold">FREE services for 3 weeks!</span> Contact me now!
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact
