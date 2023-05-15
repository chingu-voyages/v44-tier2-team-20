import React, { useState } from 'react';
import styles from './Slider.module.css';
<<<<<<< HEAD
import './Slider.module.css';
=======
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")

const Slider = ({ label }) => {
	const [slider, setSlider] = useState({
		max: 100,
		min: 0,
		value: 50,
		label: label || '',
	});

	function handleSliderChange(event) {
		setSlider({
			...slider,
			value: event.target.value,
		});
	}

	return (
		<div className="range-slider">
			<p className={styles.label}>{slider.label}</p>
<<<<<<< HEAD
			<input type="range" min={slider.min} max={slider.max} value={slider.value} onChange={handleSliderChange} />
=======
			<input type="range" min={slider.min} max={slider.max} value={slider.value} onChange={handleSliderChange} className={styles} />
>>>>>>> 6ed13e1 (Revert "Revert "added dropdown arrow img to public folder || Created Input, Slide, & …"")
		</div>
	);
};

export default Slider;
