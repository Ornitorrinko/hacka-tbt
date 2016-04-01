angular.module('starter.controllers', [])

.controller('EventsCtrl', function($scope, Events) {

  $scope.$on('$ionicView.enter', function(e) {

  });

  $scope.events = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  };
})

.controller('EventDetailCtrl', function($scope, $state, $stateParams, Events, Dudes) {
  $scope.event = Events.get($stateParams.id);
  $scope.dudes = $scope.event.dudes;

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

.controller('ScanCtrl', function($scope, StorageService, CTS, Scan, Utils) {
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
    0: 'Conversa rápida',
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
        Utils.showAlert('result', result);
      })
    },
    done: function() {
      var dude = $scope.dude;
      Utils.showAlert('Tudo certo!', dude.name + ' foi adicionado ao seus amigos');

    }
  }
})

.controller('LoginCtrl', function($scope, $state, $ionicHistory, StorageService, CTS) {
  var loadData =  function () {
  var friends = [
    {
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }
  ];

  StorageService.SET(CTS.FRIENDS, friends);

  var dudes = [
  {
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/ben.png',
    style: 'desature'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    style: 'desature'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    style: 'desature'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    style: 'desature'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    style: 'desature'
  }
  ];

  var events = [
  {
    id: 0,
    name: 'AWS Summit 2016',
    lastText: '28/04/2016',
    face: 'img/aws.png',
    dudes: dudes
  }, {
    id: 1,
    name: 'HSM Expo 2016',
    lastText: '25/05/2016',
    face: 'img/hsm.png',
    dudes: dudes
  }, {
    id: 2,
    name: 'Qcon SP 2016',
    lastText: '15/06/2016',
    face: 'img/qcon.jpg',
    dudes: dudes
  }
  ];

  StorageService.SET(CTS.EVENTS, events);
  }

  $scope.view = {
    user: {
      name: '',
      email: '',
      phone: ''
    },
    send: function() {
      this.user.id = 
      StorageService.SET(CTS.USER, this.user);
      $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: true
      });
      $state.go('tab.events');
    }
  }
  $scope.$on('$ionicView.enter', function(e) {
    var user =  StorageService.GET(CTS.USER);
    if(user){
     StorageService.SET(CTS.USER, this.user);
      $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: true
      });
      $state.go('tab.events');
    }else{
      loadData();
    }
  })
})

.controller('ProfileCtrl', function($scope, $state) {

  $scope.settingsList = [{
    text: "Batman Azul",
    checked: false
  }, {
    text: "Batman Preto",
    checked: true
  }, {
    text: "Filmes de Terror",
    checked: true
  }, {
    text: "Música Eletrônica",
    checked: false
  }, {
    text: "IoT",
    checked: false
  }, {
    text: "Tecnologia Móvel",
    checked: false
  }, {
    text: "Cloud Computing",
    checked: false
  }, {
    text: "DC Comics",
    checked: false
  }, {
    text: "Games Vintage",
    checked: false
  }, {
    text: "Mulheres Safadas",
    checked: false
  }, {
    text: "Homens",
    checked: false
  }];
})