import { checkResponseOk } from '../helpers/checkResponseOk';
import { InstagramGraphAPI } from './InstagramGraphAPI';

export class InstagramBasicAPI extends InstagramGraphAPI {
    constructor() {
        super();
        this.baseURL = 'https://api.instagram.com';
        this.appID = '3961666737240428';
        this.client_secret = '462ffd5d9d16bd3e2f0c3e43fa79c21a';
        this.redirectURI = 'https://karenmkrtumyan.herokuapp.com/sign-in';
    }

    AuthorizeUserLink() {
        return `${this.baseURL}/oauth/authorize?client_id=${this.appID}&redirect_uri=${this.redirectURI}&scope=user_profile,user_media&response_type=code`;
    }

    GetShortLiveAccessToken(code) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            
            const urlencoded = new URLSearchParams();
            urlencoded.append("client_id", this.appID);
            urlencoded.append("client_secret", this.client_secret);
            urlencoded.append("grant_type", "authorization_code");
            urlencoded.append("redirect_uri", this.redirectURI);
            urlencoded.append("code", code);
            
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
            };
            
            return fetch("https://api.instagram.com/oauth/access_token", requestOptions)
                    .then(checkResponseOk);
    }

    GetAccessToken(code) {
       return this.GetShortLiveAccessToken(code)
                .then(({ access_token, user_id }) => {
                    return this.GetLongLiveAccessToken(access_token)
                            .then(date => { 
                                date['user_id'] = user_id;
                                return date;
                            });
                })
    }

    GetPost(postUrl) {
        return fetch(`${this.baseURL}/oembed?url=${postUrl}`)
                .then(checkResponseOk);
    }

    GetPosts(postsUrlArray) {
        return Promise.all( postsUrlArray.map(postUrl => this.GetPost(postUrl)) );
    }
}
