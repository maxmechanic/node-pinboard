var request = require ('request');

module.exports = Pinboard;

var apiURL = 'https://api.pinboard.in/v1/';

function Pinboard(token) {
	this.token = token;
}

// API docs: "Returns the most recent time a bookmark was added, updated or deleted."
Pinboard.prototype.update = function(cb) {
	var url = apiURL + 'posts/update';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json'
		}
	};

	request.get(params, function(err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});

};

// options: url (req), description (title)(req), extended
// tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)
// API docs: "Add a bookmark."
Pinboard.prototype.add = function(options, cb) {
	var url = apiURL + 'posts/add';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			url: options.url,
			description: options.description,
			extended: options.extended,
			tags: options.tags,
			dt: options.dt,
			replace: options.replace,
			shared: options.shared,
			toread: options.toread
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});

};

// API docs: "Delete a bookmark."
Pinboard.prototype.delete = function(delURL, cb) {
	var url = apiURL + 'posts/delete';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			url: delURL
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});


};

// options: url (req), description (title)(req), extended
// tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)
// API docs: "Returns one or more posts on a single day matching the arguments. 
// If no date or url is given, date of most recent bookmark will be used."
Pinboard.prototype.get = function(options, cb) {
	var url = apiURL + 'posts/get';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: options.tags,
			dt: options.dt,
			url: options.url,
			meta: options.meta
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});


};

// Filter by up to three tags.
// API docs: "Returns a list of dates with the number of posts at each date."
Pinboard.prototype.dates = function(tags, cb) {
	var url = apiURL + 'posts/dates';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: tags
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});


};

// Up to three tags.
// API docs: "Returns a list of the user's most recent posts, filtered by tag."
Pinboard.prototype.recent = function(tags, cb) {
	var url = apiURL + 'posts/recent';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: tags
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});
};

// options: tag, start, results, fromdt, todt, meta
// API docs: "Returns all bookmarks in the user's account."
Pinboard.prototype.all = function(options, cb) {
	var url = apiURL + 'posts/all';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: options.tags,
			start: options.start,
			results: options.results,
			fromdt: options.fromdt,
			todt: options.todt,
			meta: options.meta
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});


};

// API docs: "Returns a list of popular tags and recommended tags for a given URL. Popular tags are tags used site-wide for the url; 
// recommended tags are drawn from the user's own tags."
Pinboard.prototype.suggest = function(sugURL, cb) {
	var url = apiURL + 'posts/suggest';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			url: sugURL
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});
};
 
// "Returns a full list of the user's tags along with the number of times they were used."
Pinboard.prototype.getTags = function(cb) {
	var url = apiURL + 'tags/get';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json'
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});


};

// API docs: "Delete an existing tag."
Pinboard.prototype.delTag = function(tag, cb) {
	var url = apiURL + 'tags/delete';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: tag
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});



};
// options: old (req), new (req)
// API docs: "Rename an tag, or fold it in to an existing tag"
Pinboard.prototype.renameTag = function(options, cb) {
	var url = apiURL + 'tags/rename';

	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			old: options.old,
			new: options.new
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});
};

// API docs: "Returns the user's secret RSS key (for viewing private feeds)"
Pinboard.prototype.userSecret = function(cb) {
	var url = apiURL + 'user/secret';

	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json'
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});

};

// API docs: "Returns the user's API token (for making API calls without a password)"
Pinboard.prototype.api_token = function(cb) {
	var url = apiURL + 'user/api_token';

	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json'
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});


};

// API docs: "Returns a list of the user's notes"
Pinboard.prototype.listNotes = function(cb) {
	var url = apiURL + 'notes/list';

	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json'
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});

};

// API docs: "Returns an individual user note. 
// The hash property is a 20 character long sha1 hash of the note text."
Pinboard.prototype.getNote = function(id, cb) {
	var url = apiURL + 'notes/' + id;

	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json'
		}
	};

	request(params, function (err, res, body) {
		if (err){
			return console.error(err);
		}

		if (cb) {
			cb(body);
			return;
		}

		return body;
	});

};

