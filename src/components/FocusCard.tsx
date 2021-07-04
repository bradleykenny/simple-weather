import { FunctionComponent, useState } from "react";

import "../styles/Card.css";

type FocusCardProps = {};

const FocusCard: FunctionComponent<FocusCardProps> = (
	props: FocusCardProps
) => {
	return (
		<>
			<div className="p-4 m-4 w-4/6 bg-white shadow-md rounded-md z-50 relative">
				<div className="mr-4 w-16 mb-1 inline-block">☀️</div>
				<div className="inline-block">
					<h1 className="text-base">Hello</h1>
					<h2 className="text-4xl">24</h2>
					<h2 className="text-gray-500 italic capitalize text-sm">
						Some description
					</h2>
				</div>
			</div>
		</>
	);
};

export default FocusCard;
