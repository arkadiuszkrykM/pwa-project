import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchSearch } from '../../store/actions/Fetch_SearchData';

class DatabaseSearch extends Component {
    constructor(props) {
        super(props);
        this.query = _.debounce(() => this.props.fetchSearch(this.props.data), 2000);
    }

    componentDidUpdate() {
        this.query();
        setTimeout(() => {
            this.query.cancel();
        }, 4000);
    }

    render() {
        const { searchData } = this.props;
        const listData = searchData.map(({ title, vote_average }) => (
            <li key={title}>
                {title}, {vote_average === 0 ? 'No info' : vote_average}
            </li>
        ));
        return (
            <div>
                <ul>
                    {listData.length === 0 ? 'NO DATA' : listData}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    searchData: state.searchData
});

const mapDispatchToProps = {
    fetchSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseSearch);
