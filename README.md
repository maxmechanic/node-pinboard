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

[add(options, function(body))](#addoptions-functionbody)  
[delete(url, function(body))](#deleteurl-functionbody)  
[get(options, function(body))](#getoptions-functionbody)  
[dates(options, function(body))](#datesoptions-functionbody)  
[recent(options, function(body))](#recentoptions-functionbody)  
[all(options, function(body))](#alloptions-functionbody)  
[suggest(url, function(body))](#suggesturl-functionbody)  
[getTags(function(body))](#getTagsfunctionbody)  
[delTag(tag, function(body))](#delTagtag-functionbody)  
[renameTag(options, function(body))](#renameTagoptions-functionbody)  
[userSecret(function(body))](#userSecretfunctionbody))  
[api_token(function(body))](#api_tokenfunctionbody)  
[listNotes(function(body))](#listNotesfunctionbody)  
[getNote(id, function(body)](#getNoteid-functionbody)  
	
####update(function(body))

API docs: "Returns a list of the user's most recent posts, filtered by tag."

####add(options, function(body))

options: url (req), description (title)(req), extended tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)

API docs: "Add a bookmark."

####delete(url, function(body))

API docs: "Delete a bookmark."

####get(options, function(body))

options: url (req), description (title)(req), extended, tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)

API docs: "Returns one or more posts on a single day matching the arguments. If no date or url is given, date of most recent bookmark will be used."

####dates(options, function(body))

options: tags

API docs: "Returns a list of dates with the number of posts at each date."

####recent(options, function(body))

options: tags

API docs: "Returns a list of the user's most recent posts, filtered by tag."

####all(options, function(body))

options: tag, start, results, fromdt, todt, meta

API docs: "Returns all bookmarks in the user's account."

####suggest(url, function(body))

API docs: "Returns a list of popular tags and recommended tags for a given URL. Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags."

####getTags(function(body))

API docs: "Returns a full list of the user's tags along with the number of times they were used."

####delTag(tag, function(body))

API docs: "Delete an existing tag."

####renameTag(options, function(body))

options: old (req), new (req)

API docs: "Rename an tag, or fold it in to an existing tag"

####userSecret(function(body))

API docs: "Returns the user's secret RSS key (for viewing private feeds)"

####api_token(function(body))

API docs: "Returns the user's API token (for making API calls without a password)"

####listNotes(function(body))

API docs: "Returns a list of the user's notes"

####getNote(id, function(body))

API docs: "Returns an individual user note. The hash property is a 20 character long sha1 hash of the note text."
