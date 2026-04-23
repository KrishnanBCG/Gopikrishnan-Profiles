import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/404'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import "preline/preline";
// import PageTracker from "./PageTracker";
export const AppContext = createContext();
// import { increaseVisitorCount } from "../../New Portfilo/src/visitorCounter";
function App() {
	const savedTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");

		localStorage.setItem("theme", theme);
	}, [theme]);

	const switchTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
			<BrowserRouter>
				{/* <PageTracker /> */}
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
