angular.module('app')
	.controller('ClassListController', function($state) {
		var list = this;

		list.classes = [
			'istsos.ServerContainer',
			'istsos.Date',
			'istsos.Database',
			'istsos.Configuration',
			'istsos.Server',
			'istsos.Service',
			'istsos.Offering',
			'istsos.ProcedureBase',
			'istsos.Procedure',
			'istsos.VirtualProcedure',
			'istsos.Output',
			'istsos.ObservedProperty',
			'istsos.DataQuality',
			'istsos.UnitOfMeasure',
			'istsos.EventTypes',
			'istsos.EventEmitter',
			'istsos.HttpAPI'
		];

		list.goTo = function(state, param) {
			console.log(param)
			$state.go(state, {className: param})
		}
	})