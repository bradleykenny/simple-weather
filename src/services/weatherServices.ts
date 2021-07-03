import { WeatherData } from "../types/WeatherData";

const fetchWeather = () => {
	const apiUrl: string = `https://api.openweathermap.org/data/2.5/onecall?lat=-33.839490&lon=151.209080&units=metric&appid=${process.env.REACT_APP_API}`;
	const weatherDataFetch: Promise<WeatherData> = fetch(apiUrl)
		.then((res) => res.json())
		.then((res) => res);

	return weatherDataFetch;
};

export { fetchWeather };
