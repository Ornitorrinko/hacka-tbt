angular.module('starter.controllers', [])

.controller('EventsCtrl', function($scope, Events) {

  $scope.$on('$ionicView.enter', function(e) {

  });

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

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.chat = Events.get($stateParams.chatId);
})

.controller('ScanCtrl', function($scope, StorageService, CTS, Scan) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.scanned = false;
  $scope.dude = {};

  $scope.rating = {
    min: 0,
    max: 10,
    value: 5
  }

  $scope.ratingDescription = {
    0: 'Não gostei da conversa',
    5: 'Boa conversa',
    10: 'Excelente conversa'
  }

  $scope.view = {
    user: StorageService.GET(CTS.USER),
    scan: function funScan() {
      Scan.getQR()
        .then(function(result) {
          $scope.scanned = true;
          $scope.dude = result;
          console.log('resutl->', result);
          Utils.showAlert('result',result);    
        })
    }
  }
})

.controller('LoginCtrl', function($scope, $state, $ionicHistory, StorageService, CTS) {
  $scope.view = {
    user: {
      name: '',
      email: '',
      phone: ''
    },
    send: function() {
      StorageService.SET(CTS.USER, this.user);
      $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: true
      });
      $state.go('tab.events')
    }
  }
})

.controller('ProfileCtrl', function($scope, $state) {

  $scope.settingsList = [{
    text: "Batman Azul",
    checked: false
  }, {
    text: "Batman Preto",
    checked: true
  }, {
    text: "Cinema",
    checked: true
  }, {
    text: "Música",
    checked: false
  }, {
    text: "Tecnologia",
    checked: false
  }, {
    text: "Teatro",
    checked: false
  }, {
    text: "Quadrinhos",
    checked: false
  }, {
    text: "Futebol",
    checked: false
  }, {
    text: "Games",
    checked: false
  }, {
    text: "Mulheres",
    checked: false
  }, {
    text: "Homens",
    checked: false
  }];
})