import './App.css';
import Deals from './components/Deals/Deals';
import Chart from './components/LineChart/LineChart';
import Navbar from './components/Navbar/Navbar';
import SimpleBarChart from './components/SimpleBarChart/SimpleBarChart';
import SimplePieChart from './components/SimplePieChart/SimplePieChart';
import UseSpring from './components/UseSpring/UseSpring';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Deals></Deals>
      <Chart></Chart>
      <SimpleBarChart></SimpleBarChart>
      <SimplePieChart></SimplePieChart>
      <UseSpring></UseSpring>
    </div>
  );
}

export default App;
