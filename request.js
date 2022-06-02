var request = require('request')
  , qs      = require('querystring')
  ;

var user = {username: "cl0udy"}
  , post = 
    { method: 'POST'
    , url   : 'https://steamcommunity.com/openid/login?' + qs.stringify(user)
 // , body  : qs.stringify(user)
    }
  ;

request(post, function(err,response,body) {
  console.log(response.statusCode, body);
});
