var React = require('react');
var Button = require('./Button.jsx');
var HTTP = require('../services/httpservices.js');

var ActionButtons = React.createClass({
    
    approveVote: function(e) {
        var user = firebase.auth().currentUser;
        HTTP.post('/post-vote', {vote: 'approved', email: user.email, uid: user.uid})
    },

    rejectVote: function(e) {
        var user = firebase.auth().currentUser;
        HTTP.post('/post-vote', {vote: 'rejected', email: user.email, uid: user.uid})
    },

    clearVote: function(e) {
        var user = firebase.auth().currentUser;
        HTTP.post('/post-vote', {vote: 'cleared', email: user.email, uid: user.uid})
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