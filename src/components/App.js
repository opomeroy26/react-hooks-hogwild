import React from "react";
import Nav from "./Nav";
import PigList from "./PigList";
import Header from "./Header";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
