'use strict';
app.controller('MainController', function ($scope) {
  $scope.characters = [
    {
      name: 'Marth',
      growths: {
        hp: 45,
        str: 30
      }
    }
  ];
});
