import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import LoginForm from './loginForm'
import { login } from '../../api'
import { setSession } from '../../actions/common'

class Login extends React.Component {
    handleSubmit = e => {
        login(e).then(data=>{
            this.props.setSession(data);
            this.props.history.push('/app/home');
        });
    }

    render() {
        return (
            <LoginForm handleSubmit={this.handleSubmit}/>
        );
    }
}

export default withRouter(connect(null, { setSession })(Login));
