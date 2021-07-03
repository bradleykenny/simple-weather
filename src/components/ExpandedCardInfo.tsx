import { FunctionComponent, useState } from "react";
import { DailyWeather } from "../types/DailyWeather";

import "../styles/Card.css";

type ExpandedCardInfoProps = {
	weather: DailyWeather;
};

const ExpandedCardInfo: FunctionComponent<ExpandedCardInfoProps> = (
	props: ExpandedCardInfoProps
) => {
	const { weather } = props;

	return (
		<div className="cardWidth extendedCardInfo p-4 pt-8 bg-gray-100 shadow-md rounded-md z-0 relative">
			Hello
		</div>
	);
};

export default ExpandedCardInfo;
