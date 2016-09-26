var data = require('../data/friends.js');

// Display user objects in JSON format
exports.getFriends = function(app) {
    app.get('/api/friends', function (req, res) {
        var results = [];
        // res.json(data);
        for (var i = 0; i < data.sampleUsers.length; i++) {
            results.push(data.sampleUsers[i]);
        }
        res.json(results);
    });
};
// Process incoming POST survey results of users and append to user array
exports.postSurvey = function(app) {
    app.post('/api/friends', function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        var result = data.compare(newUser);
        res.json(result);
    });
};