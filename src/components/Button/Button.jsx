import React, { useState } from 'react';
import styles from './Button.module.css';

const Button = ({ text, changedText, onClick, width, height, fontSize }) => {
	const [buttonText, setButtonText] = useState(text ? text : 'Button');

	function handleClick() {
		// Adding in outside functionality to the button
		if (onClick) {
			onClick();
		}
		// Adding in internal functionality to the button
		if (buttonText === text) {
			setButtonText(changedText ? changedText : text);
		} else {
			setButtonText(text ? text : 'Button');
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
