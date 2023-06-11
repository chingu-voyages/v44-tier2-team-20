import React, { useState, useEffect, useContext } from 'react';
import UserSelection from '../UserSelection/UserSelection';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';
import Button from '../Button/Button';
import { GameContext } from '../../context/GameContext/GameContext';
import Bot from '../../context/GameContext/Bot';
import styles from './UserConfigBox.module.css';

const UserConfigPanel = () => {
	const { addBot } = useContext(GameContext);
	const { gameState, setGameState } = useContext(GameContext);

	const [newBots, setNewBots] = useState([])

	useEffect(() => {
		if (newBots.length > 1 && gameState) {
			newBots.forEach(el => {
				const bot = new Bot();
				bot.setName(el.name);
				bot.setFormId(el.formId);
				bot.setImage(`./public/bot-${Math.floor(Math.random() * 12) + 1}.png`);
				bot.setSpeed(Number(el.speed));
				bot.setBinaryValue(el.value);
				bot.setDirection(el.direction);
				bot.setCoordinates(); // Call setCoordinates after setDirection
				bot.setOperator(el.operation);
				addBot(bot);
				console.log(bot)
			})
		}
	}, [gameState]);

	return (
		<div className={styles.wrapper}>
			<OpaqueBackground>
				<UserSelection formId={1} 
					newBots={newBots}
					setNewBots={setNewBots} 
					/>
				<UserSelection formId={2} 
					newBots={newBots}
					setNewBots={setNewBots} 
					/>
				<Button 
				gameState={gameState}
				setGameState={setGameState}/>
			</OpaqueBackground>
		</div>
		
	);
};

export default UserConfigPanel;
