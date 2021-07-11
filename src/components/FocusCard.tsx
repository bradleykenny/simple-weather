import { FunctionComponent } from "react";

import "../styles/Card.css";
import { DailyWeather } from "../types/DailyWeather";
import getDayString from "../utils/DateMapper";
import mapIcon from "../utils/IconMapper";

type FocusCardProps = {
	weather: DailyWeather;
};

const FocusCard: FunctionComponent<FocusCardProps> = (
	props: FocusCardProps
) => {
	const { weather } = props;
	console.log(weather);

	let today;
	if (weather) {
		const date = new Date(weather.dt * 1000); // so in seconds, no milliseconds
		today = getDayString(date.getDay());
	}

	return (
		<div className="p-4 m-4 w-4/6 bg-white shadow-md rounded-md z-50 relative">
			{weather && (
				<>
					<div className="mr-4 w-16 mb-1 inline-block">
						{mapIcon(weather.weather[0].icon)}
					</div>
					<div className="inline-block">
						<h1 className="text-base">{today}</h1>
						<h2 className="text-4xl">
							{Math.floor(weather.temp.day)}
						</h2>
						<h2 className="text-gray-500 italic capitalize text-sm">
							{weather.weather[0].description}
						</h2>
					</div>
				</>
			)}
		</div>
	);
};

export default FocusCard;
