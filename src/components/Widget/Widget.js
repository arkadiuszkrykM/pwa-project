import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './Widget.scss';

const Widget = ({ handleClick, votes }) => {


    const obj = {
        0: `${votes[0]}`,
        25: `${votes[1]}`,
        50: `${votes[2]}`,
        75: `${votes[3]}`,
        100: `${votes[4]}`
    };
    const marks = Object.assign({}, votes);
    return (
        <React.Fragment>
        Pupluarity ranking
            <div className={styles.slider} onClick={handleClick}>
                <Slider marks={obj} step={null} defaultValue={marks[0]} />
            </div>
        </React.Fragment>
    );
};

export default Widget;
