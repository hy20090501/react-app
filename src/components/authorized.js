import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

import { isLogin } from "../utils/auth";

export default function AuthorizedRoute({ children, ...rest }) {
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