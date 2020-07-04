import { checkResponseOk } from '../helpers/checkResponseOk';

export class InstagramGraphAPI {
    constructor() {
        this.baseURL = 'https://graph.instagram.com';
        this.exchange_token = 'ig_exchange_token';
    }

    GetUserProfile(access_token) {
        return fetch(`${this.baseURL}/me?fields=id,username,account_type,media_count&access_token=${access_token}`)
                .then(checkResponseOk);
    }

    GetUserMedia(access_token) {
        return fetch(`${this.baseURL}/me/media?fields=id,media_type,media_url,username,timestamp,permalink,caption&access_token=${access_token}`)
                .then(checkResponseOk);
    }       

    GetUser(access_token) {
        const Promises = Promise.all([this.GetUserProfile(access_token), this.GetUserMedia(access_token)]);
        
        return Promises
                .then(datеPromises => datеPromises.reduce((obj, item) => ({ ...obj, ...item }), {}))
    }

    GetLongLiveAccessToken(shortLivedToken) {
        return fetch(`https://graph.instagram.com/access_token?grant_type=${this.exchange_token}&client_secret=${this.client_secret}&access_token=${shortLivedToken}`)
                .then(checkResponseOk);
    }
}