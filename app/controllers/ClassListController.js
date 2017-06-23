angular.module('app')
	.controller('ClassListController', function($state) {
		var list = this;

		list.classes = [{
			name: 'istsos.ServerContainer',
			superClass: '',
			description: 'Container class, which purpose is to store istsos.Server instances',
			params: [],
			fields: [{
				name: 'servers',
				type: 'Array<istsos.Server>'
			}],
			methods: [{
				name: 'getServer',
				paramList: 'name',
				params: [{
					name: 'name',
					type: 'String',
					description: 'Name of the server',
					props: []
				}],
				return: 'istsos.Server',
				fires: ''
			}, {
				name: 'getServers',
				paramList: '',
				params: [],
				return: 'Array<istsos.Server>',
				fires: ''
			}, {
				name: 'addServer',
				paramList: 'server',
				params: [{
					name: 'server',
					type: 'istsos.Server',
					description: 'Instance of the istsos.Server class',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'removeServer',
				paramList: 'server',
				params: [{
					name: 'server',
					type: 'istsos.Server | String',
					description: 'Instance of the istsos.Server class or server name',
					props: []
				}],
				return: 'istsos.Server',
				fires: ''
			}, ]
		}, {
			name: 'istsos.Date',
			superClass: '',
			description: 'Class for converting the input to proper date format (ISO 8601)',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Date configuration object',
				props: [{
					name: 'year',
					type: 'String | integer',
					description: 'Year'
				}, {
					name: 'month',
					type: 'String | integer',
					description: 'Month'
				}, {
					name: 'day',
					type: 'String | integer',
					description: 'Day'
				}, {
					name: 'hours',
					type: 'String | integer',
					description: 'Hours'
				}, {
					name: 'minutes',
					type: 'String | integer',
					description: 'Minutes'
				}, {
					name: 'seconds',
					type: 'String | integer',
					description: 'Seconds'
				}, {
					name: 'gmt',
					type: 'String | integer',
					description: 'Time zone offset'
				}, {
					name: 'opt_description',
					type: 'String',
					description: 'Description'
				}]
			}],
			fields: [{
				name: 'year',
				type: 'String'
			}, {
				name: 'month',
				type: 'String'
			}, {
				name: 'day',
				type: 'String'
			}, {
				name: 'hours',
				type: 'String'
			}, {
				name: 'minutes',
				type: 'String'
			}, {
				name: 'seconds',
				type: 'String'
			}, {
				name: 'gmt',
				type: 'String'
			}, {
				name: 'description',
				type: 'String'
			}],
			methods: [{
				name: 'getDateString',
				paramList: '',
				params: [],
				return: 'String',
				fires: ''
			}, {
				name: 'getDescription',
				paramList: '',
				params: [],
				return: 'String',
				fires: ''
			}]
		}, {
			name: 'istsos.Database',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.Database objects, which hold database connection parameters',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: [{
					name: 'dbname',
					type: 'String',
					description: 'PostgreSQL database name'
				}, {
					name: 'host',
					type: 'String',
					description: 'PostgreSQL database host'
				}, {
					name: 'user',
					type: 'String',
					description: 'Connection username'
				}, {
					name: 'password',
					type: 'String',
					description: 'Connection password'
				}, {
					name: 'port',
					type: 'integer',
					description: 'Port'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'dbname',
				type: 'String'
			}, {
				name: 'host',
				type: 'String'
			}, {
				name: 'user',
				type: 'String'
			}, {
				name: 'password',
				type: 'String'
			}, {
				name: 'port',
				type: 'integer'
			}],
			methods: [{
				name: 'fireEvent',
				paramList: 'eventType, response',
				params: [{
					name: 'eventType',
					type: 'String',
					description: 'Event type, that must match one of the supported types in istsos.EventTypes object',
					props: []
				}, {
					name: 'response',
					type: 'Object | *',
					description: 'Data that will be passed to the handler',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'on',
				paramList: 'event, callback',
				params: [{
					name: 'event',
					type: 'String',
					description: 'Event type, that must match one of the supported types in istsos.EventTypes object',
					props: []
				}, {
					name: 'callback',
					type: 'String',
					description: 'Event handler callback function',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'once',
				paramList: 'event, callback',
				params: [{
					name: 'event',
					type: 'String',
					description: 'Event type, that must match one of the supported types in istsos.EventTypes object',
					props: []
				}, {
					name: 'callback',
					type: 'String',
					description: 'Event handler callback function',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'off',
				paramList: 'event, callback',
				params: [{
					name: 'event',
					type: 'String',
					description: 'Event type, that must match one of the supported types in istsos.EventTypes object',
					props: []
				}, {
					name: 'callback',
					type: 'String',
					description: 'Event handler callback function',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'unlistenAll',
				paramList: '',
				params: [],
				return: 'void',
				fires: ''
			}, {
				name: 'getDb',
				paramList: 'serviceName, server',
				params: [{
					name: 'serviceName',
					type: 'String',
					description: 'Name of the service. If not provided, value "default" will be used. ',
					props: []
				}, {
					name: 'server',
					type: 'istsos.Server',
					description: 'istsos.Server instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'DATABASE\''
			}, {
				name: 'setDb',
				paramList: 'server, service, options',
				params: [{
					name: 'server',
					type: 'String',
					description: 'istsos.Server instance',
					props: []
				}, {
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance.',
					props: []
				}, {
					name: 'options',
					type: 'istsos.Service',
					description: 'istsos.Service instance.',
					props: [{
						name: 'dbname',
						type: 'String',
						description: 'PostgreSQL database name'
					}, {
						name: 'host',
						type: 'String',
						description: 'PostgreSQL database host'
					}, {
						name: 'user',
						type: 'String',
						description: 'Connection username'
					}, {
						name: 'password',
						type: 'String',
						description: 'Connection password'
					}, {
						name: 'port',
						type: 'integer',
						description: 'Port'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_DATABASE\''
			}, {
				name: 'ValidateDb',
				paramList: 'server',
				params: [{
					name: 'server',
					type: 'istsos.Server',
					description: 'istsos.Server instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'VALIDATE_DB\''
			}, {
				name: 'getDbJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}]
		}, {
			name: 'istsos.Configuration',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.Server',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.Service',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.Offering',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.ProcedureBase',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.Procedure',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.VirtualProcedure',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.Output',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.ObservedProperty',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.DataQuality',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.UnitOfMeasure',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.EventTypes',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.EventEmitter',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}, {
			name: 'istsos.HttpAPI',
			description: 'Here goes class description',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'param description',
				props: {}
			}]
		}]

		list.goTo = function(state, data) {
			$state.go(state, {
				class: data.name,
				data: data
			})
		}
	})