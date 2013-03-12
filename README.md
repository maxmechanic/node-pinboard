node-pinboard
=============

A Node.js wrapper for the Pinboard API.

###Installation
	npm install node-pinboard
##Available functions
  node-pinboard follows the [Pinboard v1 API](https://pinboard.in/api/) with [token auth](https://pinboard.in/api/#authentication) (token can be found on [settings/password](https://pinboard.in/settings/password)) and can either return the server response the result of a function or via callback.
  
###Examples
  Most options follow those solicited by the API, with the exception of the pluralization of 'tags' in the node-pinboard object where appropriate.

```javascript
	var Pinboard = require('node-pinboard');
	var api_token = 'user:NNNNNN';
	
	var pinboard = new Pinboard(api_token);

	var options = {
		url: 'https://github.com/mikeal/request',
		description: ' mikeal / request',
		tags: 'git,node-pinboard,test',
		toread: 'yes'
   };    
	
	pinboard.add(options, function(res) {
    	console.log(res);
    	//{ result_code: 'done' }
	});
	
	pinboard.get({tag: 'node-pinboard'}, function(res) {
		console.log(res); 
			//date: date,
  			//user: 'user',
  			//posts: 
   			//[ { href: 'https://github.com/mikeal/request',
      		//description: 'mikeal / request',
      		//extended: '',
      		//meta: 'meta',
      		//hash: 'hash',
      		//time: 'time',
      		//shared: 'no',
      		//toread: 'yes',
      		//tags: 'git node-pinboard test' } ] }
	});
  
  
