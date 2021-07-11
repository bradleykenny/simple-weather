import { FunctionComponent } from "react";

import "../styles/Card.css";
import { DailyWeather } from "../types/DailyWeather";
import { DateOptions } from "../types/DateOptions";
import getDayString from "../utils/DateMapper";
import mapIcon from "../utils/IconMapper";
import DescriptionField from "./DescriptionField";

type FocusCardProps = {
	weather: DailyWeather;
};

const FocusCard: FunctionComponent<FocusCardProps> = (
	props: FocusCardProps
) => {
	const { weather } = props;
	console.log(weather);

	let today;
	let formattedDate;

	if (weather) {
		const date = new Date(weather.dt * 1000); // so in seconds, no milliseconds
		today = getDayString(date.getDay());

		let dateOptions: Intl.DateTimeFormatOptions = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		formattedDate = date.toLocaleDateString("en-US", dateOptions);
	}

	return (
		<div className="p-12 m-4 w-full bg-white shadow-md rounded-md z-50 relative">
			{weather && (
				<>
					<h3 className="text-4xl font-bold">{formattedDate}</h3>
					<h2 className="text-4xl font-cursive">
						Sydney, NSW (Australia)
					</h2>
					<hr className="mt-6 mb-6 border-t-2"></hr>
					<div className="mt-8 mr-4 w-32 mb-1 inline-block float-right">
						{mapIcon(weather.weather[0].icon)}
					</div>
					<div className="inline-block">
						<h2 className="text-8xl mb-4">
							{Math.floor(weather.temp.day)}ºC
						</h2>
						<DescriptionField
							description={"Description"}
							text={weather.weather[0].description}
						/>
						<DescriptionField
							description={"Cloudiness"}
							text={weather.clouds.toString() + "%"}
						/>
						<DescriptionField
							description={"Dew Point"}
							text={weather.dew_point.toString()}
						/>
						<DescriptionField
							description={"Humidity"}
							text={weather.humidity.toString()}
						/>
						<DescriptionField
							description={"Moon Phase"}
							text={weather.moon_phase.toString()}
						/>
						<DescriptionField
							description={"Moonrise"}
							text={weather.moonrise.toString()}
						/>
						<DescriptionField
							description={"Moonset"}
							text={weather.moonset.toString()}
						/>
						<DescriptionField
							description={"Pop"}
							text={weather.pop.toString()}
						/>
						<DescriptionField
							description={"Pressure"}
							text={weather.pressure.toString()}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default FocusCard;
