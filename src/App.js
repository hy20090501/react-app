import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux' // 引入connect
import { withRouter } from 'react-router-dom'
import { isLogin } from './utils/auth'
import './App.less';

import Login from './components/login/index'
import Container from './components/container'
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
                    <WrappedRoute path="/app" session={session}>
                        <Container routes={routes} location={location} />
                    </WrappedRoute>
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

function WrappedRoute({ children, ...rest }) {
    let { session } = rest;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogin(session) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


