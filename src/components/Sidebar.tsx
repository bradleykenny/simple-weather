import {
	FunctionComponent,
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";
import { fetchWeather } from "../services/weatherServices";
import { DailyWeather } from "../types/DailyWeather";
import { WeatherData } from "../types/WeatherData";
import Carousel from "./Carousel";

type SidebarProps = {
	setActiveCard: Dispatch<SetStateAction<DailyWeather>>;
};

const Sidebar: FunctionComponent<SidebarProps> = (props: SidebarProps) => {
	const [weather, setWeather] = useState<WeatherData>();

	useEffect(() => {
		const weatherDataFetch = fetchWeather();
		weatherDataFetch.then((wd) => {
			setWeather(wd);
		});
	}, []);

	return (
		<div className="w-96 h-screen overflow-auto">
			<Carousel weather={weather} setActiveCard={props.setActiveCard} />
		</div>
	);
};

export default Sidebar;
