var React = require('react');
var Button = require('./Button.jsx');
var HTTP = require('../services/httpservices.js');

var ActionButtons = React.createClass({
    
    approveVote: function(e) {
        HTTP.post('/post-vote', {vote: 'approved'})
    },

    rejectVote: function(e) {
        HTTP.post('/post-vote', {vote: 'rejected'})
    },

    clearVote: function(e) {
        HTTP.post('/post-vote', {vote: 'cleared'})
    },

    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <Button className="col-sm-4" name="Approve" handler={this.approveVote} />
                    <Button className="col-sm-4" name="Reject" handler={this.rejectVote} />
                    <Button className="col-sm-4" name="Clear Vote" handler={this.clearVote} />
                </div>
            </div>
        );
    }
});

module.exports = ActionButtons;