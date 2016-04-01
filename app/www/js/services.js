angular.module('starter.services', [])

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return friends;
    },
    remove: function(chat) {
      friends.splice(friends.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(chatId)) {
          return friends[i];
        }
      }
      return null;
    }
  };
})

.factory('Events', function() {

  var events = [{
    id: 0,
    name: 'AWS Summit 2016',
    lastText: '28/04/2016',
    face: 'img/aws.png'
  }, {
    id: 1,
    name: 'HSM Expo 2016',
    lastText: '25/05/2016',
    face: 'img/hsm.png'
  }, {
    id: 2,
    name: 'Qcon SP 2016',
    lastText: '15/06/2016',
    face: 'img/qcon.jpg'
  }];

  return {
    all: function() {
      return events;
    },
    remove: function(chat) {
      events.splice(events.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(chatId)) {
          return events[i];
        }
      }
      return null;
    }
  };


})

.factory('Scan', function($q) {
  var self = this;

  self.getQR = function funGetQR() {
    return $q(function(resolve, reject){
      resolve({
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
      });
    })
  }

  return self;
})      





