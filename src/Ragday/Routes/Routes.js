import React, { useContext } from "react";
import { Brim } from "../State/Control";

import Login from "./Login/Login";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";

function Routes() {
	const [control] = useContext(Brim);

	return (
		<>
			{/*
				//* if the route value in control is changed, the route changes.. 
			*/}

			{control.route === "login" && <Login />}
			{control.route === "home" && <Home />}
			{control.route === "cart" && <Cart />}
		</>
	);
}

export default Routes;
