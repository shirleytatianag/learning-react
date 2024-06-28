import {WINNINGS_COMBINATIONS} from "../constants.jsx";

export const  checkWinner = (boardToCheck) => {
    for (const newBoardElement of WINNINGS_COMBINATIONS) {
        const [a, b, c] = newBoardElement;
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    return null;
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(square => square !== null);
}