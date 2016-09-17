var React = require('react');

var Button = React.createClass({

	render: function() {
		return (
			<button type="button" className="btn btn-primary" onClick={this.props.handler}>{this.props.name}</button>
		);
	}

});

module.exports = Button;