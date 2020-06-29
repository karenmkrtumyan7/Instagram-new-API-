import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { InstagramAPI } from './services/InstagramBasicDisplayAPI';
import { AuthRoutes } from "./routes/auth.routes";


function App() {
  const Instagram = new InstagramAPI();
  return (
    <div className="App">
      <AuthRoutes />
    </div>
  );
}

export default App;
