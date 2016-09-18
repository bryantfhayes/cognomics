var React = require('react');

var BasicNavbar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
      					<a className="navbar-brand" href="#">{this.props.title}</a>
    				</div>
    				<button type="button" className="btn btn-default navbar-btn navbar-right logout-button" onClick={this.props.logout}>Logout</button>
					<p className="navbar-text navbar-right logout-text">Signed in as {this.props.username} </p>
				</div>
			</nav>
		);
	}
});

module.exports = BasicNavbar;