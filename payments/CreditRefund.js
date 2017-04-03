/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var apps_AppTracking = require("../apps/AppTracking");
var base_Reference = require("../base/Reference");
var payments_GermanInfo = require("../payments/GermanInfo");

/**
* @constructor
* @memberof payments
*/
var CreditRefund = function() {
  this._class_ = CreditRefund;
  this.id = undefined;
  this.orderRef = undefined;
  this.createdTime = undefined;
  this.clientCreatedTime = undefined;
  this.credit = undefined;
  this.employee = undefined;
  this.germanInfo = undefined;
  this.appTracking = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof payments.CreditRefund
* @param {String} id 
*/
CreditRefund.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof payments.CreditRefund
* @return {String} 
*/
CreditRefund.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The order with which the refund is associated
*
* @memberof payments.CreditRefund
* @param {base.Reference} orderRef 
*/
CreditRefund.prototype.setOrderRef = function(orderRef) {
  this.orderRef = orderRef;
};

/**
* Get the field value
* The order with which the refund is associated
* @memberof payments.CreditRefund
* @return {base.Reference} 
*/
CreditRefund.prototype.getOrderRef = function() {
  return this.orderRef;
};

/**
* Set the field value
* The time when the refund was recorded on the server
*
* @memberof payments.CreditRefund
* @param {Number} createdTime must be a long integer
*/
CreditRefund.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* The time when the refund was recorded on the server
* @memberof payments.CreditRefund
* @return {Number} must be a long integer
*/
CreditRefund.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* The time when the refund was recorded on the client
*
* @memberof payments.CreditRefund
* @param {Number} clientCreatedTime must be a long integer
*/
CreditRefund.prototype.setClientCreatedTime = function(clientCreatedTime) {
  this.clientCreatedTime = clientCreatedTime;
};

/**
* Get the field value
* The time when the refund was recorded on the client
* @memberof payments.CreditRefund
* @return {Number} must be a long integer
*/
CreditRefund.prototype.getClientCreatedTime = function() {
  return this.clientCreatedTime;
};

/**
* Set the field value
* The credit with which the credit refund is associated
*
* @memberof payments.CreditRefund
* @param {base.Reference} credit 
*/
CreditRefund.prototype.setCredit = function(credit) {
  this.credit = credit;
};

/**
* Get the field value
* The credit with which the credit refund is associated
* @memberof payments.CreditRefund
* @return {base.Reference} 
*/
CreditRefund.prototype.getCredit = function() {
  return this.credit;
};

/**
* Set the field value
* @memberof payments.CreditRefund
* @param {base.Reference} employee 
*/
CreditRefund.prototype.setEmployee = function(employee) {
  this.employee = employee;
};

/**
* Get the field value
* @memberof payments.CreditRefund
* @return {base.Reference} 
*/
CreditRefund.prototype.getEmployee = function() {
  return this.employee;
};

/**
* Set the field value
* German region-specific information
*
* @memberof payments.CreditRefund
* @param {payments.GermanInfo|Null} germanInfo 
*/
CreditRefund.prototype.setGermanInfo = function(germanInfo) {
  this.germanInfo = germanInfo;
};

/**
* Get the field value
* German region-specific information
* @memberof payments.CreditRefund
* @return {payments.GermanInfo|Null} 
*/
CreditRefund.prototype.getGermanInfo = function() {
  return this.germanInfo;
};

/**
* Set the field value
* Tracking information for the app that created this payment.
*
* @memberof payments.CreditRefund
* @param {apps.AppTracking|Null} appTracking 
*/
CreditRefund.prototype.setAppTracking = function(appTracking) {
  this.appTracking = appTracking;
};

/**
* Get the field value
* Tracking information for the app that created this payment.
* @memberof payments.CreditRefund
* @return {apps.AppTracking|Null} 
*/
CreditRefund.prototype.getAppTracking = function() {
  return this.appTracking;
};

/**
* @memberof payments.CreditRefund
* @private
*/
CreditRefund.prototype.getMetaInfo = function(fieldName) {
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

CreditRefund.prototype.toString = function() {
  return JSON.stringify(this);
};

CreditRefund._meta_ =  {fields:  {}};
CreditRefund._meta_._class_ =  CreditRefund;
CreditRefund._meta_.fields["id"] = {};
CreditRefund._meta_.fields["id"].type = String;
CreditRefund._meta_.fields["orderRef"] = {};
CreditRefund._meta_.fields["orderRef"].type = base_Reference;
CreditRefund._meta_.fields["createdTime"] = {};
CreditRefund._meta_.fields["createdTime"].type = Number;
CreditRefund._meta_.fields["clientCreatedTime"] = {};
CreditRefund._meta_.fields["clientCreatedTime"].type = Number;
CreditRefund._meta_.fields["credit"] = {};
CreditRefund._meta_.fields["credit"].type = base_Reference;
CreditRefund._meta_.fields["employee"] = {};
CreditRefund._meta_.fields["employee"].type = base_Reference;
CreditRefund._meta_.fields["germanInfo"] = {};
CreditRefund._meta_.fields["germanInfo"].type = payments_GermanInfo;
CreditRefund._meta_.fields["appTracking"] = {};
CreditRefund._meta_.fields["appTracking"].type = apps_AppTracking;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CreditRefund;
}

