import React from 'react';
import { render, renderHook, act } from '@testing-library/react';
import { GameContext, GameProvider, useContext } from './GameContext.js';

const renderWithContext = (component) => {
  return render(
    <GameProvider>
      {component}
    </GameProvider>
  );
};

describe('GameProvider', () => {
  test('renders children components', () => {
    const { getByText } = renderWithContext(<div>Test Child</div>);
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  test('initial game settings state is set correctly', () => {
    const { result } = renderHook(() => useContext(GameContext));
    expect(result.current.gameSettings.speed).toBe(0);
    expect(result.current.gameSettings.operator).toBeNull();
  });

  test('setGameSettings updates the game settings state correctly', () => {
    const { result } = renderHook(() => useContext(GameContext));
    act(() => {
      result.current.setGameSettings({ speed: 10, operator: '+' });
    });
    expect(result.current.gameSettings.speed).toBe(10);
    expect(result.current.gameSettings.operator).toBe('+');
  });
});

describe('GameProvider Bots Operations', () => {
  test('addBot adds a new bot to the bots state', () => {
    const { result } = renderHook(() => useContext(GameContext));
    const botData = {
      name: 'Bot1',
      image: 'bot1.png',
      binaryValue: '0',
      direction: 'North'
    };
    act(() => {
      result.current.addBot(botData);
    });
    expect(result.current.bots).toHaveLength(1);
  
    const addedBot = result.current.bots[0];
    expect(addedBot.name).toBe('Bot1');
    expect(addedBot.image).toBe('bot1.png');
    expect(addedBot.binaryValue).toBe('0');
    expect(addedBot.direction).toBe('North');
  });

  test('removeBot removes the specified bot from the bots state', () => {
    const { result } = renderHook(() => useContext(GameContext));
    const botData = {
      name: 'Bot1',
      image: 'bot1.png',
      binaryValue: '1',
      direction: 'North'
    };
    act(() => {
      result.current.addBot(botData);
      result.current.removeBot(result.current.bots[0].id);
    });
    expect(result.current.bots).toHaveLength(0);
  });

  test('updateBotStats updates the win/loss count of the specified bot', () => {
    const { result } = renderHook(() => useContext(GameContext));
    const botData = {
      name: 'Bot1',
      image: 'bot1.png',
      binaryValue: '1',
      direction: 'North'
    };
    act(() => {
      result.current.addBot(botData);
      result.current.updateBotStats(result.current.bots[0].id, true);
    });
    expect(result.current.bots[0].getWinCount()).toBe(1);
  }); 

});