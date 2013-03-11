var request = require ('request');

module.exports = Pinboard;

var apiURL = 'https://api.pinboard.in/v1/';

function Pinboard(token) {
	this.token = token;
}

//add params:
//url (req), description (title)(req), extended
//tags, dt (datetime), replace (yes/no), shared (yes/no), toread (yes/no)

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

Pinboard.prototype.dates = function(options, cb) {
	var url = apiURL + 'posts/dates';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: options.tags
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

Pinboard.prototype.recent = function(options, cb) {
	var url = apiURL + 'posts/recent';
	var params = {
		uri: url, 
		json: true,
		qs: {
			auth_token: this.token,
			format: 'json',
			tag: options.tags
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

Pinboard.prototype.getTags = function(options, cb) {
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

