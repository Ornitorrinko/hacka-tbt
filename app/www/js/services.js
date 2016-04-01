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
       var friends = StorageService.GET(CTS.FRIENDS);
       var exists = friends.filter(function(f) {
         return f.id === friend.id;
       }).length > 0;

       if (exists) {
         return;
       }

       friends.push(friend);

       var events = StorageService.GET(CTS.EVENTS);
       var event_id = friend.event_id;

       var event = events.filter(function(ev) {
         return ev.id === event_id;
       })[0];

       var dude = event.dudes[friend.id];
       if (dude) {
         dude.style = '';
       }


       events.splice(event.id, 1);
       event.dudes.splice(dude.id, 1);

       event.dudes.splice(dude.id, 0, dude);
       events.splice(event.id, 0, event);

       StorageService.SET(CTS.FRIENDS, friends);
       StorageService.SET(CTS.EVENTS, events);

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
         style: 'desature',
         event_id: 0
           // })
           // }, function(error) {
           //   reject(error);
       });
     });
   }

   return self;
 })