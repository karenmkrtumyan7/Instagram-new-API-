import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import  Cookies from "js-cookie";

export function AuthRoutes(props) {
    const userId = Cookies.get('user_id');
    
    return (
        <Switch>
            {!userId && (
             <Route exact path="/">
                <HomePage { ...props } />
              </Route> 
            )}
            {!!userId && (
             <Route exact path="/:id?">
                <ProfilePage { ...props } />
              </Route> 
            )}  
            <Redirect to="/" />
        </Switch>
    )
}