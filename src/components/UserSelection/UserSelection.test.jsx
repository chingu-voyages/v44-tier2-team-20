import React from 'react';
import { render, screen } from '@testing-library/react';
import UserSelection from './UserSelection';

describe('UserSelection', () => {
	test('renders UserSelection component with input, slider, and dropdowns', () => {
		render(<UserSelection />);

		// Assert the "Name" input is rendered
		const nameInput = screen.getByLabelText(/name/i);
		expect(nameInput).toBeInTheDocument();

		// Assert the "Speed" slider is rendered
		const speedSlider = screen.getByText(/speed/i);
		expect(speedSlider).toBeInTheDocument();

		// Assert the "Value" dropdown is rendered
		const valueDropdown = screen.getByText(/value/i);
		expect(valueDropdown).toBeInTheDocument();

		// Assert the "Direction" dropdown is rendered
		const directionDropdown = screen.getByText(/direction/i);
		expect(directionDropdown).toBeInTheDocument();

		// Assert the "Operation" dropdown is rendered
		const operationDropdown = screen.getByText(/operation/i);
		expect(operationDropdown).toBeInTheDocument();
	});
});
