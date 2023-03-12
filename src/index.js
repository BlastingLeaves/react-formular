import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import {Provider} from 'react-redux';
import Layout from "./components/Layout/Page";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout>
                <App/>
            </Layout>
        </Router>
    </Provider>,
    document.getElementById('root'));

