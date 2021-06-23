import './App.css';
import Card from "./components/Card";
import Carousel from './components/Carousel';

require('dotenv').config();

function App() {
  const weather = {
    temp: {
      day: 28
    },
    weather: [{
      description: "Rainy"
    }]

  }

  return (
    <div className="pt-32 bg-gray-200 h-screen">
      <div className="container mx-auto">
        <Card 
          weather={weather}
        />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
