import "./App.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductView from "./components/ProductView/ProductView";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/Loading/Loading";

import { useAPI } from "./API/services";

function App() {
	const [res, getData] = useAPI("GET", "../db/product-data.json");

	useEffect(() => {
		//using setTimeout to demonstrate loading functionality
		setTimeout(getData, 3000);

		//uncomment getData() and comment setTimeout()
		//to fetch data on component mount
		//getData();
	}, []);

	return (
		<div className="App">
			{!res.loading ? (
				<div>
					<Router>
						<Navbar data={res.data} />
						<Switch>
							<Route exact path="/">
								<ProductGallery data={res.data} />
							</Route>

							<Route exact path="/product-view">
								<ProductView data={res.data} />
							</Route>

							<Route>
								<NotFound />
							</Route>
						</Switch>

						<Footer data={res.data} />
					</Router>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
}

export default App;
