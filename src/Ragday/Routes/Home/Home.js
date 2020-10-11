import React, { useContext } from "react";

import { Brim } from "../../State/Control";
import SideBar from "../../Components/SideBar/SideBar";
import Shirts from "./Shirts/Shirts";
import "./home.css";
import Header from "../../Components/Header/Header";

function Home() {
	const [control] = useContext(Brim);

	return (
		<div className="home">
			<SideBar />
			{/* 
				//! SIDEBAR should be able to change the page property in control to affect the page shown below...
			*/}

			<div className="pages">
				<Header />

				{control.page === "shirts" && <Shirts />}
				{/* {control.route === "accessories" && <Accessories />} */}
				{/* {control.route === "suits" && <Suits />} */}
				{/* {control.route === "shoes" && <Shoes />} */}
			</div>
		</div>
	);
}

export default Home;
