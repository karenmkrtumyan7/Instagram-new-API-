import React from 'react';
import { InstagramBasicAPI } from '../../services/InstagramBasicDisplayAPI';
import { signInButtonStyles } from './style';

export function SignInButton() {
    const InstagramBasic = new InstagramBasicAPI();
    const { signInUrl } = signInButtonStyles();
    
    return (
            <a href={ InstagramBasic.AuthorizeUserLink() }
                className={ signInUrl }>
                Մուտք
            </a>
    )
}
