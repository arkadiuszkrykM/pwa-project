import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { Redirect, withRouter } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
// import PropTypes from 'prop-types';


export default (ComposedComponent) => {
    class RequireAuthentication extends Component {
        isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        render() {
            // const { auth: { login: { submitSucceeded }}} = this.props;
            console.log(this.props)
            if (this.isEmpty(this.props.auth)) {
                return <Redirect to={{
                    pathname: '/login'
                }} />;
            }
            return <ComposedComponent {...this.props} />;
        }
    }


    const mapStateToProps = state => ({
        auth: state.form
    });

    return connect(mapStateToProps)(RequireAuthentication);
};
