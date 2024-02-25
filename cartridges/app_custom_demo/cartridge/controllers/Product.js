'use-strict'

var server = require('server');
server.extend(module.superModule);

server.append('Show', function(req, res, next) {
    var viewData = res.getViewData()
    res.setViewData({
        myname : 'Mayuresh'
    })
    next();
});

module.exports = server.exports();