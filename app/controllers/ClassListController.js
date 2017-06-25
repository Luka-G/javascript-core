angular.module('app')
	.controller('ClassListController', function($state, $timeout) {
		var list = this;
		$timeout(function() {
			$state.go('root')
		})

		list.handleCollaspes = function(index) {
			for (c in list.isCollapsed) {
				list.isCollapsed[c] = true;
			}
			list.isCollapsed[index] = !list.isCollapsed[index];
		}

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
			description: 'Class for instantiating istsos.Database objects, which contain database connection parameters',
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
				name: 'validateDb',
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
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.Database objects, which hold database connection parameters',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Configuration object',
				props: [{
					name: 'serviceName',
					type: 'String',
					description: 'Service name. If not provided, value "default", will be used.'
				}, {
					name: 'server',
					type: 'istsos.Server',
					description: 'istsos.Server instance'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'serviceName',
				type: 'String'
			}, {
				name: 'server',
				type: 'istsos.Server'
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
				name: 'getConf',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'CONFIGSECTIONS\''
			}, {
				name: 'getProvider',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'PROVIDER\''
			}, {
				name: 'updateProvider',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Object which contains new provider information',
					props: [{
						name: 'providername',
						type: 'String',
						description: 'Provider name'
					}, {
						name: 'providersite',
						type: 'String',
						description: 'Provider site'
					}, {
						name: 'contactname',
						type: 'String',
						description: 'Contact name'
					}, {
						name: 'contactposition',
						type: 'String',
						description: 'Contact position'
					}, {
						name: 'contactvoice',
						type: 'String',
						description: 'Contact voice'
					}, {
						name: 'contactfax',
						type: 'String',
						description: 'Contact fax'
					}, {
						name: 'contactemail',
						type: 'String',
						description: 'Contact email'
					}, {
						name: 'contactdeliverypoint',
						type: 'String',
						description: 'Contact delivery point'
					}, {
						name: 'contactpostalcode',
						type: 'String',
						description: 'Postal code'
					}, {
						name: 'contactcity',
						type: 'String',
						description: 'City'
					}, {
						name: 'contactadminarea',
						type: 'String',
						description: 'Administrative area'
					}, {
						name: 'contactcountry',
						type: 'String',
						description: 'Country'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_PROVIDER\''
			}, {
				name: 'getIdentification',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'IDENTIFICATION\''
			}, {
				name: 'updateIdentification',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Object which contains new identification information',
					props: [{
						name: 'title',
						type: 'String',
						description: 'Title'
					}, {
						name: 'abstract',
						type: 'String',
						description: 'Abstract'
					}, {
						name: 'urnversion',
						type: 'String',
						description: 'URN version'
					}, {
						name: 'authority',
						type: 'String',
						description: 'Authority'
					}, {
						name: 'fees',
						type: 'String',
						description: 'Fees'
					}, {
						name: 'keywords',
						type: 'String',
						description: 'Keywords'
					}, {
						name: 'accessconstrains',
						type: 'String',
						description: 'Access constrains'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_IDENTIFICATION\''
			}, {
				name: 'getMqtt',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'MQTT\''
			}, {
				name: 'updateMqtt',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Object which contains new mqtt information',
					props: [{
						name: 'brokerpassword',
						type: 'String',
						description: 'Broker password'
					}, {
						name: 'brokeruser',
						type: 'String',
						description: 'Broker user'
					}, {
						name: 'brokertopic',
						type: 'String',
						description: 'Broker topic'
					}, {
						name: 'brokerurl',
						type: 'String',
						description: 'Broker URL'
					}, {
						name: 'brokerport',
						type: 'String',
						description: 'Broker port'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_MQTT\''
			}, {
				name: 'getCrs',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'CRS\''
			}, {
				name: 'updateCrs',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Object which contains new coordinate reference system information',
					props: [{
						name: 'zaxisname',
						type: 'String',
						description: 'z-axis name'
					}, {
						name: 'xaxisname',
						type: 'String',
						description: 'x axis name'
					}, {
						name: 'yaxisname',
						type: 'String',
						description: 'y-axis name'
					}, {
						name: 'allowedepsg',
						type: 'String',
						description: 'Allowed EPSG codes'
					}, {
						name: 'istsosepsg',
						type: 'String',
						description: 'IstSOS EPSG code'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_CRS\''
			}, {
				name: 'getObservationConf',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'OBSERVATION_CONF\''
			}, {
				name: 'updateObservationConf',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Object which contains new observation configuration information',
					props: [{
						name: 'correct_qi',
						type: 'String',
						description: 'Correct QI'
					}, {
						name: 'stat_qi',
						type: 'String',
						description: 'StatQI'
					}, {
						name: 'defaultqi',
						type: 'String',
						description: 'Default QI'
					}, {
						name: 'aggregatenodataqi',
						type: 'String',
						description: 'Aggregate NO_DATA QI'
					}, {
						name: 'maxgoperiod',
						type: 'String',
						description: 'Max GO period'
					}, {
						name: 'transactional_log',
						type: 'String',
						description: 'Transational log'
					}, {
						name: 'aggregatenodata',
						type: 'String',
						description: 'Aggregate NO_DATA'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_OBSERVATION_CONF\''
			}, {
				name: 'getProxy',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'PROXY\''
			}, {
				name: 'updateProxy',
				paramList: 'newUrl',
				params: [{
					name: 'newUrl',
					type: 'String',
					description: 'New proxy URL',
					props: []
				}],
				return: 'Promise',
				fires: '\'UPDATE_PROXY\''
			}, {
				name: 'getEpsgCodes',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'EPSG_CODES\''
			}]
		}, {
			name: 'istsos.Server',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.Server objects, which contain list of services and information about the server.',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Server configuration object',
				props: [{
					name: 'name',
					type: 'String',
					description: 'Server name'
				}, {
					name: 'url',
					type: 'String',
					description: 'Server URL - i.e. \'http://<server>/istsos/\''
				}, {
					name: 'defaultDb',
					type: 'istsos.Database',
					description: 'istsos.Database instance'
				}, {
					name: 'config',
					type: 'istsos.Configuraion',
					description: 'istsos.Configuration instance. If not provided, new instance with default serviceName will be created.'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'name',
				type: 'String'
			}, {
				name: 'url',
				type: 'String'
			}, {
				name: 'defaultDb',
				type: 'istsos.Database'
			}, {
				name: 'config',
				type: 'istsos.Configuration'
			}, {
				name: 'loginConfig',
				type: 'Object'
			}, {
				name: 'services',
				type: 'Array<istsos.Service>'
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
				name: 'setLoginConfig',
				paramList: 'username, password',
				params: [{
					name: 'username',
					type: 'String',
					description: 'IstSOS server username',
					props: []
				}, {
					name: 'password',
					type: 'String',
					description: 'IstSOS server password',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'removeLoginConfig',
				paramList: '',
				params: [],
				return: 'void',
				fires: ''
			}, {
				name: 'getLoginConfig',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'getService',
				paramList: 'service',
				params: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'SERVICE\''
			}, {
				name: 'addService',
				paramList: 'service',
				params: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerService',
				paramList: 'service',
				params: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_SERVICE\''
			}, {
				name: 'deleteService',
				paramList: 'service',
				params: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'DELETE_SERVICE\''
			}, {
				name: 'getStatus',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'STATUS\''
			}, {
				name: 'getAboutInfo',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'ABOUT\''
			}, {
				name: 'getConfig',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'CONFIGURATION\''
			}, {
				name: 'getConfigProperty',
				paramList: '',
				params: [],
				return: 'istsos.Configuration',
				fires: ''
			}, {
				name: 'getServices',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'SERVICES\''
			}, {
				name: 'getServicesProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Service>',
				fires: ''
			}, {
				name: 'getDefaultDb',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DATABASE\''
			}, {
				name: 'getDefaultDbProperty',
				paramList: '',
				params: [],
				return: 'istsos.Database',
				fires: ''
			}, {
				name: 'getUrl',
				paramList: '',
				params: [],
				return: 'String',
				fires: ''
			}]
		}, {
			name: 'istsos.Service',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.Service objects. These objects can perform getObservation requests.When istsos.Service object is created, temporary offering (instance of istsos.Offering class with name "temporary") is created automatically.',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Service configuration object',
				props: [{
					name: 'name',
					type: 'String',
					description: 'Service name'
				}, {
					name: 'otp_db',
					type: 'istsos.Database',
					description: 'istsos.Database istance. If not provided, server default database will be used'
				}, {
					name: 'opt_epsg',
					type: 'integer',
					description: 'EPSG code.If not provided, null value will be used.'
				}, {
					name: 'opt_config',
					type: 'istsos.Configuraion',
					description: 'istsos.Configuration instance. If not provided, new instance with this service name will be created.'
				}, {
					name: 'server',
					type: 'istsos.Server',
					description: 'istsos.Server instance'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'name',
				type: 'String'
			}, {
				name: 'db',
				type: 'istsos.Database'
			}, {
				name: 'epsg',
				type: 'integer'
			}, {
				name: 'config',
				type: 'istsos.Config'
			}, {
				name: 'server',
				type: 'istsos.Server'
			}, {
				name: 'offerings',
				type: 'Array<istsos.Offering>'
			}, {
				name: 'procedures',
				type: 'Array<istsos.Procedure>'
			}, {
				name: 'virtualProcedures',
				type: 'Array<istsos.VirtualProcedure>'
			}, {
				name: 'observedProperties',
				type: 'Array<istsos.ObservedProperty>'
			}, {
				name: 'uoms',
				type: 'Array<istsos.UnitOfMeasure>'
			}, {
				name: 'dataQualities',
				type: 'Array<istsos.DataQuality>'
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
				name: 'getServiceJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'getOfferingsProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Offering>',
				fires: ''
			}, {
				name: 'getProceduresProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Procedure>',
				fires: ''
			}, {
				name: 'getVirtualProceduresProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.VirtualProcedure>',
				fires: ''
			}, {
				name: 'getObservedPropertiesProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.ObservedProperty>',
				fires: ''
			}, {
				name: 'getUomsProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.UnitOfMeasure>',
				fires: ''
			}, {
				name: 'getDataQualitiesProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.DataQuality>',
				fires: ''
			}, {
				name: 'addOffering',
				paramList: 'offering',
				params: [{
					name: 'offering',
					type: 'istsos.Offering',
					description: 'istsos.Offering instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerOffering',
				paramList: 'offering',
				params: [{
					name: 'offering',
					type: 'istsos.Offering',
					description: 'istsos.Offering instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_OFFERING\''
			}, {
				name: 'getOfferingNames',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'OFFERING_NAMES\''
			}, {
				name: 'getOfferings',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'OFFERING_LIST\''
			}, {
				name: 'addProcedure',
				paramList: 'procedure',
				params: [{
					name: 'procedure',
					type: 'istsos.Procedure',
					description: 'istsos.Procedure instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerProcedure',
				paramList: 'procedure',
				params: [{
					name: 'procedure',
					type: 'istsos.Procedure',
					description: 'istsos.Procedure instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_PROCEDURE\''
			}, {
				name: 'getProcedure',
				paramList: '',
				params: [{
					name: 'procedure',
					type: 'istsos.Procedure',
					description: 'istsos.Procedure instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'PROCEDURE\''
			}, {
				name: 'getProcedures',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'PROCEDURES\''
			}, {
				name: 'addVirtualProcedure',
				paramList: 'v_procedure',
				params: [{
					name: 'v_procedure',
					type: 'istsos.VirtualProcedure',
					description: 'istsos.VirtualProcedure instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerVirtualProcedure',
				paramList: 'v_procedure',
				params: [{
					name: 'v_procedure',
					type: 'istsos.VirtualProcedure',
					description: 'istsos.VirtualProcedure instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_VIRTUAL_PROCEDURE\''
			}, {
				name: 'getVirtualProcedure',
				paramList: 'v_procedure',
				params: [{
					name: 'v_procedure',
					type: 'istsos.VirtualProcedure',
					description: 'istsos.VirtualProcedure instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'VIRTUAL_PROCEDURE\''
			}, {
				name: 'getVirtualProcedures',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'VIRTUAL_PROCEDURES\''
			}, {
				name: 'addObservedProperty',
				paramList: 'property',
				params: [{
					name: 'property',
					type: 'istsos.ObservedProperty',
					description: 'istsos.ObservedProperty instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerObservedProperty',
				paramList: 'property',
				params: [{
					name: 'property',
					type: 'istsos.ObservedProperty',
					description: 'istsos.ObservedProperty instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_OBSERVED_PROPERTY\''
			}, {
				name: 'getObservedProperty',
				paramList: 'property',
				params: [{
					name: 'property',
					type: 'istsos.ObservedProperty',
					description: 'istsos.ObservedProperty instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'OBSERVED_PROPERTY\''
			}, {
				name: 'getObservedProperties',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'OBSERVED_PROPERTIES\''
			}, {
				name: 'addUom',
				paramList: 'uom',
				params: [{
					name: 'uom',
					type: 'istsos.UnitOfMeasure',
					description: 'istsos.UnitOfMeasure instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerUom',
				paramList: 'uom',
				params: [{
					name: 'uom',
					type: 'istsos.UnitOfMeasure',
					description: 'istsos.UnitOfMeasure instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_UOM\''
			}, {
				name: 'getUom',
				paramList: 'uom',
				params: [{
					name: 'uom',
					type: 'istsos.UnitOfMeasure',
					description: 'istsos.UnitOfMeasure instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'UOM\''
			}, {
				name: 'getUoms',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'UOMS\''
			}, {
				name: 'addDataQuality',
				paramList: 'dataQuality',
				params: [{
					name: 'dataQuality',
					type: 'istsos.DataQuality',
					description: 'istsos.DataQuality instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'registerDataQuality',
				paramList: 'dataQuality',
				params: [{
					name: 'dataQuality',
					type: 'istsos.DataQuality',
					description: 'istsos.DataQuality instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'NEW_DATAQUALITY\''
			}, {
				name: 'getUom',
				paramList: 'dataQuality',
				params: [{
					name: 'dataQuality',
					type: 'istsos.DataQuality',
					description: 'istsos.DataQuality instance',
					props: []
				}],
				return: 'Promise',
				fires: '\'DATAQUALITY\''
			}, {
				name: 'getDataQualities',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DATAQUALITIES\''
			}, {
				name: 'getSystemTypes',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'SYSTEM_TYPES\''
			}, {
				name: 'getDatabaseProperty',
				paramList: '',
				params: [],
				return: 'istsos.Database',
				fires: ''
			}, {
				name: 'getDatabase',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DATABASE\''
			}, {
				name: 'getObservations',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Get observations configuration object',
					props: [{
						name: 'offering',
						type: 'istsos.Offering',
						description: 'istsos.Offering instance'
					}, {
						name: 'procedures',
						type: 'Array<istsos.Procedures | istsos.VirtualProcedures>',
						description: 'Array of istsos.Procedure and/or istsos.VirtualProcedure instances'
					}, {
						name: 'observedProperties',
						type: 'Array<istsos.ObservedProperty>',
						description: 'Array of istsos.ObservedProperty instances'
					}, {
						name: 'beginTime',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}, {
						name: 'end',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}]
				}],
				return: 'Promise',
				fires: '\'GETOBSERVATIONS\''
			}, {
				name: 'getObservationsWithAggregation',
				paramList: 'options, aggregationConfig',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Get observations configuration object',
					props: [{
						name: 'offering',
						type: 'istsos.Offering',
						description: 'istsos.Offering instance'
					}, {
						name: 'procedures',
						type: 'Array<istsos.Procedures | istsos.VirtualProcedures>',
						description: 'Array of istsos.Procedure and/or istsos.VirtualProcedure instances'
					}, {
						name: 'observedProperties',
						type: 'Array<istsos.ObservedProperty>',
						description: 'Array of istsos.ObservedProperty instances'
					}, {
						name: 'beginTime',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}, {
						name: 'end',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}]
				}, {
					name: 'aggregationConfig',
					type: 'Object',
					description: 'Aggregation configuration object',
					props: [{
						name: 'aggFunc',
						type: 'String',
						description: 'Aggregate function. Should be "MAX", "MIN", "SUM" OR "AVG"'
					}, {
						name: 'aggInterval',
						type: 'String',
						description: 'Aggregate interval - e.g. "P1DT" is 1 day or "PT24H" is 24H...'
					}, {
						name: 'aggNoData',
						type: 'integer',
						description: 'Aggregate NO_DATA value'
					}, {
						name: 'aggNoDataQI',
						type: 'integer',
						description: 'Aggregate NO_DATA QI'
					}]
				}],
				return: 'Promise',
				fires: '\'GETOBSERVATIONS_AGG\''
			}, {
				name: 'getObservationsSimplified',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Get observations configuration object',
					props: [{
						name: 'offering',
						type: 'istsos.Offering',
						description: 'istsos.Offering instance'
					}, {
						name: 'procedures',
						type: 'Array<istsos.Procedures | istsos.VirtualProcedures>',
						description: 'Array of istsos.Procedure and/or istsos.VirtualProcedure instances'
					}, {
						name: 'observedProperties',
						type: 'Array<istsos.ObservedProperty>',
						description: 'Array of istsos.ObservedProperty instances'
					}, {
						name: 'beginTime',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}, {
						name: 'end',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}]
				}],
				return: 'Promise',
				fires: '\'GETOBSERVATIONS\''
			}, {
				name: 'getObservationsByQualityIndexConstraint',
				paramList: 'options, constraintConfig',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Get observations configuration object',
					props: [{
						name: 'offering',
						type: 'istsos.Offering',
						description: 'istsos.Offering instance'
					}, {
						name: 'procedures',
						type: 'Array<istsos.Procedure | istsos.VirtualProcedure>',
						description: 'Array of istsos.Procedure and/or istsos.VirtualProcedure instances'
					}, {
						name: 'observedProperties',
						type: 'Array<istsos.ObservedProperty>',
						description: 'Array of istsos.ObservedProperty instances'
					}, {
						name: 'beginTime',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}, {
						name: 'end',
						type: 'istsos.Date | String',
						description: 'istsos.Date instance or date in ISO 8601 String format'
					}]
				}, {
					name: 'constraintConfig',
					type: 'Object',
					description: 'Constraint configuration object',
					props: [{
						name: 'type',
						type: 'String',
						description: 'Should be "lessThan", "lessThanAndEqual", "equal", "greaterThanAndEqual", "greaterThan" OR "between"'
					}, {
						name: 'quality',
						type: 'integer | Array<integer>(2)',
						description: 'Constraint value of integer type. In case of constraint type "between", should be array of 2 integer elements representing from-to values.'
					}]
				}],
				return: 'Promise',
				fires: '\'GETOBSERVATIONS_BY_QUALITY\''
			}, {
				name: 'getFeatureCollection',
				paramList: 'opt_options',
				description: 'Optional configuration object - key-value filters',
				params: [{
					name: 'opt_options',
					type: 'Object',
					description: 'Optional configuration object - key-value filters',
					props: [{
						name: 'opt_epsg',
						type: 'integer',
						description: 'EPSG code'
					}, {
						name: 'opt_offering',
						type: 'istsos.Offering',
						description: 'istsos.Offering instance'
					}, {
						name: 'opt_procedure',
						type: 'istsos.Procedure | istsos.VirtualProcedure',
						description: 'istsos.Procedure or istsos.VirtualProcedure instance'
					}]
				}],
				return: 'Promise',
				fires: '\'GEOJSON\''
			}]
		}, {
			name: 'istsos.Offering',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.Offering objects. This objects are containers for procedures.',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Offering configuration object',
				props: [{
					name: 'offeringName',
					type: 'String',
					description: 'Name of the offering'
				}, {
					name: 'offeringDescription',
					type: 'String',
					description: 'Offering description. If not provided, value "" will be used'
				}, {
					name: 'active',
					type: 'boolean',
					description: 'Offering activity status'
				}, {
					name: 'expirationDate',
					type: 'istsos.Date',
					description: 'istsos.Date instance. If not provided, value "" will be used'
				}, {
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'offeringName',
				type: 'String'
			}, {
				name: 'offeringDescription',
				type: 'String'
			}, {
				name: 'active',
				type: 'boolean'
			}, {
				name: 'expirationDate',
				type: 'String'
			}, {
				name: 'service',
				type: 'istsos.Service'
			}, {
				name: 'memberProcedures',
				type: 'Array<istsos.Procedure | istsos.VirtualProcedure>'
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
				name: 'addProcedure',
				paramList: 'procedure',
				params: [{
					name: 'procedure',
					type: 'istsos.Procedure | istsos.VirtualProcedure',
					description: 'istsos.Procedure or istsos.VirtualProcedure instance',
					props: []
				}],
				return: 'void',
				fires: ''
			}, {
				name: 'updateOffering',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Offering configuration object',
					props: [{
						name: 'newName',
						type: 'String',
						description: 'New offering name'
					}, {
						name: 'newDescription',
						type: 'String',
						description: 'New offering description'
					}, {
						name: 'newActive',
						type: 'boolean',
						description: 'New offering activity status'
					}, {
						name: 'expirationDate',
						type: 'istsos.Date',
						description: 'New offering expiration date'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_OFFERING\''
			}, {
				name: 'deleteOffering',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_OFFERING\''
			}, {
				name: 'getMemberProceduresProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Procedure | istsos.VirtualProcedure>',
				fires: ''
			}, {
				name: 'getMemberProcedures',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'MEMBERLIST\''
			}, {
				name: 'getNonMemberProcedures',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'NONMEMBERLIST\''
			}, {
				name: 'getOfferingJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}]
		}, {
			name: 'istsos.ProcedureBase',
			superClass: 'istsos.EventEmitter',
			description: 'Abstract class. Istsos.Procedure and istsos.VirtualProcedure inherit properties and methods from this class. ',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'ProcedureBase configuration object',
				props: [{
					name: 'name',
					type: 'String',
					description: 'Name of the procedure'
				}, {
					name: 'description',
					type: 'String',
					description: 'Procedure description. If not provided, value "" will be used'
				}, {
					name: 'keywords',
					type: 'String',
					description: 'Comma-separated keywords related to the procedure'
				}, {
					name: 'foi_name',
					type: 'String',
					description: 'Feature of interest name'
				}, {
					name: 'epsg',
					type: 'integer',
					description: 'EPSG code'
				}, {
					name: 'x',
					type: 'float',
					description: 'X coordinate'
				}, {
					name: 'y',
					type: 'float',
					description: 'Y coordinate'
				}, {
					name: 'z',
					type: 'float',
					description: 'Z coordinate'
				}, {
					name: 'outputs',
					type: 'Array<istsos.Output>',
					description: 'Array of outputs related to the procedure'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'name',
				type: 'String'
			}, {
				name: 'description',
				type: 'String'
			}, {
				name: 'keywords',
				type: 'String'
			}, {
				name: 'foi_name',
				type: 'String'
			}, {
				name: 'epsg',
				type: 'integer'
			}, {
				name: 'coordinates',
				type: 'Array<float>'
			}, {
				name: 'outputs',
				type: 'Array<istsos.Output>'
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
				name: 'getOutputsProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Output>',
				fires: ''
			}, {
				name: 'getProcedureBaseJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'createContactForm',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Contact form configuration object',
					props: [{
						name: 'individualName',
						type: 'String',
						description: 'Contact name'
					}, {
						name: 'voice',
						type: 'String',
						description: 'Contact voice'
					}, {
						name: 'fax',
						type: 'String',
						description: 'Contact fax'
					}, {
						name: 'email',
						type: 'String',
						description: 'Contact email'
					}, {
						name: 'web',
						type: 'String',
						description: 'Contact web'
					}, {
						name: 'deliveryPoint',
						type: 'String',
						description: 'Contact delivery point'
					}, {
						name: 'city',
						type: 'String',
						description: 'City'
					}, {
						name: 'administrativeArea',
						type: 'String',
						description: 'Administrative area'
					}, {
						name: 'postalCode',
						type: 'String',
						description: 'Postal code area'
					}, {
						name: 'country',
						type: 'String',
						description: 'Country'
					}]
				}],
				return: 'Object',
				fires: ''
			}, {
				name: 'getCapabilitiesUom',
				paramList: '',
				params: [],
				return: 'Array<String>',
				fires: ''
			}, {
				name: 'getCabailitiesJson',
				paramList: '',
				params: [],
				return: 'Array<Object>',
				fires: ''
			}, {
				name: 'getIdentificationNames',
				paramList: '',
				params: [],
				return: 'Array<Object>',
				fires: ''
			}]
		}, {
			name: 'istsos.Procedure',
			superClass: 'istsos.ProcedureBase',
			description: 'Class for instantiating istsos.Offering objects. This objects are containers for procedures.',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'ProcedureBase configuration object',
				props: [{
					name: 'name',
					type: 'String',
					description: 'Name of the procedure'
				}, {
					name: 'description',
					type: 'String',
					description: 'Procedure description. If not provided, value "" will be used'
				}, {
					name: 'keywords',
					type: 'String',
					description: 'Comma-separated keywords related to the procedure'
				}, {
					name: 'foi_name',
					type: 'String',
					description: 'Feature of interest name'
				}, {
					name: 'epsg',
					type: 'integer',
					description: 'EPSG code'
				}, {
					name: 'x',
					type: 'float',
					description: 'X coordinate'
				}, {
					name: 'y',
					type: 'float',
					description: 'Y coordinate'
				}, {
					name: 'z',
					type: 'float',
					description: 'Z coordinate'
				}, {
					name: 'outputs',
					type: 'Array<istsos.Output>',
					description: 'Array of outputs related to the procedure'
				}, {
					name: 'systemType',
					type: 'String',
					description: 'Procedure system type should equal "insitu-fixed-point" or "insitu-mobile-point".'
				}, {
					name: 'sensorType',
					type: 'String',
					description: 'Procedure sensor type. If not provided, value "" will be used.'
				}, {
					name: 'service',
					type: 'istsos.Service>',
					description: 'istsos.Service instance'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'name',
				type: 'String => INHERITED'
			}, {
				name: 'description',
				type: 'String => INHERITED'
			}, {
				name: 'keywords',
				type: 'String => INHERITED'
			}, {
				name: 'foi_name',
				type: 'String => INHERITED'
			}, {
				name: 'epsg',
				type: 'integer => INHERITED'
			}, {
				name: 'coordinates',
				type: 'Array<float> => INHERITED'
			}, {
				name: 'outputs',
				type: 'Array<istsos.Output> => INHERITED'
			}, {
				name: 'systemType',
				type: 'String',
			}, {
				name: 'sensorType',
				type: 'String',
			}, {
				name: 'service',
				type: 'istsos.Service>',
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
				name: 'getProcedureJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'updateProcedure',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Procedure configuration object',
					props: [{
						name: 'name',
						type: 'String',
						description: 'New name of the procedure'
					}, {
						name: 'description',
						type: 'String',
						description: 'New procedure description. If not provided, value "" will be used'
					}, {
						name: 'keywords',
						type: 'String',
						description: 'New comma-separated keywords related to the procedure'
					}, {
						name: 'foi_name',
						type: 'String',
						description: 'New feature of interest name'
					}, {
						name: 'epsg',
						type: 'integer',
						description: 'New epsg code'
					}, {
						name: 'coordinates',
						type: 'Array<float>',
						description: 'X, Y, Z coordinates'
					}, {
						name: 'outputs',
						type: 'Array<istsos.Output>',
						description: 'New array of outputs related to the procedure'
					}, {
						name: 'systemType',
						type: 'String',
						description: 'New procedure system type should equal "insitu-fixed-point" or "insitu-mobile-point". Otherwise, value null will be used'
					}, {
						name: 'sensorType',
						type: 'String',
						description: 'New procedure sensor type. If not provided, value "" will be used.'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_PROCEDURE\''
			}, {
				name: 'deleteProcedure',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_PROCEDURE\''
			}, {
				name: 'addMembershipToOffering',
				paramList: 'offering',
				params: [{
					name: 'offering',
					type: 'istsos.Offering',
					description: 'istsos.Offering instance'
				}],
				return: 'Promise',
				fires: '\'ADD_TO_OFFERING\''
			}, {
				name: 'removeMembershipFromOffering',
				paramList: 'offering',
				params: [{
					name: 'offering',
					type: 'istsos.Offering',
					description: 'istsos.Offering instance'
				}],
				return: 'Promise',
				fires: '\'REMOVE_FROM_OFFERING\''
			}, {
				name: 'getOutputsProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Output>',
				fires: ''
			}]
		}, {
			name: 'istsos.VirtualProcedure',
			superClass: 'istsos.ProcedureBase',
			description: 'Class for instantiating istsos.Offering objects. This objects are containers for procedures.',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'ProcedureBase configuration object',
				props: [{
					name: 'name',
					type: 'String',
					description: 'Name of the procedure'
				}, {
					name: 'description',
					type: 'String',
					description: 'Procedure description. If not provided, value "" will be used'
				}, {
					name: 'keywords',
					type: 'String',
					description: 'Comma-separated keywords related to the procedure'
				}, {
					name: 'foi_name',
					type: 'String',
					description: 'Feature of interest name'
				}, {
					name: 'epsg',
					type: 'integer',
					description: 'EPSG code'
				}, {
					name: 'x',
					type: 'float',
					description: 'X coordinate'
				}, {
					name: 'y',
					type: 'float',
					description: 'Y coordinate'
				}, {
					name: 'z',
					type: 'float',
					description: 'Z coordinate'
				}, {
					name: 'outputs',
					type: 'Array<istsos.Output>',
					description: 'Array of outputs related to the procedure'
				}, {
					name: 'systemType',
					type: 'String',
					description: 'Procedure system type should equal "insitu-fixed-point" or "insitu-mobile-point".'
				}, {
					name: 'sensorType',
					type: 'String',
					description: 'Procedure sensor type. If not provided, value "" will be used.'
				}, {
					name: 'service',
					type: 'istsos.Service>',
					description: 'istsos.Service instance'
				}, {
					name: 'code',
					type: 'String',
					description: 'Code will be stored as Object - e.g. {code: <String>}'
				}, {
					name: 'ratingCurve',
					type: 'Object',
					description: 'Rating curve object. If not provided, empty object will be used.'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'name',
				type: 'String => INHERITED'
			}, {
				name: 'description',
				type: 'String => INHERITED'
			}, {
				name: 'keywords',
				type: 'String => INHERITED'
			}, {
				name: 'foi_name',
				type: 'String => INHERITED'
			}, {
				name: 'epsg',
				type: 'integer => INHERITED'
			}, {
				name: 'coordinates',
				type: 'Array<float> => INHERITED'
			}, {
				name: 'outputs',
				type: 'Array<istsos.Output> => INHERITED'
			}, {
				name: 'systemType',
				type: 'String',
			}, {
				name: 'sensorType',
				type: 'String',
			}, {
				name: 'service',
				type: 'istsos.Service>',
			}, {
				name: 'code',
				type: 'Object',
			}, {
				name: 'ratingCurve',
				type: 'Object',
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
				name: 'getVirtualProcedureJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'updateVirtualProcedure',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Virtual procedure configuration object',
					props: [{
						name: 'name',
						type: 'String',
						description: 'New name of the virtual procedure'
					}, {
						name: 'description',
						type: 'String',
						description: 'New virtual procedure description. If not provided, value "" will be used'
					}, {
						name: 'keywords',
						type: 'String',
						description: 'New comma-separated keywords related to the virtual procedure'
					}, {
						name: 'foi_name',
						type: 'String',
						description: 'New feature of interest name'
					}, {
						name: 'epsg',
						type: 'integer',
						description: 'New epsg code'
					}, {
						name: 'coordinates',
						type: 'Array<float>',
						description: 'X, Y, Z coordinates'
					}, {
						name: 'outputs',
						type: 'Array<istsos.Output>',
						description: 'New array of outputs related to the virtual procedure'
					}, {
						name: 'systemType',
						type: 'String',
						description: 'New virtual procedure system type should equal "virtual". Otherwise, value null will be used'
					}, {
						name: 'sensorType',
						type: 'String',
						description: 'New virtual procedure sensor type. If not provided, value "" will be used.'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_V_PROCEDURE\''
			}, {
				name: 'deleteVirtualProcedure',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_V_PROCEDURE\''
			}, {
				name: 'addMembershipToOffering',
				paramList: 'offering',
				params: [{
					name: 'offering',
					type: 'istsos.Offering',
					description: 'istsos.Offering instance'
				}],
				return: 'Promise',
				fires: '\'ADD_TO_OFFERING\''
			}, {
				name: 'removeMembershipFromOffering',
				paramList: 'offering',
				params: [{
					name: 'offering',
					type: 'istsos.Offering',
					description: 'istsos.Offering instance'
				}],
				return: 'Promise',
				fires: '\'REMOVE_FROM_OFFERING\''
			}, {
				name: 'getOutputsProperty',
				paramList: '',
				params: [],
				return: 'Array<istsos.Output>',
				fires: ''
			}, {
				name: 'getCode',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'GET_CODE\''
			}, {
				name: 'registerCode',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'NEW_CODE\''
			}, {
				name: 'updateCode',
				paramList: 'newCode',
				params: [{
					name: 'newCode',
					type: 'Object',
					description: 'Code configuration object',
					props: [{
						name: 'code',
						type: 'String',
						description: 'New code'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_CODE\''
			}, {
				name: 'deleteCode',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_CODE\''
			}, {
				name: 'getCodeProperty',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'getRatingCurve',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'RATING_CURVE\''
			}, {
				name: 'registerRatingCurve',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'NEW_RATING_CURVE\''
			}, {
				name: 'deleteRatingCurve',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_RATING_CURVE\''
			}, {
				name: 'getRatingCurveProperty',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'getOutputsProperty',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}]
		}, {
			name: 'istsos.Output',
			superClass: '',
			description: 'Class for instantiating istsos.Output objects',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Output configuration object',
				props: [{
					name: 'property',
					type: 'istsos.ObservedProperty',
					description: 'istsos.ObservedProperty instance'
				}, {
					name: 'uom',
					type: 'istsos.UnitOfMeasure',
					description: 'istsos.UnitOfMeasure instance'
				}, {
					name: 'description',
					type: 'String',
					description: 'Output description. If not provided, value "" will be used.'
				}, {
					name: 'opt_constraintType',
					type: 'String',
					description: 'Should equal "between", "lessThan", "greaterThan" or "valueList"'
				}, {
					name: 'opt_constraintValue',
					type: 'Array<integer> | integer',
					description: 'In case of "between" or "valueList" constraint types, this value should be of Array type. Otherwise integer is required.'
				}]
			}],
			fields: [{
				name: 'property',
				type: 'istsos.ObservedProperty',
			}, {
				name: 'uom',
				type: 'istsos.UnitOfMeasure',
			}, {
				name: 'description',
				type: 'String',
			}, {
				name: 'constraint',
				type: 'Object',
			}],
			methods: [{
				name: 'getOutputJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}]
		}, {
			name: 'istsos.ObservedProperty',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.ObservedProperty objects, which contain information about subject of observation',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Observed property configuration object',
				props: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance'
				}, {
					name: 'observedName',
					type: 'String',
					description: 'Name of the observed property'
				}, {
					name: 'definitionUrn',
					type: 'String',
					description: 'Observed property definition URN'
				}, {
					name: 'observedDescr',
					type: 'String',
					description: 'Observed property description'
				}, {
					name: 'opt_constraintType',
					type: 'String',
					description: 'Should equal "between", "lessThan", "greaterThan" or "valueList"'
				}, {
					name: 'opt_value',
					type: 'Array<integer> | integer',
					description: 'In case of "between" or "valueList" constraint types, this value should be of Array type. Otherwise integer is required.'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'service',
				type: 'istsos.Service'
			}, {
				name: 'observedName',
				type: 'String'
			}, {
				name: 'definitionUrn',
				type: 'String'
			}, {
				name: 'observedDescr',
				type: 'String'
			}, {
				name: 'constraint',
				type: 'Object'
			}, {
				name: 'proceduresIncluded',
				type: 'Array<istsos.Procedure | istsos.VirtualProcedure>'
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
				name: 'updateProceduresIncluded',
				paramList: '',
				params: [],
				return: 'void',
				fires: ''
			}, {
				name: 'getProceduresIncluded',
				paramList: '',
				params: [],
				return: 'Array<istsos.Procedure | istsos.VirtualProcedure>',
				fires: ''
			}, {
				name: 'getObservedPropertyJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'updateObservedProperty',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Observed property configuration object',
					props: [{
						name: 'newPropertyName',
						type: 'String',
						description: 'New observed property name'
					}, {
						name: 'newDefinitionUrn',
						type: 'String',
						description: 'New observed property definition URN'
					}, {
						name: 'newPropertyDescr',
						type: 'String',
						description: 'New observed property description'
					}, {
						name: 'opt_constraintType',
						type: 'String',
						description: 'Should equal "between", "lessThan", "greaterThan" or "valueList"'
					}, {
						name: 'opt_value',
						type: 'Array<integer> | integer',
						description: 'In case of "between" or "valueList" constraint types, this value should be of Array type. Otherwise integer is required.'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_OBSERVED_PROPERTY\''
			}, {
				name: 'deleteObservedProperty',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_OBSERVED_PROPERTY\''
			}]
		}, {
			name: 'istsos.DataQuality',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.DataQuality objects, which contain information about data quality indexes',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Observed property configuration object',
				props: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance'
				}, {
					name: 'codeDQ',
					type: 'integer',
					description: 'Data quality code'
				}, {
					name: 'nameDQ',
					type: 'String',
					description: 'Data quality name'
				}, {
					name: 'descrDQ',
					type: 'String',
					description: 'Data quality description'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED'
			}, {
				name: 'service',
				type: 'istsos.Service',
			}, {
				name: 'codeDQ',
				type: 'integer',
			}, {
				name: 'nameDQ',
				type: 'String',
			}, {
				name: 'descrDQ',
				type: 'String',
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
				name: 'getDataQualityJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'updateDataQuality',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Data quality configuration object',
					props: [{
						name: 'codeDQ',
						type: 'integer',
						description: 'New data quality code'
					}, {
						name: 'nameDQ',
						type: 'String',
						description: 'New data quality name'
					}, {
						name: 'descrDQ',
						type: 'String',
						description: 'New data quality description'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_DATAQUALITY\''
			}, {
				name: 'deleteDataQuality',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_DATAQUALITY\''
			}]
		}, {
			name: 'istsos.UnitOfMeasure',
			superClass: 'istsos.EventEmitter',
			description: 'Class for instantiating istsos.UnitOfMeasure objects, which contain information about measurment units',
			params: [{
				param: 'options',
				type: 'Object',
				description: 'Observed property configuration object',
				props: [{
					name: 'service',
					type: 'istsos.Service',
					description: 'istsos.Service instance'
				}, {
					name: 'name',
					type: 'String',
					description: 'Unit of measure name'
				}, {
					name: 'description',
					type: 'String',
					description: 'Unit of measure description. If not provided, value "" will be used.'
				}]
			}],
			fields: [{
				name: 'events',
				type: 'Object => INHERITED',
			}, {
				name: 'service',
				type: 'istsos.Service',
			}, {
				name: 'name',
				type: 'String',
			}, {
				name: 'description',
				type: 'String',
			}, {
				name: 'proceduresIncluded',
				type: 'Array<istsos.Procedure | istsos.VirtualProcedure>',
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
				name: 'updateProceduresIncluded',
				paramList: '',
				params: [],
				return: 'void',
				fires: ''
			}, {
				name: 'getUomJSON',
				paramList: '',
				params: [],
				return: 'Object',
				fires: ''
			}, {
				name: 'updateUom',
				paramList: 'options',
				params: [{
					name: 'options',
					type: 'Object',
					description: 'Unit of measure configuration object',
					props: [, {
						name: 'name',
						type: 'String',
						description: 'New unit of measure name'
					}, {
						name: 'description',
						type: 'String',
						description: 'New unit of measure description.'
					}]
				}],
				return: 'Promise',
				fires: '\'UPDATE_UOM\''
			}, {
				name: 'deleteUom',
				paramList: '',
				params: [],
				return: 'Promise',
				fires: '\'DELETE_UOM\''
			}]
		}, {
			name: 'istsos.EventTypes',
			eventTypes: true
		}, {
			name: 'istsos.EventEmitter',
			superClass: '',
			description: 'Here goes class description',
			params: [],
			fields: [{
				name: 'events',
				type: 'Object',
			}],
			methods: [{
				name: 'fire',
				paramList: 'event, data',
				params: [{
					name: 'event',
					type: 'String',
					description: 'Event type, that must match one of the supported types in istsos.EventTypes object',
					props: []
				}, {
					name: 'data',
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
			}]
		}, {
			name: 'istsos.HttpAPI',
			http: true,

			methods: []
		}]

		list.goTo = function(state, data) {
			$state.go(state, {
				class: data.name,
				data: data
			})
		}

		list.goToRoot = function() {
			for (c in list.isCollapsed) {
				list.isCollapsed[c] = true;
			}
			$state.go('root')
		}
	})