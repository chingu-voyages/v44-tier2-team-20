import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext/GameContext';
import UserConfigBox from './components/UserConfigBox/UserConfigBox';
import BattleLog from './components/BattleLog/BattleLog';
import Arena from './components/Arena/Arena';

function App() {
	return (
		<div>
			<GameProvider>
				<Arena />
			</GameProvider>
		</div>
	);
}

export default App;
