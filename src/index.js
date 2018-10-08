import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ***** Init Bluebird config ***** //
import Bluebird from 'bluebird';
Bluebird.config({ cancellation: true });
// ******************************** //

ReactDOM.render(<App />, document.getElementById('root'));
