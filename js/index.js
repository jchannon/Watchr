(function () {
    'use strict';

    var app = angular.module('watchr');

    app.controller(
        'IndexController',
        function ($scope, trailerService) {
            $scope.items = trailerService.getItems();
        }
    );

})();