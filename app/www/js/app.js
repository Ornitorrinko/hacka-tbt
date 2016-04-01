angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ornito.storage', 'ornito.utils', 'constants'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('login', {
      url: '/login',
      // abstract: true,
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'

    })
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

  // Each tab has its own nav history stack:

  .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    .state('tab.events-detail', {
      url: '/events/:id',
      views: {
        'tab-events': {
          templateUrl: 'templates/event-detail.html',
          controller: 'EventDetailCtrl'
        }
      }
    })

  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.friends-detail', {
      url: '/friends/:chatId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

  .state('tab.scan', {
    url: '/scan',
    views: {
      'tab-scan': {
        templateUrl: 'templates/tab-scan.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});