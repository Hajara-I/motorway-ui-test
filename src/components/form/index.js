import React from "react";
import { useState } from "react";

export default function Form() {
	const [salary, setSalary] = useState("");

	function slider() {
		let val = document.getElementById("salary").value;
		setSalary(val);
	}

	function onSubmit() {
		let nameValue = document.getElementById("name").value;
		let emailValue = document.getElementById("email").value;
		let dobValue = document.getElementById("dob").value;
		let favColourValue = document.getElementById("favColour").value;
		let salaryValue = document.getElementById("salary").value;

		if (
			nameValue === "" ||
			emailValue === "" ||
			dobValue === "" ||
			favColourValue === "" ||
			salaryValue === ""
		) {
			alert("Please input all fields in the form");
		} else {
			alert("Form Submitted. Thank you :)");
		}
	}

	return (
		<div>
			<div
				className="form"
				onChange={() => {
					slider();
				}}
			>
				<input
					type="text"
					name="firstName"
					placeholder="Enter name"
					id="name"
				/>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Enter email address"
				/>
				<input
					id="dob"
					type="date"
					name="dob"
					placeholder="Enter date of birth"
				/>
				<input
					type="color"
					name="favColour"
					id="favColour"
					placeholder="Enter your fave colour"
				/>
				<div className="range">
					<label htmlFor="Salary">Select your salary:</label>
					<input
						type="range"
						min="20000"
						max="50000"
						step="5000"
						name="Salary"
						id="salary"
					/>
					<p value={salary}>Salary:£{salary}</p>
				</div>
				<button onClick={onSubmit}>Submit</button>
			</div>
		</div>
	);
}
