import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';
import { widgetUserSelection } from '../../store/actions/Widget_UserSelection';
import styles from './DataBox.scss';


// import { renderField } from '../utils/validators';


class DataBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            votes: [],
            dates: [],
            selectedDate: '',
            selectedVote: ''
        };
    }


    // handleClickTwo = (e) => {
    //     const mappedProperties = { '1': 30, '2': 0, '3': 5, '4': 14 }
    //     let addDaysValue = 0;
    //     const addDays = (date, days) => new Date(date.getTime() + days*24*60*50*1000);
    //     for(let prop in mappedProperties) {
    //         e.target.dataset.id === prop ? addDaysValue = mappedProperties[prop] : null
    //     }

    //     const filteredData = this.props.data.filter(movie => {
    //         const date = new Date(movie.release_date.replace(/-/g, ' '));
    //         return date >= addDays(new Date(), addDaysValue);
    //     });
    //     this.setState({ data: [...filteredData] })

    //     // debugger;
    // }

    handleSelectVote = vote => this.setState({ selectedVote: vote });

    handleSelectDate = date => this.setState({ selectedDate: date });

    sortAverageVotes(arr, data) {
        const sortedData = data.sort((a, b) => b.vote_average - a.vote_average);
        arr.push(sortedData[0].vote_average, sortedData[5].vote_average, sortedData[10].vote_average,
            sortedData[15].vote_average, sortedData[19].vote_average);
    }

    sortReleaseDates(arr, data) {
        const sortedDates = data.sort((a, b) => {
            const firstDate = new Date(a.release_date.replace(/-/g, ' '));
            const secondDate = new Date(b.release_date.replace(/-/g, ' '));
            return firstDate > secondDate ? -1 : firstDate < secondDate ? 1 : 0;
        });
        arr.push(sortedDates[0].release_date, sortedDates[5].release_date, sortedDates[10].release_date,
            sortedDates[15].release_date, sortedDates[19].release_date);
    }

    render() {
        const { data } = this.props;
        const votesArr = [];
        const datesArr = [];
        if (data.length && this.props.children) {
            this.sortAverageVotes(votesArr, data);
            this.sortReleaseDates(datesArr, data);
        }
        const source = this.state.data.length ? this.state.data : data;
        const list = source.map(movie => (
            <Link
                key={movie.id}
                to={this.props.type ? { pathname: `/${movie.id}`, state: { type: 'tv' } } : `/${movie.id}`}>
                <Movie movie={movie} />
            </Link>
        ));
        if (!data.length) return (<div>Loading...</div>);
        return (
            <div className={styles.box}>
                {this.props.children && React.cloneElement(this.props.children,
                    {
                        handleSelectDate: this.props.widgetUserSelection.bind(this),
                        handleSelectVote: this.props.widgetUserSelection.bind(this),
                        votes: votesArr,
                        dates: datesArr
                    })}
                <ul className={styles.movie}>
                    {list}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userSelection: state.widgetsSelection
});

const mapDispatchToProps = {
    widgetUserSelection
};

export default connect(mapStateToProps, mapDispatchToProps)(DataBox);
