import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import styles from './RankingWidget.scss';

const RankingWidget = ({ handleSelectVote, votes }) => {
    const getValue = (value, obj) => {
        switch (value) {
            case 0:
                handleSelectVote(obj[0]);
                break;
            case 25:
                handleSelectVote(obj[25]);
                break;
            case 50:
                handleSelectVote(obj[50]);
                break;
            case 75:
                handleSelectVote(obj[75]);
                break;
            case 100:
                handleSelectVote(obj[100]);
                break;
            default: return false;
        }
    };

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
        Popularity ranking
            <div className={styles.slider} onClick={handleSelectVote}>
                <Slider marks={obj} step={null} defaultValue={marks[0]} onChange={value => getValue(value, obj)} />
            </div>
        </React.Fragment>
    );
};

export default RankingWidget;
