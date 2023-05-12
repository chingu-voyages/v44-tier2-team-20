import './App.css';
import Button from './components/Button/Button';
import UserConfigBox from './components/UserConfigBox/UserConfigBox';

function App() {
	return (
		<div>
			<h1>React App</h1>
			<UserConfigBox />
			<br />
			<Button text="Battle!" onClick={onclick} fontSize="2rem" width="370px" height="70px" />
			<br />
			<Button text="Add Player +" onClick={onclick} fontSize="20px" width="250px" height="45px" />
		</div>
	);
}

export default App;
