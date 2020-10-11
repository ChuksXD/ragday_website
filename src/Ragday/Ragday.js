import React from "react";
import "./ragday.css";

import { Control } from "./State/Control";
import Routes from "./Routes/Routes";

function Ragday() {
	//* MAIN APP FILE

	//! turn off formatting on prettier for css files...
	//! we will structure our css in a more readable manner than is allowed on prettier..
	//! check comments in home.css for more info

	//* GOTO HOME COMPONENT.....

	//! please delete messages where content is resolved or no longer applicable...i will do the same regarding yours

	//* no need to set fixed height or width of any major embedded component (SIDEBAR, HEADER)..
	//* if height or width is needed simply set to 100%

	return (
		<Control>
			<div className="ragday">
				{/* 
					//* The site has a component called routes that determines what is shown
					//* at the topmost level....whether it is the login, the home Screen or
					//* the cart...
				*/}

				<Routes />
			</div>
		</Control>
	);
}

export default Ragday;
