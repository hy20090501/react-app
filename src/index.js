import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
if(process.env.NODE_ENV === 'development') {
    require('./mock')
}
const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
            <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
                <> { /* your usual react-router v4/v5 routing */ }
                    <App/>
                </>
            </ConnectedRouter>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
