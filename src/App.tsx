import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import GeoWrapper from "./components/GeoWrapper";
import NotFound from "./pages/Misc/NotFound";
import ComingSoon from "./pages/Misc/ComingSoon";
import LoadingScreen from "./pages/Misc/LoadingScreen";
import Home from "./pages/home/Home";
import Blog from "./pages/Blogs/Blogs";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";

const App = () => {
	return (
		<GeoWrapper>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/blogs" element={<Blog />} />
					<Route path="/projects" element={<Project />} />
					<Route path="/contact" element={<Contact />} />

					{/* Catch-all for unknown nested routes */}
				</Route>
				<Route path="/loading" element={<LoadingScreen />} />
				<Route path="/coming-soon" element={<ComingSoon />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</GeoWrapper>
	);
};

export default App;
