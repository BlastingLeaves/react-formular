import React from 'react'
import {
    Route, Switch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import Page404 from "./pages/ErrorPage/Page404";
import './App.css'
import './utils/utility-classes.css'


function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/people" component={PeoplePage}/>
                <Route path="*" component={Page404}/>
            </Switch>
        </div>
    )
}

export default App