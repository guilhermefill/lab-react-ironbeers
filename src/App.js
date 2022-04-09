import './App.css';
import HomePageCards from './components/HomePageCards';

function App() {
	return (
		<div className="App">
			<HomePageCards link="/beers" name="All Beers" />
			<HomePageCards link="/random-beer" name="Random Beers" />
			<HomePageCards link="/new-beer" name="New Beers" />
		</div>
	);
}

export default App;
