var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6060';

var service = {
	get: function(url) {
		return fetch(baseUrl + url)
		.then(function(response) {
			return response.json();
		});
	},
	post: function(url, data) {
		return fetch(baseUrl + url, {
			method: 'POST',
			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
  			body: JSON.stringify(data)
		})
		.then(function(response) {
			return response.json();
		});
	}
};

module.exports = service