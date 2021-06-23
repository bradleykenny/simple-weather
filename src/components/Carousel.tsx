import React, { useState } from 'react';
import { WeatherData } from '../types/WeatherData';

type CarouselProps = {};

const Carousel = (props: CarouselProps) => {
    const [ weather, setWeather ] = useState<WeatherData>();

    const apiUrl: string = `https://api.openweathermap.org/data/2.5/onecall?lat=-33.839490&lon=151.209080&appid=${process.env.REACT_APP_API}`;
    const weatherData: Promise<WeatherData> = fetch(apiUrl).then(res => res.json()).then(res => res);

    weatherData.then(wd => {
        setWeather(wd);
    });
    
    return (
        <>
            { weather?.daily[0].feels_like.day }
        </>
    );


}

export default Carousel;