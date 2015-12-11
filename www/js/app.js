// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ResortApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('/home',{
        url:'/home',
        templateUrl:'views/home/home.html'

        })
        .state('reservation',{
         url:'/reservation',
         controller:'ReservationController',
         templateUrl:'views/reservation/reservation.html'

        })
        .state('weather', {
        url: '/weather',
        controller: 'WeatherController',
        templateUrl: 'views/weather/weather.html'
    })
        .state('restaurants', {
            url: '/restaurants',
            controller: 'RestaurantsController',
            templateUrl: 'views/restaurants/restaurants.html'
        })
        .state('tour', {
        url: '/tour',
        templateUrl: 'views/tour/tour.html'
    });
      $urlRouterProvider.otherwise('/tour');

    });