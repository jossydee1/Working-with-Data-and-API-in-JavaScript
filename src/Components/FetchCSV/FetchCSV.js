import React from "react";
import DataCSV from "./ZonAnn.Ts+dSST.csv";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";

function FetchCSV() {
	// // var Chart = require("chart.js");
	// // var myChart = new Chart(ctx, {...});

	// // var ctx = document.getElementById("myChart").getContext("2d");
	// const ctx = require("chart.js");
	// const myChart = new Chart(ctx, {
	// 	type: "bar",
	// 	data: {
	// 		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	// 		datasets: [
	// 			{
	// 				label: "# of Votes",
	// 				data: [12, 19, 3, 5, 2, 3],
	// 				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
	// 				borderColor: ["rgba(255, 99, 132, 1)"],
	// 				borderWidth: 1,
	// 			},
	// 		],
	// 	},
	// });
	const xlabels = [];
	const ytemps = [];
	ChartIt();

	async function ChartIt() {
		await getData();
		const [chartData, setChartData] = useState({});

		const chart = () => {
			setChartData({
				labels: xlabels,
				// labels: [
				// 	"Monday",
				// 	"tuesday",
				// 	"Wednessday",
				// 	"Thursday",
				// 	"Friday",
				// 	"saturday",
				// ],

				datasets: [
					{
						label: "Global Average Temperature",
						data: ["33", "43", "24", "37", "84", "94"],
						backgroundColor: ["rgba(75, 192, 192, 0.6)"],
						borderWidth: 4,
					},
				],
			});
		};

		useEffect(() => {
			chart();
		}, []);

		// getData();

		async function getData() {
			const response = await fetch(DataCSV);
			const data = await response.text();
			console.log("Yes we are m0ving");
			console.log(data);
			console.log("Woooo");
			const rows = data.split("\n");
			console.log(rows);

			const rows1 = data.split("\n").slice(2);
			console.log(rows1);

			//Using forEach and spliting by ", "

			const table = data.split("\n").slice(1);
			table.forEach((row) => {
				const columns = row.split(",");
				const year = columns[0];
				xlabels.push(year);
				const temp = columns[2];
				ytemps.push(temp);

				console.log(row);
				console.log(columns);
				console.log(year, temp);
			});
		}

		return (
			<div>
				<button onClick="">Get</button>
				<div style={{ height: "500px", width: "500px" }}>
					<Bar
						data={chartData}
						options={{
							responsive: true,
						}}
					/>
				</div>
			</div>
		);
	}
}
export default FetchCSV;
