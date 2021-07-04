import "./App.css";
import FocusCard from "./components/FocusCard";
import Sidebar from "./components/Sidebar";

require("dotenv").config();

function App() {
	return (
		<div className="bg-gray-200 relative min-h-screen flex">
			<Sidebar />
			<FocusCard />
		</div>
	);
}

export default App;
