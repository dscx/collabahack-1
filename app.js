var hipchat = require('node-hipchat');
var HC = new hipchat('b9256c4fde0dffc9f84ae1ec8f07fc');

var params = {
  room: 'Main Room', // Found in the JSON response from the call above
  message_format: 'text',
  message: process.argv[2],
  from: process.argv[3] || 'techno-ghost',
  color: process.argv[4] || 'random'
};

HC.postMessage(params, function(data) {
  if (data) {
    console.log('message sent!', data);
  } else {
    console.log('message failed to send');
  }
});