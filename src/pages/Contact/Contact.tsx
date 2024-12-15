import NavBar from "@/components/Navbar"
import { Mail, MapPin, Smartphone } from "lucide-react"

const Contact = () => {
    return (
        <div className="w-full h-full py-8 md:p-0">
            <NavBar />

            <h2 className="text-2xl pl-10 font-extrabold">Contact</h2>

            <hr className="bg-gold h-2 w-1/4 rounded-lg ml-6 mt-4" />


            <div className="grid grid-cols-1 gap-8 py-7 px-10">
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">My Location:</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.48718049177!2d77.29075332001432!3d28.408912482888915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceab4e25906a5%3A0x646c958c4ec0c841!2sFaridabad%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1697810942587!5m2!1sen!2sus"
                        width="100%"
                        height="300"
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
        </div>
    )
}

export default Contact
