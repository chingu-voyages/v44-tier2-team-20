import React from 'react';
<<<<<<< HEAD

import Button from '../Button/Button';
import OpaqueBackground from '../OpaqueBackground/OpaqueBackground';
import UserSelection from '../UserSelection/UserSelection';
const UserConfigBox = () => {
	return (
		<div>
			<OpaqueBackground>
				<Button text="Add Player +" height="45px" width="250px" fontSize="20px" onClick={() => console.log('Clicked')} />
				<UserSelection />

				<Button text="Battle!" changedText="STOP" width="370px" onClick={() => console.log('Clicked')} />
			</OpaqueBackground>
=======
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
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")
		</div>
	);
};

<<<<<<< HEAD
export default UserConfigBox;
=======
export default UserConfigPanel;
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")
