
/**
 * Event types recognized by IstSOS core JavaScript library
 * @type {Object}
 */
export var EventTypes = {
   LOGIN: 'loginReceived',
   ABOUT: 'aboutReceived',
   STATUS: 'statusReceived',
   CONFIGSECTIONS: 'configSectionsReceived',
   PROVIDER: 'providerReceived',
   UPDATE_PROVIDER: 'PUT ProviderReceived',
   IDENTIFICATION: 'identificationReceived',
   UPDATE_IDENTIFICATION: 'PUT identificationReceived',
   MQTT: 'mqttReceived',
   UPDATE_MQTT: 'PUT mqttReceived',
   CRS: 'crsReceived',
   UPDATE_CRS: 'PUT crsReceived',
   OBSERVATION_CONF: 'observationConfigurationReceived',
   UPDATE_OBSERVATION_CONF: 'PUT observationConfigurationReceived',
   PROXY: 'proxyReceived',
   UPDATE_PROXY: 'PUT proxyReceived',
   SERVICE: 'serviceReceived',
   SERVICES: 'servicesListReceived',
   NEW_SERVICE: 'POST serviceReceived',
   DELETE_SERVICE: 'DELETE serviceReceived',
   DATABASE: 'databaseReceived',
   UPDATE_DATABASE: 'PUT databaseReceived',
   VALIDATE_DB: 'POST validateDbReceived',
   EPSG_CODES: 'epsgsReceived',
   SYSTEM_TYPES: 'systemTypesReceived',
   NEW_OFFERING: 'POST offeringReceived',
   OFFERING_NAMES: 'offeringNamesReceived',
   OFFERING_LIST: 'offeringListReceived',
   DELETE_OFFERING: 'DELETE offeringReceived',
   UPDATE_OFFERING: 'PUT offeringReceived',
   MEMBERLIST: 'memberlistReceived',
   NONMEMBERLIST: 'nonmemberlistReceived',
   OBSERVED_PROPERTIES: 'observedPropertiesReceived',
   OBSERVED_PROPERTY: 'observedPropertyReceived',
   NEW_OBSERVED_PROPERTY: 'POST observedPropertyReceived',
   UPDATE_OBSERVED_PROPERTY: 'PUT observedPropertyReceived',
   DELETE_OBSERVED_PROPERTY: 'DELETE observedPropertyReceived',
   DATAQUALITIES: 'dataQualitiesReceived',
   DATAQUALITY: 'dataQualityReceived',
   NEW_DATAQUALITY: 'POST dataQualityReceived',
   UPDATE_DATAQUALITY: 'PUT dataQualityReceived',
   DELETE_DATAQUALITY: 'DELETE dataQualityReceived',
   UOM: 'unitOfMeasureReceived',
   UOMS: 'unitsOfMeasureReceived',
   NEW_UOM: 'POST unitOfMeasureReceived',
   UPDATE_UOM: 'PUT unitOfMeasureReceived',
   DELETE_UOM: 'DELETE unitOfMeasureReceived',
   GET_CODE: 'codeReceived',
   NEW_CODE: 'POST codeReceived',
   UPDATE_CODE: 'PUT codeReceived',
   DELETE_CODE: 'DELETE codeReceived',
   RATING_CURVE: 'ratingCurveReceived',
   NEW_RATING_CURVE: 'POST ratingCurveReceived',
   DELETE_RATING_CURVE: 'DELETE ratingCurveReceived',
   NEW_PROCEDURE: 'POST procedureReceived',
   UPDATE_PROCEDURE: 'PUT procedureReceived',
   DELETE_PROCEDURE: 'DELETE procedureReceived',
   ADD_TO_OFFERING: 'POST addToOfferingReceived',
   REMOVE_FROM_OFFERING: 'DELETE removeFromOfferingReceived',
   VIRTUAL_PROCEDURES: 'virtualProceduresReceived',
   VIRTUAL_PROCEDURE: 'virtualProcedureReceived',
   NEW_VIRTUAL_PROCEDURE: 'POST virtualProcedureReceived',
   UPDATE_V_PROCEDURE: 'PUT virtualProcedureReceived',
   DELETE_V_PROCEDURE: 'DELETE virtualProcedureReceived',
   PROCEDURES: 'proceduresReceived',
   PROCEDURE: 'procedureReceived',
   GEOJSON: 'geojsonReceived',
   GETOBSERVATIONS: 'getobservationsReceived',
   GETOBSERVATIONS_AGG: 'getobservationsAggregationReceived',
   GETOBSERVATIONS_SIMPLIFIED: 'getobservationsDataReceived',
   GETOBSERVATIONS_BY_QUALITY: 'getObservationsByQualityIndexReceived'
};