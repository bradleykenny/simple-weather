type DescriptionFieldProps = {
	description: string;
	text: string;
};

const DescriptionField = (props: DescriptionFieldProps) => {
	const { description, text } = props;
	return (
		<h2 className="text-md">
			<span className="text-gray-500">{description}: </span>
			<span className="capitalize">{text}</span>
		</h2>
	);
};

export default DescriptionField;
