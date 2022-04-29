import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/history" element={<History />} />
			</Routes>
		</Router>
	);
}

export default App;
