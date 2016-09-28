// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to serve static files
app.use(express.static(path.join(__dirname, '/app/public')));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

htmlRoutes.getHome(app);
htmlRoutes.getSurvey(app);
apiRoutes.getFriends(app);
apiRoutes.postSurvey(app);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});