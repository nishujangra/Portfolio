import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="text-text bg-background min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
