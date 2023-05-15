import React from 'react';
import styles from './Dropdown.module.css';

const defaultOptions = ['Option 1', 'Option 2', 'Option 3'];

const Dropdown = ({ label, options = defaultOptions }) => {
	return (
<<<<<<< HEAD
		<div className={styles.dropdown}>
			<div className={styles.downArrow}>
				<button className={styles.dropbtn}>
=======
		<div class={styles.dropdown}>
			<div className={styles.downArrow}>
				<button class={styles.dropbtn}>
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")
					{label}
					<img className={styles.image} src="./DownArrow.png" />
				</button>
			</div>
<<<<<<< HEAD
			<div className={styles.dropdownContent}>
				{options.map((option, i) => {
					return (
						<a key={i} href="#">
							{option}
						</a>
					);
=======
			<div class={styles.dropdownContent}>
				{options.map((option) => {
					return <a href="#">{option}</a>;
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")
				})}
			</div>
		</div>
	);
};

export default Dropdown;
