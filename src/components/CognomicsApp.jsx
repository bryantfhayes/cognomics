var React = require('react');
var Table = require('./Table.jsx');
var ActionButtons = require('./ActionButtons.jsx');
var BasicNavbar = require('./BasicNavbar.jsx');
var HTTP = require('../services/httpservices.js');

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

var CognomicsApp = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function() {
        return {playerdata: [], ruledata: [], statedata: [], proposedRule: ""};
    },

    componentDidMount: function() {
        this.bindAsArray(firebase.database().ref().child('players'), 'playerdata');
        this.bindAsObject(firebase.database().ref().child('rules'), 'ruledata');
        this.bindAsArray(firebase.database().ref().child('state'), 'statedata');
    },

    onRuleChange: function(e) {
    	this.setState({
    		proposedRule: e.target.value
    	});
    },

    submitRule: function(e) {
		console.log(this.state.proposedRule);
		HTTP.post('/propose-rule', {rule: this.state.proposedRule});
		firebase.database().ref().child('rules').child('proposed').child('description').set(this.state.proposedRule);
    },

	render: function() {
		var user = firebase.auth().currentUser;
		var proposedRuleInput = <div></div>;
		var proposedRuleText = <div></div>
		if (true) {
			proposedRuleInput = (
				<div className="container col-sm-12">
					<textarea className="form-control input-lg" onChange={this.onRuleChange}></textarea>
					<button type="submit" className="btn btn-primary" onClick={this.submitRule}>Submit</button>
				</div>
			);
		} else {
		}

		if (this.state.ruledata['proposed'] != undefined) {
			proposedRuleText = (<p>{this.state.ruledata['proposed'].description}</p>);
		}
		
		

		return (
			<div className="container-fluid">
				<BasicNavbar username={user.displayName} title={'Cognomics'} logout={this.logout}/>
        		<div className="jumbotron text-center"> 
            		<div className="row">
                		<ActionButtons />
            		</div>
            		<div className="row">  
	                	<center>
	                    	<div className="table-responsive">
	                        	<Table child={'players'} cols={data} pollInterval={2000} />
	                    	</div>
	                	</center>
            		</div>
        		</div>
      
        		<div className="jumbotron text-center"> 
            		<div className="form-group">
            			<label>Proposed Rule:</label>
            			{proposedRuleText}
            			{proposedRuleInput}
            		</div>
            		<center>
	            		<div className="table-responsive">
	            			<Table child={'state'} cols={stateHeader} pollInterval={2000} className="col-sm-6 col-sm-offset-3" />
	            		</div>
            		</center>
        		</div>

        		<div className="jumbotron text-center"> 
        			<center>
	            		<div className="table-responsive">
	            			<Table child={'rules'} cols={ruleHeader} pollInterval={2000} className="col-sm-6 col-sm-offset-3" />
	            		</div>
	            	</center>
        		</div>
    		</div>
		);
	},

	logout: function() {
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
			this.props.loadSigninView()
		}.bind(this), function(error) {
			// An error happened.
		});
	}
});

module.exports = CognomicsApp;