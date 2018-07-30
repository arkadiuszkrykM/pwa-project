import React from 'react';
import styles from './Movie.scss';

const Movie = (props) => {
    const { movie: { title, poster_path, name } } = props;
    return (
        <li className={styles.list}>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} width="120" height="170" /><br />
            {title || name}
        </li>
    );
};

export default Movie;
