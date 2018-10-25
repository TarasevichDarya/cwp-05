const log = require('./log').log;
const file = require('fs').createWriteStream('log.txt');
let articles = require('../cwp-05/articles.json');

module.exports.createComment = function createComment(req, res, payload, cb) {
	if (payload.articleId === undefined && payload.text !== undefined) cb({ code: 400, message: 'Request is failed'});
	else {
	    let ind = articles.findIndex(i => i.id === payload.articleId);
	    if (ind !== -1) {
	    	log(file, '/api/comments/create', payload);
	        payload.id = Date.now();
	        if (articles[ind].comments === undefined) articles[ind].comments = [];//если не передаём коммент то он их формирует сам пустым массивом
			console.log(`${ind}`);
			console.log(`${articles[ind].comments}`);
			articles[ind].comments.push(payload);
			cb(null, articles);
	    }
	    else cb({ code: 400, message: 'Request is failed' });
	}
}