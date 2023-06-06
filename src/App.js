import React from 'react';
import styles from './App.module.css';
import { GameProvider } from './context/GameContext/GameContext';
import Arena  from './components/Arena/Arena';
import LeaderBoard from './components/LeaderBoard/LeaderBoard/LeaderBoard'
import UserConfigBox from './components/UserConfigBox/UserConfigBox';
import BattleLog from './components/BattleLog/BattleLog';
import OpaqueBackground from './components/OpaqueBackground/OpaqueBackground';

function App() {
	return (
		<div className={ styles["app-container"]}>
			<GameProvider>
				<OpaqueBackground>
					<Arena />
				</OpaqueBackground>
				
				<OpaqueBackground>
					<LeaderBoard />
				</OpaqueBackground>
				
				<OpaqueBackground>
					<UserConfigBox />
				</OpaqueBackground>
				
				<OpaqueBackground>
					<BattleLog />
				</OpaqueBackground>
				
			</GameProvider>
		</div>
	);
}

export default App;
