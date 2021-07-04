import { FunctionComponent, useState, useEffect } from "react";
import { fetchWeather } from "../services/weatherServices";
import { WeatherData } from "../types/WeatherData";
import Card from "./Card";

type CarouselProps = {};

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps) => {
	const [weather, setWeather] = useState<WeatherData>();

	useEffect(() => {
		const weatherDataFetch = fetchWeather();
		weatherDataFetch.then((wd) => {
			setWeather(wd);
		});
	}, []);

	return (
		<div className="p-4 pr-0">
			{weather && weather.daily.map((daily) => <Card weather={daily} />)}
		</div>
	);
};

export default Carousel;
