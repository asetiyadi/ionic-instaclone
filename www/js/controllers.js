angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CameraCtrl', ['$scope', '$ionicSlideBoxDelegate', 
function ($scope, $ionicSlideBoxDelegate) {
  $scope.status = {
    isFiltered: false,
    filtering: 0
  }

  $scope.getPhoto = function() {
    $ionicSlideBoxDelegate.next();

    navigator.camera.getPicture({
      quality: 75,
      targetWidth: 480,
      targetHeight: 640,
      correctOrientation: true,
      saveToPhotoAlbum: false
    }).then(function (imageURI) {
      $scope.lastPhoto = imageURI;
    }, function (err) {
      alert("Unable to take picture");
    })
  }

  $scope.convertPhoto = function () {
    $scope.readyPhoto = $scope.lastPhoto;
  }
}]);
