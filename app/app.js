angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router'])

.controller('AppController', function() {
	var app = this;
})

.config(function($stateProvider) {

	var rootState = {
		name: 'root',
		url: '/',
		templateUrl: 'app/partials/home.html'
	}

	var classState = {
		name: 'class',
		url: '/class/{class}',
		params: {
			class: null,
			data: null
		},
		templateUrl: 'app/partials/content.html'
	}

	$stateProvider.state(classState);
	$stateProvider.state(rootState);
})