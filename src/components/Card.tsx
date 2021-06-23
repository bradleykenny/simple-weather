import { DailyWeather } from '../types/DailyWeather';
import mapIcon from '../utils/IconMapper';

type CardProps = {
    weather: DailyWeather
};

const Card = (props: CardProps) => {

    const { weather } = props;

    // const iconUrl: string = `http://openweathermap.org/img/wn/${ weather.weather[0].icon}@4x.png`;
    
    return (
        <div className="w-4/6 px-8 pt-8 pb-8 bg-white shadow-md rounded-md">
            <div className="mb-2 mr-6 w-32 inline-block">
                { mapIcon("01d") }
            </div>
            <div className="inline-block">
                <h1 className="text-2xl">Tuesday</h1> {/* TODO: coming soon ... */}
                <h2 className="text-8xl">{ weather.temp.day }ºC</h2>
                <h2 className="text-gray-500 italic">{ weather.weather[0].description }</h2>
            </div>
        </div>
    );

}

export default Card;