import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import styles from './Button.module.css';

const Button = ({ onClick, width, height, fontSize }) => {
	const { gameState, setGameState } = useContext(GameContext);
	const [buttonText, setButtonText] = useState('Button');

	useEffect(() => {
		if (!gameState) {
			setButtonText('Battle!');
		} else {
			setButtonText('STOP');
		}
	}, [gameState]);

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
				{buttonText}
			</p>
		</div>
	);
};

export default Button;
