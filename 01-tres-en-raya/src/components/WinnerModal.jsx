import {Square} from "./Square.jsx";
import PropTypes from 'prop-types';

export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null
    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {
                        winner === false ?
                            'Empate' : 'Ganó: ' + winner
                    }
                </h2>
                {
                    winner &&
                    <header className="win">
                        <Square>{winner}</Square>
                    </header>
                }
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}

WinnerModal.propTypes = {
    winner: PropTypes.oneOfType([
        PropTypes.bool,
    ]).isRequired,
    resetGame: PropTypes.func.isRequired
};