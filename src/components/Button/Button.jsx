import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, width, height, fontSize }) => {
	return (
		<div className={styles.container} style={{ width, height }} onClick={onClick}>
			<p className={styles.text} style={{ fontSize }}>
				{text}
			</p>
		</div>
	);
};

export default Button;
