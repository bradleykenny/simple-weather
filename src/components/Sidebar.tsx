import { FunctionComponent } from "react";
import Carousel from "./Carousel";

type SidebarProps = {};

const Sidebar: FunctionComponent<SidebarProps> = (props: SidebarProps) => {
	return (
		<div className="w-96 h-screen overflow-auto">
			<Carousel />
		</div>
	);
};

export default Sidebar;
