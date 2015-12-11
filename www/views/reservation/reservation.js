/**
 * Created by Sufiyan Bawany on 9/18/2015.
 */
angular.module('ResortApp')
.controller('ReservationController',function($scope){
       $scope.reservation={
        checkin: new Date(),
        checkout: new Date(Date.now()+1000*60*60*24*7),
        room:200,
        rate:150,
        wifi:'resortwifi'
     };
});