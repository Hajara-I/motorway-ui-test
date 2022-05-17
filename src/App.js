import React, { useEffect, useState } from "react";
import "./App.css";
import Polaroid from "./components/polaroid";
import Form from "./components/form";

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
		setCard(card ? true : true);
	}

	return (
		<div className="app">
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
		</div>
	);
};

export default App;
