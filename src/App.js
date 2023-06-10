import React from 'react';
import styles from './App.module.css';
import { GameProvider } from './context/GameContext/GameContext';
import Arena  from './components/Arena/Arena';
import LeaderBoard from './components/LeaderBoard/LeaderBoard/LeaderBoard'
import UserConfigBox from './components/UserConfigBox/UserConfigBox';
import BattleLog from './components/BattleLog/BattleLog';

function App() {
	return (
		<div className={ styles["app-container"]}>
			<GameProvider>
				<Arena />
				<LeaderBoard />
				<UserConfigBox />
				<BattleLog />
			</GameProvider>
		</div>
	);
}

export default App;
