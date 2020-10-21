/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_VasProtocol = require("../payments/VasProtocol");
var payments_VasDataType = require("../payments/VasDataType");

/**
* @constructor
* @memberof payments
*/
var VasServiceProvider = function() {
  this._class_ = VasServiceProvider;
  this.providerPackage = undefined;
  this.protocolId = undefined;
  this.supportedServices = undefined;
  this.protocolConfig = undefined;
  this.pushUrl = undefined;
  this.pushTitle = undefined;
};


/**
* Set the field value
* Unique package name identifier of provider
*
* @memberof payments.VasServiceProvider
* @param {String} providerPackage 
*/
VasServiceProvider.prototype.setProviderPackage = function(providerPackage) {
  this.providerPackage = providerPackage;
};

/**
* Get the field value
* Unique package name identifier of provider
* @memberof payments.VasServiceProvider
* @return {String} 
*/
VasServiceProvider.prototype.getProviderPackage = function() {
  return this.providerPackage;
};

/**
* Set the field value
* @memberof payments.VasServiceProvider
* @param {payments.VasProtocol} protocolId 
*/
VasServiceProvider.prototype.setProtocolId = function(protocolId) {
  this.protocolId = protocolId;
};

/**
* Get the field value
* @memberof payments.VasServiceProvider
* @return {payments.VasProtocol} 
*/
VasServiceProvider.prototype.getProtocolId = function() {
  return this.protocolId;
};

/**
* Set the field value
* Service types supported by this provider.
*
* @memberof payments.VasServiceProvider
* @param {Array.<payments.VasDataType>} supportedServices An array of 
*/
VasServiceProvider.prototype.setSupportedServices = function(supportedServices) {
  this.supportedServices = supportedServices;
};

/**
* Get the field value
* Service types supported by this provider.
* @memberof payments.VasServiceProvider
* @return {Array.<payments.VasDataType>} An array of 
*/
VasServiceProvider.prototype.getSupportedServices = function() {
  return this.supportedServices;
};

/**
* Set the field value
* protocol specific configuration
*
* @memberof payments.VasServiceProvider
* @param {Object.<String,String>} protocolConfig A map of <String> to <>
*/
VasServiceProvider.prototype.setProtocolConfig = function(protocolConfig) {
  this.protocolConfig = protocolConfig;
};

/**
* Get the field value
* protocol specific configuration
* @memberof payments.VasServiceProvider
* @return {Object.<String,String>} A map of <String> to <>
*/
VasServiceProvider.prototype.getProtocolConfig = function() {
  return this.protocolConfig;
};

/**
* Set the field value
* Populated for push use cases (e.g. send signup URL).
*
* @memberof payments.VasServiceProvider
* @param {String} pushUrl 
*/
VasServiceProvider.prototype.setPushUrl = function(pushUrl) {
  this.pushUrl = pushUrl;
};

/**
* Get the field value
* Populated for push use cases (e.g. send signup URL).
* @memberof payments.VasServiceProvider
* @return {String} 
*/
VasServiceProvider.prototype.getPushUrl = function() {
  return this.pushUrl;
};

/**
* Set the field value
* Optionally populated for vas push use cases (e.g. send signup URL).
*
* @memberof payments.VasServiceProvider
* @param {String} pushTitle 
*/
VasServiceProvider.prototype.setPushTitle = function(pushTitle) {
  this.pushTitle = pushTitle;
};

/**
* Get the field value
* Optionally populated for vas push use cases (e.g. send signup URL).
* @memberof payments.VasServiceProvider
* @return {String} 
*/
VasServiceProvider.prototype.getPushTitle = function() {
  return this.pushTitle;
};

/**
* @memberof payments.VasServiceProvider
* @private
*/
VasServiceProvider.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

VasServiceProvider.prototype.toString = function() {
  return JSON.stringify(this);
};

VasServiceProvider._meta_ =  {fields:  {}};
VasServiceProvider._meta_._class_ =  VasServiceProvider;
VasServiceProvider._meta_.fields["providerPackage"] = {};
VasServiceProvider._meta_.fields["providerPackage"].type = String;
VasServiceProvider._meta_.fields["protocolId"] = {};
VasServiceProvider._meta_.fields["protocolId"].type = payments_VasProtocol;
VasServiceProvider._meta_.fields["supportedServices"] = {};
VasServiceProvider._meta_.fields["supportedServices"].type = Array;
VasServiceProvider._meta_.fields["supportedServices"].elementType = payments_VasDataType;
VasServiceProvider._meta_.fields["protocolConfig"] = {};
VasServiceProvider._meta_.fields["protocolConfig"].type = Object;
VasServiceProvider._meta_.fields["pushUrl"] = {};
VasServiceProvider._meta_.fields["pushUrl"].type = String;
VasServiceProvider._meta_.fields["pushTitle"] = {};
VasServiceProvider._meta_.fields["pushTitle"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VasServiceProvider;
}
