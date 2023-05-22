import React from 'react';
import { render, screen } from '@testing-library/react';
import LeaderBoard from './LeaderBoard';

describe('LeaderBoard', () => {
  const mockBots = [
    {
      name: 'Bot1',
      wins: 11,
      losses: 0,
    },
    {
      name: 'Bot2',
      wins: 17,
      losses: 5,
    },
    {
      name: 'Bot3',
      wins: 1,
      losses: 10,
    },
  ];

  test('renders the LeaderBoard component with correct headings', () => {
    render(<LeaderBoard bots={mockBots} />);

    // Assert that the "Leaders" heading is rendered
    const leadersHeading = screen.getByRole('heading', { level: 2, name: /leaders/i });
    expect(leadersHeading).toBeInTheDocument();

    // Assert that the column headings are rendered
    const userHeading = screen.getByRole('heading', { level: 3, name: /user/i });
    const winsHeading = screen.getByRole('heading', { level: 3, name: /wins/i });
    const lossesHeading = screen.getByRole('heading', { level: 3, name: /losses/i });

    expect(userHeading).toBeInTheDocument();
    expect(winsHeading).toBeInTheDocument();
    expect(lossesHeading).toBeInTheDocument();
  });

  test('renders the BotStatistics component with the correct number of bots', () => {
    render(<LeaderBoard bots={mockBots} />);

    // Assert that the BotStatistics component is rendered
    const botStatisticsComponent = screen.getByTestId('bot-statistics');
    expect(botStatisticsComponent).toBeInTheDocument();

    // Assert that the correct number of bots are rendered within the BotStatistics component
    const botItems = screen.getAllByTestId('bot-item');
    expect(botItems.length).toBe(mockBots.length);
  });
});
