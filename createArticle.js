const log = require('./log').log;
const file = require('fs').createWriteStream('log.txt');//формирует поток для записи
let articles = require('../cwp-05/articles.json');

module.exports.createArticle = function createArticle(req, res, payload, cb) {
    if (payload.text === undefined && payload.data === undefined && undefined === payload.title) cb({
        code: 400,
        message: 'Request is failed'
    });
    else {
        log(file, '/api/articles/create', payload);
        payload.id = Date.now();
        articles.push(payload);
        cb(null, payload);
    }
}