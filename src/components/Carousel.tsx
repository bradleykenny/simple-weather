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
		<div className="p-4 w-96">
			{weather && <Card weather={weather.daily[0]} />}
		</div>
	);
};

export default Carousel;
