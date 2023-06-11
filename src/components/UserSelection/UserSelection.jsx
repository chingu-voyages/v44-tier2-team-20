import React, { useState, useEffect } from 'react';
import styles from './UserSelection.module.css';
import Input from '../Input/Input';
import Slider from '../Slider/Slider';
import Dropdown from '../Dropdown/Dropdown';

const UserSelection = ({ formId, setNewBots }) => {
	const [name, setName] = useState('');
	const [speed, setSpeed] = useState(50);
	const [value, setValue] = useState(null);
	const [direction, setDirection] = useState(null);
	const [operation, setOperation] = useState(null);
	const [isFormComplete, setIsFormComplete] = useState(false);


	useEffect(() => {
		if (name && speed && value !== null && direction && operation) {
			setIsFormComplete(true);
		} else {
			setIsFormComplete(false);
		}
	}, [name, speed, value, direction, operation]);

	useEffect(() => {
		if (isFormComplete) {
		const bot = {
				name: name,
				speed: speed,
				value: value,
				direction: direction,
				operation: operation,
				formId: formId,
		};

		setNewBots((prevBots) => {
				const updatedBots = prevBots.map((existingBot) => {
					if (existingBot.formId === bot.formId) {
					// Update the existing bot's properties
					return bot;
					}
			return existingBot; // Keep other bots as they are
			});
	
			if (updatedBots.some((existingBot) => existingBot.formId === bot.formId)) {
				 // Bot exists, update the state
			return updatedBots;
			} else {
			  // Bot doesn't exist, add it to the array
			return [...updatedBots, bot];
			}
		});
		}
	  }, [isFormComplete, speed, direction, operation, value, name]);	  

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div>
					<Input label="Name" value={name} onChange={setName} />
					<Slider label="Speed" value={speed} onChange={setSpeed} />
				</div>
				<div className={styles.dropdownContainer}>
					<Dropdown label="Value" options={[0, 1]} value={value} onChange={setValue} />
					<Dropdown label="Direction" options={['North', 'South', 'East', 'West']} value={direction} onChange={setDirection} />
					<Dropdown label="Operation" options={['AND', 'OR', 'NOR', 'XOR']} value={operation} onChange={setOperation} />
				</div>
			</div>
		</div>
	);
};

export default UserSelection;
