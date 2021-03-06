import React from 'react';
import './app.scss'
import Routes from './Routes';
import './core/assets/styles/custom.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Routes />
        </>
    );
}

export default App;