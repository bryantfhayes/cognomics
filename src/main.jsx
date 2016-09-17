var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');
var Table = require('./components/Table.jsx');
var ActionButtons = require('./components/ActionButtons.jsx');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGnEJFB5sQxCIeXHmB_26vFZyiUSU-614",
    authDomain: "cognomics-b7eee.firebaseapp.com",
    databaseURL: "https://cognomics-b7eee.firebaseio.com",
    storageBucket: "cognomics-b7eee.appspot.com",
};
firebase.initializeApp(config);

// Static Data
var data = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'cogbank', label: 'Cogbank' },
    { key: 'cogbucks', label: 'Cogbucks' },
    { key: 'voteweight', label: 'Vote Weight' },
    { key: 'team', label: 'Team' },
    { key: 'title', label: 'Title' },
    { key: 'votestatus', label: 'Vote Status' }
];

// Static Data
var ruleHeader = [
    { key: 'rule-id', label: 'Rule ID' },
    { key: 'rule-description', label: 'Description' },
];

var stateHeader = [
    { key: 'rule-number', label: 'Next Rule ID' },
    { key: 'display-votes', label: 'Votes' },
    { key: 'turn-status', label: 'Turn Status' },
    { key: 'last-decision', label: 'Last Decision' },
    { key: 'previous-rule', label: 'Previous Rule' }
];

// Load components
ReactDOM.render(<Table child={'players'} cols={data} pollInterval={2000} />, document.getElementById('table'));
ReactDOM.render(<Table child={'rules'} cols={ruleHeader} pollInterval={2000} />, document.getElementById('rule-table'));
ReactDOM.render(<Table child={'state'} cols={stateHeader} pollInterval={2000} />, document.getElementById('state-table'));
ReactDOM.render(<ActionButtons />, document.getElementById('action-btns'));
