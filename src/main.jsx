var React = require('react');
var ReactDOM = require('react-dom');
var Manager = require('./components/Manager.jsx');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGnEJFB5sQxCIeXHmB_26vFZyiUSU-614",
    authDomain: "cognomics-b7eee.firebaseapp.com",
    databaseURL: "https://cognomics-b7eee.firebaseio.com",
    storageBucket: "cognomics-b7eee.appspot.com",
};
firebase.initializeApp(config);

// Load components
ReactDOM.render(<Manager />, document.getElementById('content'));

// Load components
//ReactDOM.render(<Table child={'players'} cols={data} pollInterval={2000} />, document.getElementById('table'));
//ReactDOM.render(<Table child={'rules'} cols={ruleHeader} pollInterval={2000} />, document.getElementById('rule-table'));
//ReactDOM.render(<Table child={'state'} cols={stateHeader} pollInterval={2000} />, document.getElementById('state-table'));
//ReactDOM.render(<ActionButtons />, document.getElementById('action-btns'));
