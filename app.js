var hipchat = require('node-hipchat');
var HC = new hipchat('b9256c4fde0dffc9f84ae1ec8f07fc');

HC.listRooms(function(data) {
  data.rooms.forEach(function(each) {
    console.log(each.name);
  });
});

HC.listRooms();