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
				name: 'registerProcedure',
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

		list.goToRoot = function() {
			for (c in list.isCollapsed) {
				list.isCollapsed[c] = true;
			}
			$state.go('root')
		}
	})