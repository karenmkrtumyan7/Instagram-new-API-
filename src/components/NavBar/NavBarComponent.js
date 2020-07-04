import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';
import { SignInButton } from '../SignInButton/SignInButton';
import { SignOutButton } from '../SignOut/SignOutButton';
import  Cookies from "js-cookie";

export function NavBarComponent({ setUser }) {
    console.log(setUser)
    const {
        navItem,
        nav,
    } = useStyles();
    const userId = Cookies.get('user_id');
    
    return (
            <Toolbar className={nav}>
                    <Typography className={navItem}>Գլխավոր</Typography>
                    <Typography className={navItem}>Բաժանորդներ</Typography>
                    { userId ? <SignOutButton setUser = { setUser } /> : <SignInButton /> }
            </Toolbar>
    )
}