import React from 'react';
import styles from './Upcoming.scss';

const Upcoming = ({ data }) => (
    <div className={styles.box}>
        <ul className={styles.movies}>
            {data}
        </ul>
    </div>
);


export default Upcoming;
