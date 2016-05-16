angular.module('snakesandstairs', ['ui.router', 'LocalStorageModule', 'ngAnimate', 'toastr'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider', 'toastrConfig',
	function($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, toastrConfig) {
		'use strict';

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('site', {
				url: '/',
				controller: 'indexController',
				templateUrl: '/app/templates/index.html'
			})


		$locationProvider.html5Mode(true);

		angular.extend(toastrConfig, {
			preventDuplicates: true
		})

		localStorageServiceProvider
			.setPrefix('ss')
			.setStorageType('sessionStorage')
			.setNotify(true, true);
	}
])

