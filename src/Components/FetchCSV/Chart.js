import React from "react";
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

function Chart() {
	const [chartData, setChartData] = useState({});

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
			<h1>Jossy</h1>
			<div style={{ height: "500px", width: "500px" }}>
				<Line
					data={chartData}
					options={{
						responsive: true,
						// title: { text: "Thickness Scale", display: true },
						// scale: {
						// 	yAxes: [
						// 		{
						// 			ticks: {
						// 				autoSkip: true,
						// 				maxTicksLimit: 10,
						// 				beginAtZero: true,
						// 			},
						// 			gridLines: {
						// 				display: true,
						// 			},
						// 		},
						// 	],
						// 	xAxes: [
						// 		{
						// 			gridLines: {
						// 				display: false,
						// 			},
						// 		},
						// 	],
						// },
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<Bar
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<Doughnut
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<Pie
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<Radar
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<PolarArea
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<Bubble
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<div style={{ height: "500px", width: "500px" }}>
				<Scatter
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
		</div>
		// 'pie', 'line', 'bar', 'radar', 'polarArea', 'bubble', 'horizontalBar', 'scatter
	);
}

export default Chart;
