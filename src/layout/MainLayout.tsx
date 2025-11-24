import Footer from "../components/Footer"
import NavBar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen font-sans bg-space-950 text-text-primary">

      <NavBar />

      {/* Content with Grid */}
      <div className="relative min-h-[calc(100vh-150px)]">

        {/* CRT Scanline Overlay */}
        <div className="pointer-events-none absolute inset-0 z-11 opacity-[0.06]
          bg-[url('https://i.imgur.com/o8eRZkF.png')] mix-blend-overlay"></div>

        {/* Subtle Grid */}
        <div className="pointer-events-none absolute inset-0 z-11
          bg-[linear-gradient(rgba(57,255,20,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.08)_1px,transparent_1px)]
          bg-size-[40px_40px]"></div>

        {/* Page content */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
