/**
 * index .js - handles pages: index, results, share
 */
exports.index_get = function(req,res) {
    res.send('INDEX GET');
};

exports.results_get = function(req,res) {
    res.send('RESULTS GET');
};

exports.share_get = function(req,res) {
    res.send('SHARE GET');
};