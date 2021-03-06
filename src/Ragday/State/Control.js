import React, { createContext, useState } from "react";

export const Brim = createContext();

export const Control = (props) => {
	const [control, setcontrol] = useState({
		route: "home",
		page: "shirts",
	});

	return (
		<Brim.Provider value={[control, setcontrol]}>
			{props.children}
		</Brim.Provider>
	);
};
