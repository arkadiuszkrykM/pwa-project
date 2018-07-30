import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FrontPage from '../FrontPage/FrontPage';
import LoginPage from '../LoginPage/LoginPage';
import DatabaseSearch from '../DatabasePage/DatabasePage';
import MoviePage from '../MoviePage/MoviePage';
import { userAuth } from '../../store/actions/Login_Auth';
import styles from './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    // submit = values => this.props.userAuth();

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {
        return (
            <div>
                <div className={styles.navbar}>
                    <input type="text" placeholder="Search for movies/TV shows" onChange={this.handleSearch} />
                    <Link to="/">
                        <img
                            className="logo"
                            src="http://jiayuhk.com/sc/assets/img/sample/shortcode/logo/1.png"
                            width="200"
                            height="100"
                            alt="logo"
                        />
                    </Link>
                    <span><Link to="/login">Login/Register</Link></span>
                </div>
                {/* <Switch> */}
                {/* <Route exact path="/" render={()=> (
                        !this.props.auth ? (
                            <Redirect to="/login" />
                        ) : (
                            <Redirect to="/frontpage" />
                        )
                    )} /> */}

                <Route path="/" exact render={() => (
                    !this.state.search ? <FrontPage /> : <DatabaseSearch data={this.state.search} />)}
                />
                {/* <Route path="/database" component={DatabaseSearch} /> */}
                <Route path="/login" render={() => <LoginPage onSubmit={this.submit} /> } />
                <Route path="/:movieId" component={MoviePage} />
                {/* <Route path="/yo" render={()=><div>Yolo</div>} /> */}
                {/* </Switch> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    userAuth
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
