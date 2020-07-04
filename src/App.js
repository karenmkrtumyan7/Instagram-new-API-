import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import { InstagramGraphAPI} from './services/InstagramGraphAPI';
import { AuthRoutes } from "./routes/auth.routes";
import  Cookies from "js-cookie";
import { useHistory } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBarContainer';

function App() {
  const InstagramGraph = useMemo(() => new InstagramGraphAPI(), []);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const access_token = Cookies.get('access_token');
    if (access_token) {
      InstagramGraph.GetUser(access_token) 
        .then((date) => { 
            setUser(date);
            history.replace(`/${date.username}`); 
        })
        .catch(() => {
            Cookies.remove('access_token');
            Cookies.remove('user_id');
            setUser(null);
        })      
    }
  }, [InstagramGraph, history]);

  return (
    <div className="App">
      <NavBar setUser = { setUser }/>
      <AuthRoutes { ...user } setUser = { setUser }/>
    </div>
  );
}

export default App;
