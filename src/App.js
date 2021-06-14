import './App.css';
import Card from "./components/Card";
import Carousel from './components/Carousel';

require('dotenv').config();

function App() {
  return (
    <div className="pt-32 bg-gray-200 h-screen">
      <div className="container mx-auto">
        <Card 
          day="Monday"
          description="Sky is clear"
          avgTemp="23"
          minTemp="18"
          maxTemp="27"
          icon="11d"
        />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
