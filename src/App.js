import './App.css';
import Button from './components/Button/Button';
import UserConfigBox from './components/UserConfigBox/UserConfigBox';

function App() {
	return (
		<div>
			<h1>React App</h1>
			<UserConfigBox />
			<Button text="Battle!" onClick={onclick} />
		</div>
	);
}

export default App;
