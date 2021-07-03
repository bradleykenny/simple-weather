import { FunctionComponent, useState } from "react";
import { DailyWeather } from "../types/DailyWeather";
import mapIcon from "../utils/IconMapper";
import ExpandedCardInfo from "./ExpandedCardInfo";

import "../styles/Card.css";

type CardProps = {
	weather: DailyWeather;
};

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
	const { weather } = props;
	const [expand, setExpand] = useState(true);

	const date = new Date(weather.dt * 1000); // so in seconds, no milliseconds
	const todayOptions = { weekday: "long" };
	const today = new Intl.DateTimeFormat("en-US", todayOptions).format(
		date.getDay()
	);
	console.log(today);

	return (
		<>
			<div className="weatherCard p-8 bg-white shadow-md rounded-md z-50 relative">
				<div className="mb-2 mr-6 w-32 inline-block">
					{mapIcon(weather?.weather[0].icon)}
				</div>
				<div className="inline-block">
					<h1 className="text-2xl">{date.getDay()}</h1>{" "}
					{/* TODO: coming soon ... */}
					<h2 className="text-8xl">
						{weather ? Math.floor(weather.temp.day) : ""}ºC
					</h2>
					<h2 className="text-gray-500 italic capitalize">
						{weather?.weather[0].description}
					</h2>
				</div>
			</div>
			{expand && <ExpandedCardInfo weather={weather} />}
		</>
	);
};

export default Card;
