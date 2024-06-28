import './App.css'
import './index.css'
import {useState} from "react";
import confetti from "canvas-confetti"

import {Square} from "./components/Square.jsx";
import {TURNS} from "./constants.jsx";
import {WinnerModal} from "./components/WinnerModal.jsx";
import {checkEndGame, checkWinner} from "./core/checkersBoard.jsx";

function App() {
    const [board, setBoard] = useState(()=>{
        const boardFromStorage = window.localStorage.getItem("board")
        return boardFromStorage ? JSON.parse(boardFromStorage)  : Array(9).fill(null);
    });

    const [turn, setTurn] = useState(()=>{
        const turnFromStorage = window.localStorage.getItem("turn");
        return turnFromStorage ? JSON.parse(turnFromStorage)  : TURNS.X;
    });

    // null no hay ganador, false es que hay un empate
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        window.localStorage.clear();
    }

    const updateBoard = (index) => {
        if (board[index] || winner) return;


        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        //Se hace una copiar del array porque las props son inmutables, es decir, no manipularlas
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', JSON.stringify(newTurn))

        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }

    }

    return (
        <main className="board">
            <h1> Tic Tac Toe </h1>
            <button onClick={resetGame}> Resetear juego</button>
            <section className="game">
                {
                    board.map((i, index) => (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {i}
                        </Square>
                    ))
                }
            </section>

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
        </main>
    )
}

export default App
