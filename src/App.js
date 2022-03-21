import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@material-ui/styles';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation';

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter basename={'/'}>
          {/* <Route path={'/'} exact component={LoadingScene} /> */}
          <Navigation />
        </BrowserRouter>
      </div>
    </ThemeProvider>
    // <div>
    //   <h1>Hello StackBlitz!</h1>
    //   <p>Start editing to see some magic happening :)</p>
    // </div>
  );
}
