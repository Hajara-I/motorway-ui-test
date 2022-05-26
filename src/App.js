import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";

import "./App.css";
import Polaroid from "./components/polaroid";
import FormComp from "./components/form";
import Gallery from "./components/pages/gallery";
import Form from "./components/pages/form";

const App = () => {
	const [images, setImages] = useState();
	const [selected, setSelected] = useState("");
	const [card, setCard] = useState(false);

	useEffect(() => {
		fetch("images?limit=10")
			.then((res) => res.json())
			.then((data) => {
				console.log("Success:", data);
				setImages(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	function handleClick(index) {
		setSelected(images[index]);
		setCard(true);
	}

	return (
		<div className="app">
			<BrowserRouter>
				<div className="link-container">
					<Link to="/gallery" className="link">
						Gallery
					</Link>
					<Link to="/form" className="link">
						Form
					</Link>
					<Routes>
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/form" element={<Form />} />
					</Routes>
				</div>
				<div className="wrapper">
					<div className="acc-wrapper">
						<div className="accordion">
							{images &&
								images.map((img, index) => {
									return (
										<div key={index} onClick={() => handleClick(index)}>
											<img
												src={`${img.url}.jpg`}
												alt="a car in black and white"
											/>
										</div>
									);
								})}
						</div>
					</div>
					<div className="pol-container">
						{card ? (
							<div className="polaroid-wrap">
								<Polaroid
									className="polaroid-card"
									imgUrl={`${selected.url}.jpg`}
									profileUrl={`${selected.user.profile_image}.webp`}
									caption={selected.description}
									alt={selected.alt_description}
								/>
							</div>
						) : null}
					</div>
					<div className="form">
						<Form />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
