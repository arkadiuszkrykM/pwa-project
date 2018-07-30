import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../constants/APIKEY';

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
        this.baseURL = 'https://api.themoviedb.org/3/';
        this.movieURL = `${this.baseURL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.tvURL = `${this.baseURL}tv/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    }

    componentDidMount() {
        const { location: { state } } = this.props;
        let url = '';
        url = state === undefined ? this.movieURL : this.tvURL;
        axios.get(url)
            .then((response) => {
                this.setState({
                    data: response.data
                });
            });
    }


    render() {
        const { poster_path, title, overview, original_name } = this.state.data;
        return (
            <div>
                {!title ? original_name : title}<br />
                {overview}<br />
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} width="250" height="370" /><br />
            </div>
        );
    }
}

export default MoviePage;
