const log = require('./log').log;
const file = require('fs').createWriteStream('log.txt');
let articles = require('../cwp-05/articles.json');

module.exports.read = function read(req, res, payload, cb) {
	if (payload.id == undefined) cb({ code: 400, message: 'Request is failed'});
	else {
	    let article = articles.find(i => i.id == payload.id);
	    if (article != undefined) {
	    	log(file, '/api/articles/read', payload);
	    	cb(null, article);
	    }
	    else cb({ code: 404, message: 'Not found' });
	}
}