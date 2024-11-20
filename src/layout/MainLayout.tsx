import SideBar from "@/components/SideBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="bg-background text-white min-h-[100vh] flex md:flex-row pt-20">
      <div className="bg-foreground rounded-xl h-full w-[27vw] mx-16">
        <SideBar />
      </div>
      <div className="text-white mr-16 w-[73vw] pb-10">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
