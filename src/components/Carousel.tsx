import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { DailyWeather } from "../types/DailyWeather";
import { WeatherData } from "../types/WeatherData";
import Card from "./Card";

type CarouselProps = {
	weather: WeatherData | undefined;
	setActiveCard: Dispatch<SetStateAction<DailyWeather>>;
};

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps) => {
	const { weather, setActiveCard } = props;
	return (
		<div className="p-4 pr-0">
			{weather &&
				weather.daily.map((daily) => (
					<Card weather={daily} setActiveCard={setActiveCard} />
				))}
		</div>
	);
};

export default Carousel;
