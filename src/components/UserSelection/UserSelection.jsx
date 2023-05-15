import React from 'react';
import styles from './UserSelection.module.css';
import Input from '../Input/Input';
import Slider from '../Slider/Slider';
import Dropdown from '../Dropdown/Dropdown';

const UserSelection = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div>
					<Input label="Name" />
					<Slider label="Speed" />
				</div>
				<div className={styles.dropdownContainer}>
					<Dropdown label="Value" options={[0, 1]} />
					<Dropdown label="Direction" options={['North', 'South', 'East', 'West']} />
					<Dropdown label="Operation" options={['AND', 'OR', 'NOR', 'NOT']} />
				</div>
			</div>
		</div>
	);
};

export default UserSelection;
