import React from 'react';
import './App.css';
import BattleLog from './components/BattleLog.jsx';
import UserConfigBox from './components/UserConfigBox/UserConfigBox';

function App() {
	return (
		<div>
			<h1>React App</h1>
			<BattleLog />
			<UserConfigBox />
		</div>
	);
}

export default App;
