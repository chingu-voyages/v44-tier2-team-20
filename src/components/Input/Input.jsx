import React, { useState, useContext, useEffect } from 'react';
import styles from './Input.module.css';
import { GameContext } from '../../context/GameContext/GameContext';

const Input = ({ label, className }) => {
	const { bots, addBot } = useContext(GameContext);
    const [inputValue, setInputValue] = useState('');
    const [matchFound, setMatchFound] = useState(false)

	// added bots to check if function works. to be removed later
	useEffect(() => {
		addBot({
		  name: 'James',
		  binaryValue: '0',
		  direction: 'North',
		  wins: 20,
		  losses: 22,
		});
		addBot({
		  name: 'Lil9',
		  binaryValue: '1',
		  direction: 'East',
		  wins: 45,
		  losses: 2,
		});
		addBot({
		  name: 'Ljknjhb',
		  binaryValue: '1',
		  direction: 'East',
		  wins: 45,
		  losses: 2,
		});
	  }, []);

    useEffect(() => {
		const botNames = bots.map((bot) => bot.name.toLowerCase());
		botNames.includes(inputValue.trim().toLowerCase()) ? 
		setMatchFound(true) : setMatchFound(false)
    }, [inputValue])

    useEffect(() => {
        console.log(matchFound)
    }, [matchFound])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

	return (
		<div>
			<label htmlFor="input" className={styles.label} style={className ? className : {}}>
				{label}
			</label>

			<input className={styles.input} name="input" type="text"
            value={inputValue} onChange={handleInputChange} required/>
            
            <p>{matchFound ? 'choose another name' : null}</p>

		</div>
	);
};

export default Input;
