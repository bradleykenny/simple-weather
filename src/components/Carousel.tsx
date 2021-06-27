import { useState, useEffect } from 'react';
import { WeatherData } from '../types/WeatherData';
import Card from './Card';

type CarouselProps = {};

const Carousel = (props: CarouselProps) => {
    const [ weather, setWeather ] = useState<WeatherData>();

    useEffect(() => {
        const apiUrl: string = `https://api.openweathermap.org/data/2.5/onecall?lat=-33.839490&lon=151.209080&units=metric&appid=${process.env.REACT_APP_API}`;
        const weatherDataFetch: Promise<WeatherData> = fetch(apiUrl).then(res => res.json()).then(res => res);
        
        weatherDataFetch.then(wd => {
            setWeather(wd);
            console.log(wd);
        });
    }, []);

    return (
        <>
            <Card weather={ weather?.daily[0] } />
        </>
    );


}

export default Carousel;