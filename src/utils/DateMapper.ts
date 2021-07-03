const getDayString = (dayInteger: number) => {
	const daysOfWeek: string[] = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return daysOfWeek[dayInteger];
};

export default getDayString;
