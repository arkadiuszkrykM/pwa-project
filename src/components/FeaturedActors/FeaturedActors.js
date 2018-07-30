import React from 'react';
import styles from './FeaturedActors.scss';

const FeaturedActors = ({ data }) => {
    const list = data.map(({ id, name, profile_path }) => (
        <li key={id} className={styles.list}>
            {name}<br />
            <img src={`https://image.tmdb.org/t/p/original${profile_path}`} width="120" height="170" alt={name} />
        </li>
    ));

    return (
        <div>
            <ul className={styles.actors}>
                {list}
            </ul>
        </div>
    );
};

export default FeaturedActors;
