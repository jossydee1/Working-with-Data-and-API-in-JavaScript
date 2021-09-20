import "./App.css";
import Fetch from "./Components/Fetch/Fetch";
import Chart from "./Components/FetchCSV/Chart";
import ChartFetchCSV from "./Components/FetchCSV/ChartFetchCSV";
import FetchCSV from "./Components/FetchCSV/FetchCSV";

function App() {
	//BEM
	return (
		<div className="App">
			{/* <Fetch /> */}
			{/* <FetchCSV /> */}
			{/* <Chart /> */}
			<ChartFetchCSV />
		</div>
	);
}

export default App;
