import React, { useState } from 'react';
import styles from './Slider.module.css';

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
			<input type="range" min={slider.min} max={slider.max} value={slider.value} onChange={handleSliderChange} className={styles} />
		</div>
	);
};

export default Slider;
