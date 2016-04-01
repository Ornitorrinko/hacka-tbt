angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Events) {
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.chats = Events.all();
  $scope.remove = function(chat) {
    Events.remove(chat);
  };
})

.controller('ChatsCtrl', function($scope, Friends) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Friends.all();
  $scope.remove = function(chat) {
    Friends.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.chat = Friends.get($stateParams.chatId);
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.chat = Events.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, StorageService,CTS,Scan) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.view={
    user:StorageService.GET(CTS.USER),
    scan:function funScan() {
      Scan.getQR()
      .then(function(result) {
        console.log('resutl->',result);
      })
    }
  }
})

.controller('LoginCtrl',function ($scope,$state,$ionicHistory, StorageService,CTS) {
  $scope.view={
    user : {
      name:'',
      email:'',
      phone:''
    },
    send : function () {
      StorageService.SET(CTS.USER,this.user);
      $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: true
      });
      $state.go('tab.events')
    }
  }
})