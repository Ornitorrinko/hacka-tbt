angular.module('ornito.utils', [])

// Services
.factory('Utils', function($ionicLoading, $ionicPopup) {
  var self = this;
  self.displayLoading = function(message) {
    return $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>' + (message || 'Aguarde')
    });
  }
  self.hideLoading = function() {
    return $ionicLoading.hide();
  }
  self.showAlert = function(title, message) {
    var alertPopup = $ionicPopup.alert({
      title: title,
      template: message
    });
    alertPopup.then(function(res) {});
  }

  self.finally = function funFinally() {
    return function funFinally() {
      return self.hideLoading();
    }
  }
  return self;
})