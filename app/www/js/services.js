 angular.module('starter.services', [])

.factory('Friends', function(StorageService, CTS) {

  var friends = StorageService.GET(CTS.FRIENDS);

  return {
    all: function() {
      return friends;
    },
    remove: function(friend) {
      friends.splice(friends.indexOf(friend), 1);
    },
    get: function(id) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(id)) {
          return friends[i];
        }
      }
      return null;
    },
    add: function(friend) {

    }
  };
})

.factory('Events', function(StorageService, CTS) {

  var events = StorageService.GET(CTS.EVENTS);

  return {
    all: function() {
      return events;
    },
    remove: function(ev) {
      events.splice(events.indexOf(ev), 1);
    },
    get: function(id) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(id)) {
          return events[i];
        }
      }
      return null;
    }
  };

})

.factory('Dudes', function(StorageService, CTS) {

  return {
    all: function() {
      return dudes;
    },
    remove: function(dude) {
      dudes.splice(dudes.indexOf(dude), 1);
    },
    get: function(id) {
      for (var i = 0; i < dudes.length; i++) {
        if (dudes[i].id === parseInt(id)) {
          return dudes[i];
        }
      }
      return null;
    }
  };

})

.factory('Scan', function($q, $cordovaBarcodeScanner) {
  var self = this;

  self.getQR = function funGetQR() {
    return $q(function(resolve, reject) {
      // $cordovaBarcodeScanner.scan()
      // .then(function(barcodeData) {
        // resolve(angular.fromJson(barcodeData.text));
        resolve({
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    style: 'desature'
  // })
      // }, function(error) {
      //   reject(error);
      });
    });
  }

  return self;
})