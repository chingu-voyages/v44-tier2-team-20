import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext/GameContext';
import UserConfigBox from './components/UserConfigBox/UserConfigBox';
import BattleLog from './components/BattleLog/BattleLog';

function App() {
	return (
		<div>
			<GameProvider>
				<UserConfigBox />
				<BattleLog />
			</GameProvider>
		</div>
	);
}

export default App;
