var path = require('path');

// Display Default User Page
exports.getHome = function(app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
// Display Static Survey Page
exports.getSurvey = function(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};