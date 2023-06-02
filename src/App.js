import React from 'react';
import './App.css';
import { GameProvider } from './context/GameContext/GameContext';
import UserConfigBox from './components/UserConfigBox/UserConfigBox'


function App() {
	return (
		<div>
			<GameProvider>
                <UserConfigBox />
            </GameProvider>

		</div>
	);
}

export default App;
