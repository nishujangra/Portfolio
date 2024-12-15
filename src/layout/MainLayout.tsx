import BottomNavBar from "@/components/BottomNavBar"
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <div className="bg-background text-white min-h-[100vh] flex flex-col gap-8 md:flex-row py-20 px-10">
        <div className="bg-foreground rounded-xl h-max w-1/4 hidden md:flex">
          <SideBar />
        </div>
        <div className="bg-foreground rounded-xl h-max w-full md:hidden flex">
          <TopBar />
        </div>
        <div className="bg-foreground rounded-lg md:w-4/5 w-full">
          <Outlet />
        </div>
      </div>
      
      <div className="text-white bg-transparent fixed flex items-center justify-center md:hidden bottom-0 right-0 w-full">
        <BottomNavBar />
      </div>
    </>
  )
}

export default MainLayout
