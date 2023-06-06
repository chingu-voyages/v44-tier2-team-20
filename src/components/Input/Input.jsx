import React, { useState, useContext, useEffect } from 'react';
import styles from './Input.module.css';
import { GameContext } from '../../context/GameContext/GameContext';


const Input = ({ label, className }) => {
	const { bots } = useContext(GameContext);
    const [inputValue, setInputValue] = useState('');
    const [matchFound, setMatchFound] = useState(false)

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
			<label htmlFor="input" className={styles.label}>
				{label}
			</label>

			<input className={styles.input} name="input" type="text"
            value={inputValue} onChange={handleInputChange} required/>
            
            <p>{matchFound ? 'choose another name' : null}</p>

		</div>
	);
};

export default Input;
