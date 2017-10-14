'use strict';

var db = require('db.json');

module.exports.signIn = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters),
  };

  callback(null, response);
};


// Handler for /api/sign-up
module.exports.signUp = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(db.locations),
  };

  callback(null, response);
};

// Handler for /api/characters/:id
module.exports.characterById = (event, context, callback) => {
  const id = parseInt(event.pathParameters.id, 10);

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters.find((character) => character.id === id)),
  };

  callback(null, response);
};

// Handler for /api/
module.exports.apiRoot = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'API ready to receive requests'
  };

  callback(null, response);
};
