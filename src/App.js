import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext/GameContext';
import UserConfigBox from './components/UserConfigBox/UserConfigBox';
import BatteLog from './components/BattleLog/BattleLog';

function App() {
	return (
		<div>
			<GameProvider>
				<UserConfigBox />
				<BatteLog />
			</GameProvider>
		</div>
	);
}

export default App;
