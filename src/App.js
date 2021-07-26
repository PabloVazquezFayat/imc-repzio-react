import "./App.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductView from "./components/ProductView/ProductView";
import Footer from "./components/Footer/Footer";

import { useAPI } from "./API/services";

function App() {
	const [res, getData] = useAPI("GET", "../db/product-data.json");

	useEffect(() => {
		//using setTimeout to demonstrate loading functionality
		setTimeout(getData, 1000);

		//uncomment getData() to fetch data on component mount
		//getData();
	}, []);

	return (
		<div className="App">
			{!res.loading ? (
				<div>
					<Navbar data={res.data} />

					<Router>
						<Switch>
							<Route exact path="/">
								<ProductGallery data={res.data.items} />
							</Route>

							<Route exact path="/product-view/:id">
								<ProductView />
							</Route>
						</Switch>
					</Router>

					<Footer />
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default App;
