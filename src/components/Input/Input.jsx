import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, className }) => {
	return (
		<div>
			<label htmlFor="input" className={styles.label} style={className}>
				{label}
			</label>

			<input className={styles.input} name="input" type="text" />
		</div>
	);
};

export default Input;
