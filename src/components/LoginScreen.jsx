var React = require('react');

var provider = new firebase.auth.GoogleAuthProvider();

var LoginScreen = React.createClass({
    
    componentDidMount: function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log("User is logged in!");
                this.props.loadAppView();
            } else {
                // No user is signed in.
            }
        }.bind(this));

        return ({})
    },

    render: function() {
        return (
            <center>
            <div className="vertical-center col-sm-12">
                <div className="container">
                    <button className="btn btn-lg btn-primary" type="submit" onClick={this.handleLogin}>Sign in</button>
                </div>
            </div>
            </center>
        );
    },

    handleLogin: function() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage);
        });
    }
});

module.exports = LoginScreen;