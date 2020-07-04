import React, { useEffect, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { InstagramBasicAPI } from '../services/InstagramBasicDisplayAPI';
import { InstagramGraphAPI} from '../services/InstagramGraphAPI';
import { useLocation, useHistory } from "react-router-dom";
import { queryToObject } from '../helpers/linkQueryToObject';
import  Cookies from "js-cookie";

export function HomePage({ setUser }) {
  const InstagramBasic = useMemo(() => new InstagramBasicAPI(), []);
  const InstagramGraph = useMemo(() => new InstagramGraphAPI(), []);
  const query = useLocation();
  const history = useHistory();

  useEffect(() => {
    const code = queryToObject(query)?.code;

    if (code) {
      InstagramBasic.GetAccessToken(code)
            .then(date => {
                const cookieExpires = date['expires_in'] / 86400; 
                Cookies.set('access_token', date['access_token'], cookieExpires);
                Cookies.set('user_id', date['user_id'], cookieExpires);
                return date;
            })
            .then(({ access_token }) => InstagramGraph.GetUser(access_token))
            .then((date) => { 
                setUser(date);
                history.replace(`/${date.username}`); 
            })
            .catch(() => {
                setUser(null);
                alert("try later");
            })
    } 
   }, [query, InstagramBasic, InstagramGraph, history, setUser]);

  return (
    <div className="App">
      <Button>
        <a href={ InstagramBasic.AuthorizeUserLink() }>
          Sign In
        </a>
      </Button>
    </div>
  );
}
