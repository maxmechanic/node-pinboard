node-pinboard
=============

A Node.js wrapper for the Pinboard API.

###Installation
	npm install node-pinboard
##Available functions
  node-pinboard follows the [Pinboard v1 API](https://pinboard.in/api/) with [token auth](https://pinboard.in/api/#authentication) (token can be found on [settings/password](https://pinboard.in/settings/password)) and can either return the server response as the result of a function or the response can be handled via callback.
  
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
```

###Functions###

- **All options are passed as strings.** 
- **'options' is a javascript object.**
- **Callbacks are handed the Pinboard server response bodies.**

[add(options, callback(body))](#addoptions-callbackbody)  
[delete(url, callback(body))](#deleteurl-callbackbody)  
[get(options, callback(body))](#getoptions-callbackbody)  
[dates(options, callback(body))](#datesoptions-callbackbody)  
[recent(options, callback(body))](#recentoptions-callbackbody)  
[all(options, callback(body))](#alloptions-callbackbody)  
[suggest(url, callback(body))](#suggesturl-callbackbody)  
[getTags(callback(body))](#getTagscallbackbody)  
[delTag(tag, callback(body))](#delTagtag-callbackbody)  
[renameTag(options, callback(body))](#renameTagoptions-callbackbody)  
[userSecret(callback(body))](#userSecretcallbackbody))  
[api_token(callback(body))](#api_tokencallbackbody)  
[listNotes(callback(body))](#listNotescallbackbody)  
[getNote(id, callback(body)](#getNoteid-callbackbody)  
	
####update(callback(body))

API docs: "Returns a list of the user's most recent posts, filtered by tag."

####add(options, callback(body))

options: url (req), description (title)(req), extended tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)

API docs: "Add a bookmark."

####delete(url, callback(body))

API docs: "Delete a bookmark."

####get(options, callback(body))

options: url (req), description (title)(req), extended, tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)

API docs: "Returns one or more posts on a single day matching the arguments. If no date or url is given, date of most recent bookmark will be used."

####dates(options, callback(body))

options: tags

API docs: "Returns a list of dates with the number of posts at each date."

####recent(options, callback(body))

options: tags

API docs: "Returns a list of the user's most recent posts, filtered by tag."

####all(options, callback(body))

options: tag, start, results, fromdt, todt, meta

API docs: "Returns all bookmarks in the user's account."

####suggest(url, callback(body))

API docs: "Returns a list of popular tags and recommended tags for a given URL. Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags."

####getTags(callback(body))

API docs: "Returns a full list of the user's tags along with the number of times they were used."

####delTag(tag, callback(body))

API docs: "Delete an existing tag."

####renameTag(options, callback(body))

options: old (req), new (req)

API docs: "Rename an tag, or fold it in to an existing tag"

####userSecret(callback(body))

API docs: "Returns the user's secret RSS key (for viewing private feeds)"

####api_token(callback(body))

API docs: "Returns the user's API token (for making API calls without a password)"

####listNotes(callback(body))

API docs: "Returns a list of the user's notes"

####getNote(id, callback(body))

API docs: "Returns an individual user note. The hash property is a 20 character long sha1 hash of the note text."
