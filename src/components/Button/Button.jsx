import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import styles from './Button.module.css';

const Button = ({ gameState, setGameState, onClick, width, height, fontSize }) => {
	

	function handleClick() {
		// Adding in internal functionality to the button
		setGameState(!gameState);
		if (onClick) {
			// Adding in outside functionality to the button
			onClick();
		}
	}
	return (
		<div className={styles.container} style={{ width, height }} onClick={handleClick}>
			<p className={styles.text} style={{ fontSize }}>
				{gameState ? 'STOP' : 'BATTLE!' }
			</p>
		</div>
	);
};

export default Button;
