

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [
        '$scope'
    ];

    function MainController($scope) {
       var listArr = []; 

       var person1 = {
        name: 'Tim',
        email: 'tim@gmail.com',
        number: '295-422-533'
       };

       var person2 = {
        name: 'Aldo',
        email: 'Aldo@gmail.com',
        number: '224-535-5533'
       };

       var person3 = {
        name: 'John',
        email: 'John@gmail.com',
        number: '757-438-2834'
       };

       $scope.listArr = [person1, person2, person3]; 
    }
})();
