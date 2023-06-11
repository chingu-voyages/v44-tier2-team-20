import React, { useState, useEffect, useContext } from 'react';
import UserSelection from '../UserSelection/UserSelection';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';
import Button from '../Button/Button';
import { GameContext } from '../../context/GameContext/GameContext';
import Bot from '../../context/GameContext/Bot';
import styles from './UserConfigBox.module.css';

const UserConfigPanel = () => {
	const { addBot, pause } = useContext(GameContext);
	const { gameState } = useContext(GameContext);
	const [matchFound, setMatchFound] = useState(false);
	const [newBots, setNewBots] = useState([])

	const checkIsReady = () => {
		if (newBots.length > 1) {
		const isDuplicateName = newBots.some((bot, index) => {
			return newBots.findIndex((otherBot, otherIndex) => {
				return bot.name === otherBot.name && index !== otherIndex;
				}) !== -1;
			});
			
		if (isDuplicateName) {
			// Duplicate name found
			alert('Duplicate bot names found!');
			return false
		} else {
			// no duplicates found
			return true
		}
 	} else if (newBots.length == 1) {
		//not enough bots to start the game
		return false
	}
}

	useEffect(() => {
	if (gameState === true && pause === false) {
		newBots.forEach(el => {
			const bot = new Bot();
			bot.setName(el.name);
			bot.setFormId(el.formId);
			bot.setImage(`./images/bot-${Math.floor(Math.random() * 10) + 1}.png`);
			bot.setSpeed(Number(el.speed));
			bot.setBinaryValue(el.value);
			bot.setDirection(el.direction);
			bot.setCoordinates(); // Call setCoordinates after setDirection
			bot.setOperator(el.operation);
			addBot(bot);
			}) 
		}	
	}, [gameState]);

	return (
		<div className={styles.wrapper}>
			<OpaqueBackground>
				<UserSelection formId={1} 
					newBots={newBots}
					setNewBots={setNewBots} 
					setMatchFound={setMatchFound} 
					matchFound={matchFound} 
					/>
				<UserSelection formId={2} 
					newBots={newBots}
					setNewBots={setNewBots} 
					setMatchFound={setMatchFound} 
					matchFound={matchFound} 
					/>
				<Button 
				checkIsReady={checkIsReady} />
			</OpaqueBackground>
		</div>
	);
};

export default UserConfigPanel;
