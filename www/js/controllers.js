angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function($scope,$ionicModal,$http,$window) {
	$http.get('http://localhost:8080/todo/getall').
        success(function(data) {
                    $scope.toDoListItems = data;
                });

    $scope.AddItem = function(data){
        $http.post('http://localhost:8080/todo/add/' +data.newItem);
         data.newItem = ' ';
         $window.location.reload(true)
         $scope.closeModal();
      };

    $ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });

});