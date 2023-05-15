import React from 'react';
import styles from './Input.module.css';

<<<<<<< HEAD
const Input = ({ label, className }) => {
	return (
		<div>
			<label htmlFor="input" className={styles.label} style={className ? className : {}}>
				{label}
			</label>

			<input className={styles.input} id="input" type="text" />
=======
const Input = ({ label }) => {
	return (
		<div>
			<label htmlFor="input" className={styles.label}>
				{label}
			</label>

			<input className={styles.input} name="input" type="text" />
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")
		</div>
	);
};

export default Input;
