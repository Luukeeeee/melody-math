import Fractions from './components/Fractions';
import Decimals from './components/Decimals';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Switch>
          <Route exact path="/" component={Fractions} />
					<Route path="/fractions" component={Fractions} />
					<Route path="/decimals" component={Decimals} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
