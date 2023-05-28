import React from 'react';
import Input from '../Input/Input';
import Slider from '../Slider/Slider';
import Dropdown from '../Dropdown/Dropdown';
import styles from './UserConfigBox.module.css';

const UserConfigPanel = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div>
					<Input label="Name" />
					<Slider label="Speed" />
				</div>
				<div className={styles.dropdownContainer}>
					<Dropdown label="Value" />
					<Dropdown label="Direction" />
					<Dropdown label="Operation" />
				</div>
			</div>
		</div>
	);
};

export default UserConfigPanel;
