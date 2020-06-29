import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { InstagramAPI } from '../services/InstagramBasicDisplayAPI';
import { useLocation } from "react-router-dom";
import { queryToObject } from '../helpers/linkQueryToObject';
import { checkResponseOk } from '../helpers/checkResponseOk';
import  Cookies from "js-cookie";

export function HomePage() {
  const Instagram = new InstagramAPI();
  const query = useLocation();

  useEffect(() => {
    const { code } = queryToObject(query);

    if (code) {
        Instagram.GetAccessToken(code)
            .then(checkResponseOk)
            .then(data => {
                Cookies.set('acess_token', data['acess_token'], { expires: 1 / 24 });
                Cookies.set('user_id', data['user_id'], { expires: 1 / 24 });
                console.log(true);
            })
            .catch(() => {
                Cookies.remove('acess_token');
                Cookies.remove('user_id');
                console.log(false);
            })
    }
   }, [queryToObject]);

  return (
    <div className="App">
      <Button>
        <a href={ Instagram.AuthorizeUserLink() }>
          Sign In
        </a>
      </Button>
    </div>
  );
}
