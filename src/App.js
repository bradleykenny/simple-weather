import './App.css';
import Card from "./components/Card";
import Carousel from './components/Carousel';

require('dotenv').config();

function App() {

  return (
    <div className="pt-32 bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
