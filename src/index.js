import React from 'react';
import ReactDOM from 'react-dom';
import './asset/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App text="Button"/>, document.getElementById('root'));
registerServiceWorker();
