angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router'])
	.controller('AppController', function() {
		var app = this;
	})

	.config(function($stateProvider) {
		var classState = {
			name: 'class',
			url: '/class/{className}',
			params: {
				className: null
			},
			templateUrl: 'app/partials/content.html'
		}

		$stateProvider.state(classState);
	})