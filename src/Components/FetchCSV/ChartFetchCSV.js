import React from "react";
import DataCSV from "../FetchCSV/./ZonAnn.Ts+dSST.csv";
import { useEffect } from "react";
import { useState } from "react";
import {
	Line,
	Bar,
	Doughnut,
	Pie,
	Radar,
	PolarArea,
	Bubble,
	Scatter,
} from "react-chartjs-2";

function ChartFetchCSV() {
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
			// xlabels.push(year);
			const temp = columns[2];
			// ytemps.push(temp);

			console.log(row);
			console.log(columns);
			console.log(year, temp);
		});
	}

	const [chartData, setChartData] = useState({});
	const [year, setYear] = useState([]);
	const [temp, setTemp] = useState([]);

	const chart = () => {
		setChartData({
			labels: ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday"],

			datasets: [
				{
					label: "level of thickness",
					data: [33, 42, 22, 35, 17],
					backgroundColor: ["rgba(75, 192, 192, 0.6)"],
					borderWidth: 4,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);
	return (
		<div>
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

export default ChartFetchCSV;
