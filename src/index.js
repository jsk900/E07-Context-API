import React from 'react';
import ReactDOM from 'react-dom';
import MyProvider from './context/MyProvider';
import App from './App';

ReactDOM.render(
    <MyProvider><App /></MyProvider>
   , document.querySelector('#root')
);


