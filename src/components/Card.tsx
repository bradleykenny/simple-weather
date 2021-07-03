import { FunctionComponent } from "react";
import { DailyWeather } from "../types/DailyWeather";
import mapIcon from "../utils/IconMapper";

import "../styles/Card.css";

type CardProps = {
	weather: DailyWeather;
};

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
	const { weather } = props;

	return (
		<div className="weatherCard px-8 pt-8 pb-8 bg-white shadow-md rounded-md">
			<div className="mb-2 mr-6 w-32 inline-block">
				{mapIcon(weather?.weather[0].icon)}
			</div>
			<div className="inline-block">
				<h1 className="text-2xl">Tuesday</h1>{" "}
				{/* TODO: coming soon ... */}
				<h2 className="text-8xl">
					{weather ? Math.floor(weather.temp.day) : ""}ºC
				</h2>
				<h2 className="text-gray-500 italic capitalize">
					{weather?.weather[0].description}
				</h2>
			</div>
		</div>
	);
};

export default Card;
