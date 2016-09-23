'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;

//router.use('/giphy', require('./giphy'));

// request to '/gif'
// router.get('/:searchStr', function (req, res, next) {
// 	console.log('in router!!!');
// 	return giphy.search(req.params.searchStr, function(error, response) {
// 		if (!error){
// 			return response;
// 		} else {
// 			//you have an error, but you can't return it!
// 			throw error;
// 		}
// 	})
// 	.catch(next)
// })

// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
