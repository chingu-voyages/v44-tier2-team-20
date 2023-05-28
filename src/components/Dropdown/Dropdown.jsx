import React from 'react';
import styles from './Dropdown.module.css';

const defaultOptions = ['Option 1', 'Option 2', 'Option 3'];

const Dropdown = ({ label, options = defaultOptions }) => {
	return (
		<div className={styles.dropdown}>
			<div className={styles.downArrow}>
				<button className={styles.dropbtn}>
					{label}
					<img className={styles.image} src="./DownArrow.png" />
				</button>
			</div>
			<div className={styles.dropdownContent}>
				{options.map((option, i) => {
					return (
						<a key={i} href="#">
							{option}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Dropdown;
