import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
	return (
		<div className={styles.container} onClick={onClick}>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Button;
