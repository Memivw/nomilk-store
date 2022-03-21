import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@material-ui/styles';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation';
import AuthenticatedRoute from './routes/AuthenticatedRoute';

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter basename={'/'}>
          <AuthenticatedRoute />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
