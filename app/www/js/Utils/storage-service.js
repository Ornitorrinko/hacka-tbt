angular.module('ornito.storage', [])

// Services
.factory('StorageService', function ($window) {
  var self =this;
  self.SET= function(key, object) {
    window.localStorage.setItem(key, angular.toJson(object));
  }
  self.GET=function(key) {
    return angular.fromJson(window.localStorage.getItem(key));
  }
  self.DESTROY=function(key) {
    window.localStorage.removeItem(key);
  }
  return self;
})