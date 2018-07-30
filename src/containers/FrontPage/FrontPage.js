import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMostPopular } from '../../store/actions/Fetch_MostPopular';
import { fetchUpcoming } from '../../store/actions/Fetch_Upcoming';
import { fetchPopularPeople } from '../../store/actions/Fetch_PopularPeople';
import { fetchMostPopularTvShows } from '../../store/actions/Fetch_MostPopularTvShows';
import { fetchCurrentTvShows } from '../../store/actions/Fetch_CurrentTvShows';
import DataBox from '../../components/DataBox/DataBox';
import FeaturedActors from '../../components/FeaturedActors/FeaturedActors';
import RankingWidget from '../../components/RankingWidget/RankingWidget';
import ReleaseDatesWidget from '../../components/ReleaseDatesWidget/ReleaseDatesWidget';
import styles from './FrontPage.scss';
// import requireAuthentication from '../HOCs/requireAuthentication';

class FrontPage extends Component {
// TODO: ADD LOGIN/REGISTER REDUX FORM, AND SHOW COMPONENTS BASED ON LOGIN STATE
    componentDidMount() {
        this.props.fetchMostPopular();
        this.props.fetchUpcoming();
        this.props.fetchPopularPeople();
        this.props.fetchMostPopularTvShows();
        this.props.fetchCurrentTvShows();
    }

    checkScroll() {
        // const el = document.querySelector('.data-box');
    }

    render() {
        const { mostPopular, upcoming, popularPeople, popularTvShows, currentTvShows } = this.props;
        return (
            <React.Fragment>
                <section className={styles.container}>
                    <div className={styles.boxes}>
                        <div className={styles.movies}>
                            <div>
                                POPULAR:<br />
                                <DataBox data={mostPopular} >
                                    <RankingWidget />
                                </DataBox>
                            </div>
                            <div>
                                NOW PLAYING:<br />
                                <DataBox data={upcoming}>
                                    <ReleaseDatesWidget />
                                </DataBox>
                            </div>
                        </div>
                        <div className={styles.movies}>
                            <div >
                                The list of most popular tv shows:<br />
                                <DataBox data={popularTvShows} type="tv" />
                            </div>
                            <div>
                                The list of tv shows on air:<br />
                                <DataBox data={currentTvShows} type="tv" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.featured}>
                        Featured actors data here
                        <FeaturedActors data={popularPeople} />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    mostPopular: state.mostPopular,
    upcoming: state.upcoming,
    popularPeople: state.popularPeople,
    popularTvShows: state.popularTvShows,
    currentTvShows: state.currentTvShows
});

const mapDispatchToProps = {
    fetchMostPopular,
    fetchUpcoming,
    fetchPopularPeople,
    fetchMostPopularTvShows,
    fetchCurrentTvShows
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
