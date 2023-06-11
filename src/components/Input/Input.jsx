import React, { useState, useContext, useEffect } from 'react';
import styles from './Input.module.css';
import { GameContext } from '../../context/GameContext/GameContext';

const Input = ({ label, value, onChange, setMatchFound }) => {
	const { bots } = useContext(GameContext);
	

	const handleInputChange = (event) => {
		onChange(event.target.value);
	};

	useEffect(() => {
		const botNames = bots.map((bot) => bot.name);
		const nameCount = botNames.filter((botName) => botName === value).length;
		setMatchFound(nameCount > 1);
	}, [value, bots]);

	return (
		<div>
			<label htmlFor="input" className={styles.label}>
				{label}
			</label>
			<input className={styles.input} name="input" type="text" value={value} onChange={handleInputChange} required />
		</div>
	);
};

export default Input;
