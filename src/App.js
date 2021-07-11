import { useState } from "react";
import "./App.css";
import FocusCard from "./components/FocusCard";
import Sidebar from "./components/Sidebar";

require("dotenv").config();

function App() {
	const [activeCard, setActiveCard] = useState(undefined);

	return (
		<div className="bg-gray-200 relative min-h-screen flex">
			<Sidebar setActiveCard={setActiveCard} />
			<FocusCard weather={activeCard} />
		</div>
	);
}

export default App;
