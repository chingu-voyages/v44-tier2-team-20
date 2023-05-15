import React from 'react'
import styles from './Board.module.css'

const Board = () => {
    const renderSquare = (i) => {
        return <Square />;
    };

    return (
        <div className={styles.board} >
            {[...Array(8)].map((_, row) => {
                return (
                    <div key={row} className={styles.boardrow}>
                        {[...Array(8)].map((_, col) => {
                            const squareNum = row * 8 + col;
                            return <div key={squareNum}>{renderSquare(squareNum)}</div>;
                        })}
                    </div>
                );
            })}
        </div>
    );
};

const Square = () => {
    return <div className={styles.square}></div>;
};

export default Board

