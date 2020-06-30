export class InstagramAPI {
    constructor() {
        this.baseURL = 'https://api.instagram.com';
        this.appID = '3961666737240428';
        this.client_secret = '462ffd5d9d16bd3e2f0c3e43fa79c21a';
        this.redirectURI = 'https://karenmkrtumyan.herokuapp.com/sign-in'
    }

    AuthorizeUserLink() {
        return `${this.baseURL}/oauth/authorize?client_id=${this.appID}&redirect_uri=${this.redirectURI}&scope=user_profile,user_media&response_type=code`
    }

    GetAccessToken(code) {
        const hashTagIndex = code.lastIndexOf('#');
        // const requestCode = code.substring(0, hashTagIndex);
        console.log(this.appID, this.client_secret, this.redirectURI, code);

        return fetch(`${this.baseURL}/oauth/access_token`, {
                method: "POST",
                body: JSON.stringify({
                    client_id: this.appID,
                    client_secret: this.client_secret,
                    grant_type:'authorization_code',
                    redirect_uri: this.redirectURI,
                    code: code,
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
        }
}
