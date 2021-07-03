import "./App.css";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

require("dotenv").config();

function App() {
	return (
		<div className="bg-gray-200 min-h-screen">
			<div className="container">
				<Carousel />
			</div>
		</div>
	);
}

export default App;
