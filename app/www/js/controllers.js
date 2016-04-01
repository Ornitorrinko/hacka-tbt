angular.module('starter.controllers', [])

.controller('EventsCtrl', function($scope, Events) {
  $scope.chats = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  };
})

.controller('EventDetailCtrl', function($scope, $state, $stateParams, Events, Dudes) {
  $scope.event = Events.get($stateParams.id);
  $scope.dudes = Dudes.all();

  $scope.scan = function(id) {
    $state.go('tab.scan');
  }
})

.controller('ChatsCtrl', function($scope, Friends) {
  $scope.chats = Friends.all();
  $scope.remove = function(chat) {
    Friends.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.chat = Friends.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});