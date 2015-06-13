app.controller('SentCtrl', ['$scope', '$rootScope', '$stateParams', 'lodash', 'EmailSvc',
 function($scope, $rootScope, $stateParams, lodash, EmailSvc){

  $scope.sentMessages = [];
  $scope.message = {};

  var showMessage = function(messages) {
    $scope.messageId = $stateParams.messageId;
    $scope.message = lodash.where($scope.sentMessages, { 'messageId': $scope.messageId })[0];
    console.log($scope.message);
  }

  EmailSvc.sent($rootScope.rootUser.user_id)
    .success(function(data){
      $scope.sentMessages = data;
      if($stateParams.messageId)
        showMessage(data);
    })
    .error(function(data){

    });
  
}]);