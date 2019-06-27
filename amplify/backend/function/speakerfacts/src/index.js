
var axios = require('axios');

exports.handler = async function (event, context) {
  var result = await axios.get(`http://api.icndb.com/jokes/random?firstName=${event.source.name}&lastName=`);
  context.done(null, result.data.value.joke.replace(/\s\s/g, ' '));
};
