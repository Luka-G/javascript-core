angular.module('app')
	.controller('ContentController', function($scope, $state, $stateParams) {
		var content = this;
		content.data = $stateParams.data;
		content.paramsList = "";
		$scope.isCollapsed = {}
		content.data.params.forEach((param) => {
			var list = [];
			list.push(param.param);
			content.paramList = list.join(', ');
		})
		if (content.data) {
			content.name = content.data.name;
			content.superClass = content.data.superClass;
			content.description = content.data.description;
			content.params = content.data.params;
			content.fields = content.data.fields;
			content.methods = content.data.methods;
		}

		console.log(content.data.methods)
		$scope.log = function() {
			console.log($scope.isCollapsed)
		}
	})