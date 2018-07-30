import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './ReleaseDatesWidget.scss';

const ReleaseDatesWidget = ({ handleSelectDate, dates }) => {
    const getValue = (value, obj) => {
        switch (value) {
            case 0:
                handleSelectDate(obj[0]);
                break;
            case 25:
                handleSelectDate(obj[25]);
                break;
            case 50:
                handleSelectDate(obj[50]);
                break;
            case 75:
                handleSelectDate(obj[75]);
                break;
            case 100:
                handleSelectDate(obj[100]);
                break;
            default:
                return false;
        }
    };

    const obj = {
        0: `${dates[0]}`,
        25: `${dates[1]}`,
        50: `${dates[2]}`,
        75: `${dates[3]}`,
        100: `${dates[4]}`
    };
    return (
        <React.Fragment>
        Release dates:
            <div className={styles.slider}>
                <Slider
                    marks={obj}
                    step={null}
                    defaultValue={0}
                    onChange={value => getValue(value, obj)}
                />
            </div>
        </React.Fragment>
    );
};

export default ReleaseDatesWidget;
