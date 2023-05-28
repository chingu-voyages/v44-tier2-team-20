import React from 'react';
import styles from './Input.module.css';

const Input = ({ label }) => {
	return (
		<div>
			<label htmlFor="input" className={styles.label}>
				{label}
			</label>

			<input className={styles.input} name="input" type="text" />
		</div>
	);
};

export default Input;
