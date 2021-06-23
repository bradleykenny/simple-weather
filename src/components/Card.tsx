import twemoji from 'twemoji';
import parse from 'html-react-parser';
import { DailyWeather } from '../types/DailyWeather';

type CardProps = {
    weather: DailyWeather
};

const Card = (props: CardProps) => {

    const { weather } = props;

    // const iconUrl: string = `http://openweathermap.org/img/wn/${ weather.weather[0].icon}@4x.png`;
    const emojiIcon: string = twemoji.parse("⛅️",  { folder: 'svg', ext: '.svg' });
    
    return (
        <div className="w-80 px-8 pt-8 pb-4 bg-white shadow-md rounded-md">
            <h1 className="text-2xl mb-2">Tuesday</h1> {/* TODO: coming soon ... */}
            <h2 className="text-8xl mb-2">{ weather.temp.day }ºC</h2>
            <h2 className="text-gray-500 italic">{ weather.weather[0].description }</h2>
            <div className="mx-auto mt-6 mb-6 w-3/6">
                { parse(emojiIcon) }
            </div>
        </div>
    );

}

export default Card;