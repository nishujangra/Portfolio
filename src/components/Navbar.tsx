import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const Navbar = () => {
    return (
        <div className="z-50 sticky top-0 bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-semibold text-white">Nishujangra 27</span>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#" className="text-white hover:text-gray-300 hover:brightness-125">Home</a>
                        <a href="#about" className="text-white hover:text-gray-300 hover:brightness-125">About</a>
                        <a href="#projects" className="text-white hover:text-gray-300 hover:brightness-125">Projects</a>
                        <a href="#contact" className="text-white hover:text-gray-300 hover:brightness-125">Contact</a>
                    </div>
                </div>

            </nav>
            <div className="md:hidden flex justify-between items-center py-4 px-8">
                <Sheet>
                    <SheetTitle>
                        <span className="text-xl mt-2 font-semibold text-white">Nishujangra 27</span>
                    </SheetTitle>
                    <SheetTrigger >
                        <HamburgerMenuIcon className="w-7 h-7 text-zinc-100" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="flex flex-col gap-2 mt-2">
                                    <a href="#" className="text-white hover:text-gray-300 hover:brightness-125">Home</a>
                                    <a href="#about" className="text-white hover:text-gray-300 hover:brightness-125">About</a>
                                    <a href="#projects" className="text-white hover:text-gray-300 hover:brightness-125">Projects</a>
                                    <a href="#contact" className="text-white hover:text-gray-300 hover:brightness-125">Contact</a>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Navbar
