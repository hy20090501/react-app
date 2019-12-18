import React from 'react'
import {
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import { RouteWithSubRoutes } from '../routes'

export function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

class Topics extends React.Component {
    render() {
        let { routes, permission } = this.props;
        // let match = useRouteMatch();
        let match = this.props.match;

        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/topic1`}>topic1</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/topic2`}>
                            topic2
                        </Link>
                    </li>
                </ul>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} permission={permission}/>
                    ))}
                    <Route path={match.path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Topics;
