import SideBar from "@/components/SideBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="bg-background text-white min-h-[100vh] grid grid-cols-12 py-20">
      <div className="bg-foreground rounded-xl h-max mx-12 col-span-3">
        <SideBar />
      </div>
      <div className="mr-12 col-span-9">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
