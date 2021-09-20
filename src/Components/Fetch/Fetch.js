import React from "react";

function Fetch() {
	//Fetching data using Asyn function

	catchRainbow()
		.then((response) => {
			console.log("whyyyyy");
		})
		.catch((error) => {
			console.log("sorry...error!");
			console.error(error);
		});
	async function catchRainbow() {
		const response = await fetch("rainbow.jpeg");
		const blob = await response.blob();
		document.getElementById("rainbow").src = URL.createObjectURL(blob);
	}

	//Fetching data using traditional fetch method

	<img src="URL.createObjectURL" id="rainbow" alt="" />;
	fetch("rainbow.jpg")
		.then((response) => {
			console.log(response);
			return response.blob();
		})
		.then((blob) => {
			console.log(blob);
			document.getElementById("rainbow").src = URL.createObjectURL(blob);
		})
		.catch((error) => {
			console.log("error!!!!");
			console.error(error);
		});

	return (
		<div>
			dfdzz
			<img src="URL.createObjectURL" id="rainbow" alt="" />
		</div>
	);
}

export default Fetch;
