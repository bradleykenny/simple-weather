import twemoji from "twemoji";
import htmlParse, { domToReact } from "html-react-parser";

const mapIcon = (icon: string): ReturnType<typeof domToReact> => {
	let newIconName: string = "";

	switch (icon) {
		case "01d":
		case "01n":
			newIconName = "☀️";
			break;
		case "02d":
		case "02n":
			newIconName = "⛅️";
			break;
		case "03d":
		case "03n":
			newIconName = "🌥";
			break;
		case "04d":
		case "04n":
			newIconName = "☁️";
			break;
		case "09d":
		case "09n":
			newIconName = "🌦";
			break;
		case "10d":
		case "10n":
			newIconName = "🌧";
			break;
		case "11d":
		case "11n":
			newIconName = "⛈";
			break;
		case "13d":
		case "13n":
			newIconName = "❄️";
			break;
		case "50d":
		case "50n":
			newIconName = "🌫";
			break;
		default:
			console.log(`Do not have mapping for icon ${icon}`);
			break;
	}

	const twemojiOptions = { folder: "svg", ext: ".svg" };
	let twemojiSvg: string = twemoji.parse(newIconName, twemojiOptions);
	return htmlParse(twemojiSvg);
};

export default mapIcon;
