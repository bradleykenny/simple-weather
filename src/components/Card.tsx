import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { DailyWeather } from "../types/DailyWeather";
import mapIcon from "../utils/IconMapper";

import "../styles/Card.css";
import getDayString from "../utils/DateMapper";

type CardProps = {
	weather: DailyWeather;
	setActiveCard: Dispatch<SetStateAction<DailyWeather>>;
};

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
	const { weather } = props;

	const date = new Date(weather.dt * 1000); // so in seconds, no milliseconds
	const today = getDayString(date.getDay());
	console.log(date);

	return (
		<>
			<div
				className="p-4 mb-4 bg-white shadow-md rounded-md z-50 relative cursor-pointer"
				onClick={() => props.setActiveCard(weather)}
			>
				<div className="mr-4 w-16 mb-1 inline-block">
					{mapIcon(weather?.weather[0].icon)}
				</div>
				<div className="inline-block">
					<h1 className="text-base">{today}</h1>
					<h2 className="text-4xl">
						{weather ? Math.floor(weather.temp.day) : ""}ºC
					</h2>
					<h2 className="text-gray-500 italic capitalize text-sm">
						{weather?.weather[0].description}
					</h2>
				</div>
			</div>
		</>
	);
};

export default Card;
