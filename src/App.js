import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux' // 引入connect
import { withRouter } from 'react-router-dom'
import './App.less';

import Login from './components/login/index'
import Container from './components/container'
import AuthorizedRoute from './components/authorized'
import { routes } from './routes'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    render() {
        const { session, location } = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <AuthorizedRoute path="/" session={session}>
                        <Container routes={routes} location={location} />
                    </AuthorizedRoute>
                    <Route path="*" render={
                        () => {
                            return (
                                <div>
                                    404
                                </div>
                            )
                        }
                    }/>
                </Switch>
            </Router>
        )
    }
}

const data = state => {
    return {
        // permission: state.global.permission,
        session: state.global.session,
        // menuList: state.global.menuList
    }
}

export default withRouter(connect(
    data,
    // { actionTest }
    null
)(App))




