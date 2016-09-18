var React = require('react');
var LoginScreen = require('./LoginScreen.jsx');
var CognomicsApp = require('./CognomicsApp.jsx');

var Manager = React.createClass({
	
	getInitialState() {
		return {view: 0}
	},

	render: function() {
		switch(this.state.view) {
			case 0:
				return <LoginScreen loadAppView={this.loadAppView}/>
			case 1:
				return <CognomicsApp loadSigninView={this.loadSigninView}/>
		}
	},

	loadAppView: function() {
		this.setState({
			view: 1
		});
	},

	loadSigninView: function() {
		this.setState({
			view: 0
		});
	}
});

module.exports = Manager;