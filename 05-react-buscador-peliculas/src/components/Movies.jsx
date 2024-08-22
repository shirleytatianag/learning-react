import PropTypes from 'prop-types';

function ListOfMovies({ movies }) {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={`Poster de la película ${movie.Title}`} />
                </li>
            ))}
        </ul>
    );
}

ListOfMovies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            tear: PropTypes.string.isRequired,
            poster: PropTypes.string.isRequired,
        })
    ).isRequired,
};

function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta búsqueda, intenta nuevamente con otro nombre.</p>
    );
}

export function Movies( {movies} ) {
    console.log(movies);

    const hasMovies = movies.length > 0;

    return(
        hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            poster: PropTypes.string.isRequired,
        })
    ).isRequired,
};