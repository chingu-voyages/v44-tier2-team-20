import React from 'react';
import styles from './Dropdown.module.css';

const defaultOptions = ['Option 1', 'Option 2', 'Option 3'];

const Dropdown = ({ label, options = defaultOptions }) => {
	return (
		<div class={styles.dropdown}>
			<div className={styles.downArrow}>
				<button class={styles.dropbtn}>
					{label}
					<img className={styles.image} src="./DownArrow.png" />
				</button>
			</div>
			<div class={styles.dropdownContent}>
				{options.map((option) => {
					return <a href="#">{option}</a>;
				})}
			</div>
		</div>
	);
};

export default Dropdown;
