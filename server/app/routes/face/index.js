// assume all URLs start with /api/face
var router = require('express').Router(); // eslint-disable-line new-cap
var face = require('face-analytics').key(process.env.API_KEY);

console.log('face', face);
module.exports = router;

var img = "https://storage.googleapis.com/detection-server-tests/characters.jpg";

face.detect(img)
.then(function(response) {
	//throw responses
	console.log(response);
}, function(error){
    //throw errors
    console.log(error);
  }
);
// var api = "http://api.giphy.com/v1/gifs/search";
// var apiKey = '&api_key=dc6zaTOxFJmzC';
// var query = '&q='
// var ensureAuthenticated = function (req, res, next) {
//     var err;
//     if (req.isAuthenticated()) {
//         next();
//     } else {
//         err = new Error('You must be logged in.');
//         err.status = 401;
//         next(err);
//     }
// };

// router.get('/:searchStr', function (req, res, next) {
//     console.log('we are inside router.get; req.params.searchStr is', req.params.searchStr);
//     giphy.search(req.params.searchStr, function(error, response) {
//         if (!error){
//             return response;
//         } else {
//             //you have an error, but you can't return it!
//             throw error;
//         }
//     })
//     .catch(next)
// })

// router.get('/secret-stash', ensureAuthenticated, function (req, res) {

//     var theStash = [
//         'http://ep.yimg.com/ay/candy-crate/bulk-candy-store-2.gif',
//         'http://www.dailybunny.com/.a/6a00d8341bfd0953ef0148c793026c970c-pi',
//         'http://images.boomsbeat.com/data/images/full/44019/puppy-wink_1-jpg.jpg',
//         'http://p-fst1.pixstatic.com/51071384dbd0cb50dc00616b._w.540_h.610_s.fit_.jpg',
//         'http://childcarecenter.us/static/images/providers/2/89732/logo-sunshine.png',
//         'http://www.allgraphics123.com/ag/01/10683/10683.jpg',
//         'http://img.pandawhale.com/post-23576-aflac-dancing-duck-pigeons-vic-RU0j.gif',
//         'http://www.eveningnews24.co.uk/polopoly_fs/1.1960527.1362056030!/image/1301571176.jpg_gen/derivatives/landscape_630/1301571176.jpg',
//         'http://media.giphy.com/media/vCKC987OpQAco/giphy.gif',
//         'https://my.vetmatrixbase.com/clients/12679/images/cats-animals-grass-kittens--800x960.jpg',
//         'http://www.dailymobile.net/wp-content/uploads/2014/10/lollipops.jpg'
//     ];

//     res.send(_.shuffle(theStash));

// });
