import React from 'react';
import { signInButtonStyles } from '../SignInButton/style';
import { Typography } from '@material-ui/core';
import  Cookies from "js-cookie";

export function SignOutButton({ setUser }) {
    const { signInUrl } = signInButtonStyles();
    const signOut = () => {
        Cookies.remove('access_token');
        Cookies.remove('user_id');
        setUser(null);
    }
    
    return (
            <Typography
                className={ signInUrl }
                onClick={ signOut }>
                Դուրս գալ
            </Typography>
    )
}