angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router'])
	.run(function($state) {
		$state.go('root')
	})
	.controller('AppController', function() {
		var app = this;
	})

	.config(function($stateProvider) {
		var rootState = {
			name: 'root',
			url: '/'
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