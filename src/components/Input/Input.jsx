import React, { useState, useContext, useEffect } from 'react';
import styles from './Input.module.css';
import { GameContext } from '../../context/GameContext/GameContext';

const Input = ({ label, value, onChange }) => {
	const { bots } = useContext(GameContext);
	const [matchFound, setMatchFound] = useState(false);

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

			<p>{matchFound ? 'This name is already taken, please choose another.' : null}</p>
		</div>
	);
};

export default Input;
