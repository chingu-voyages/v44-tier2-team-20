import React, { useState, useContext, useEffect } from 'react';
import styles from './UserSelection.module.css';
import Input from '../Input/Input';
import Slider from '../Slider/Slider';
import Dropdown from '../Dropdown/Dropdown';
import { GameContext } from '../../context/GameContext/GameContext';
import Bot from '../../context/GameContext/Bot';
const UserSelection = ({ formId }) => {
	const { addBot } = useContext(GameContext);
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
			const bot = new Bot(name, `bot-${formId}`, operation, speed, direction, formId);
			addBot(bot);
		}
	}, [isFormComplete]);

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
					<Dropdown label="Operation" options={['AND', 'OR', 'NOR', 'NOT']} value={operation} onChange={setOperation} />
				</div>
			</div>
		</div>
	);
};

export default UserSelection;
