import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { HomePage } from '../pages/HomePage';

export function AuthRoutes(loggedIn) {
    const history = useHistory();

    // useEffect(() => {
    //     if (loggedIn) {
    //       history.replace("/activation-alert");
    //     }
    // }, [loggedIn]);

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>    
            <Route path="/:id">
                <h1>/:id</h1>
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}