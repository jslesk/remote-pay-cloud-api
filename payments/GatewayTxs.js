/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Currency = require("../payments/Currency");
var payments_CardType = require("../payments/CardType");
var payments_CardEntryType = require("../payments/CardEntryType");
var payments_GatewayTxState = require("../payments/GatewayTxState");
var payments_GatewayTxType = require("../payments/GatewayTxType");

/**
* @constructor
* @memberof payments
*/
var GatewayTxs = function() {
  this._class_ = GatewayTxs;
  this.merchantGatewayId = undefined;
  this.clientId = undefined;
  this.amount = undefined;
  this.adjustAmount = undefined;
  this.taxAmount = undefined;
  this.tipAmount = undefined;
  this.currency = undefined;
  this.state = undefined;
  this.retries = undefined;
  this.type = undefined;
  this.entryType = undefined;
  this.responseCode = undefined;
  this.responseMessage = undefined;
  this.first4 = undefined;
  this.last4 = undefined;
  this.cardType = undefined;
  this.refnum = undefined;
  this.token = undefined;
  this.authcode = undefined;
  this.employeeId = undefined;
  this.extra = undefined;
  this.captured = undefined;
  this.swiperSerial = undefined;
  this.ksnPrefix = undefined;
  this.createdTime = undefined;
  this.modifiedTime = undefined;
  this.refundId = undefined;
  this.paymentRefundId = undefined;
};


/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} merchantGatewayId must be a long integer
*/
GatewayTxs.prototype.setMerchantGatewayId = function(merchantGatewayId) {
  this.merchantGatewayId = merchantGatewayId;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getMerchantGatewayId = function() {
  return this.merchantGatewayId;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} clientId 
*/
GatewayTxs.prototype.setClientId = function(clientId) {
  this.clientId = clientId;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getClientId = function() {
  return this.clientId;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} amount must be a long integer
*/
GatewayTxs.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} adjustAmount must be a long integer
*/
GatewayTxs.prototype.setAdjustAmount = function(adjustAmount) {
  this.adjustAmount = adjustAmount;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getAdjustAmount = function() {
  return this.adjustAmount;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} taxAmount must be a long integer
*/
GatewayTxs.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} tipAmount must be a long integer
*/
GatewayTxs.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {payments.Currency} currency 
*/
GatewayTxs.prototype.setCurrency = function(currency) {
  this.currency = currency;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {payments.Currency} 
*/
GatewayTxs.prototype.getCurrency = function() {
  return this.currency;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {payments.GatewayTxState} state 
*/
GatewayTxs.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {payments.GatewayTxState} 
*/
GatewayTxs.prototype.getState = function() {
  return this.state;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} retries must be a long integer
*/
GatewayTxs.prototype.setRetries = function(retries) {
  this.retries = retries;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getRetries = function() {
  return this.retries;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {payments.GatewayTxType} type 
*/
GatewayTxs.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {payments.GatewayTxType} 
*/
GatewayTxs.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {payments.CardEntryType} entryType 
*/
GatewayTxs.prototype.setEntryType = function(entryType) {
  this.entryType = entryType;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {payments.CardEntryType} 
*/
GatewayTxs.prototype.getEntryType = function() {
  return this.entryType;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} responseCode 
*/
GatewayTxs.prototype.setResponseCode = function(responseCode) {
  this.responseCode = responseCode;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getResponseCode = function() {
  return this.responseCode;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} responseMessage 
*/
GatewayTxs.prototype.setResponseMessage = function(responseMessage) {
  this.responseMessage = responseMessage;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getResponseMessage = function() {
  return this.responseMessage;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} first4 
*/
GatewayTxs.prototype.setFirst4 = function(first4) {
  this.first4 = first4;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getFirst4 = function() {
  return this.first4;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} last4 
*/
GatewayTxs.prototype.setLast4 = function(last4) {
  this.last4 = last4;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getLast4 = function() {
  return this.last4;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {payments.CardType} cardType 
*/
GatewayTxs.prototype.setCardType = function(cardType) {
  this.cardType = cardType;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {payments.CardType} 
*/
GatewayTxs.prototype.getCardType = function() {
  return this.cardType;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} refnum 
*/
GatewayTxs.prototype.setRefnum = function(refnum) {
  this.refnum = refnum;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getRefnum = function() {
  return this.refnum;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} token 
*/
GatewayTxs.prototype.setToken = function(token) {
  this.token = token;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getToken = function() {
  return this.token;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} authcode 
*/
GatewayTxs.prototype.setAuthcode = function(authcode) {
  this.authcode = authcode;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getAuthcode = function() {
  return this.authcode;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} employeeId 
*/
GatewayTxs.prototype.setEmployeeId = function(employeeId) {
  this.employeeId = employeeId;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getEmployeeId = function() {
  return this.employeeId;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} extra 
*/
GatewayTxs.prototype.setExtra = function(extra) {
  this.extra = extra;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getExtra = function() {
  return this.extra;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Boolean|Null} captured 
*/
GatewayTxs.prototype.setCaptured = function(captured) {
  this.captured = captured;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Boolean|Null} 
*/
GatewayTxs.prototype.getCaptured = function() {
  return this.captured;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} swiperSerial 
*/
GatewayTxs.prototype.setSwiperSerial = function(swiperSerial) {
  this.swiperSerial = swiperSerial;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getSwiperSerial = function() {
  return this.swiperSerial;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {String} ksnPrefix 
*/
GatewayTxs.prototype.setKsnPrefix = function(ksnPrefix) {
  this.ksnPrefix = ksnPrefix;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {String} 
*/
GatewayTxs.prototype.getKsnPrefix = function() {
  return this.ksnPrefix;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} createdTime must be a long integer
*/
GatewayTxs.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number} modifiedTime must be a long integer
*/
GatewayTxs.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number} must be a long integer
*/
GatewayTxs.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number|Null} refundId must be a long integer, 
*/
GatewayTxs.prototype.setRefundId = function(refundId) {
  this.refundId = refundId;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number|Null} must be a long integer, 
*/
GatewayTxs.prototype.getRefundId = function() {
  return this.refundId;
};

/**
* Set the field value
* @memberof payments.GatewayTxs
* @param {Number|Null} paymentRefundId must be a long integer, 
*/
GatewayTxs.prototype.setPaymentRefundId = function(paymentRefundId) {
  this.paymentRefundId = paymentRefundId;
};

/**
* Get the field value
* @memberof payments.GatewayTxs
* @return {Number|Null} must be a long integer, 
*/
GatewayTxs.prototype.getPaymentRefundId = function() {
  return this.paymentRefundId;
};

/**
* @memberof payments.GatewayTxs
* @private
*/
GatewayTxs.prototype.getMetaInfo = function(fieldName) {
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

GatewayTxs.prototype.toString = function() {
  return JSON.stringify(this);
};

GatewayTxs._meta_ =  {fields:  {}};
GatewayTxs._meta_._class_ =  GatewayTxs;
GatewayTxs._meta_.fields["merchantGatewayId"] = {};
GatewayTxs._meta_.fields["merchantGatewayId"].type = Number;
GatewayTxs._meta_.fields["clientId"] = {};
GatewayTxs._meta_.fields["clientId"].type = String;
GatewayTxs._meta_.fields["amount"] = {};
GatewayTxs._meta_.fields["amount"].type = Number;
GatewayTxs._meta_.fields["adjustAmount"] = {};
GatewayTxs._meta_.fields["adjustAmount"].type = Number;
GatewayTxs._meta_.fields["taxAmount"] = {};
GatewayTxs._meta_.fields["taxAmount"].type = Number;
GatewayTxs._meta_.fields["tipAmount"] = {};
GatewayTxs._meta_.fields["tipAmount"].type = Number;
GatewayTxs._meta_.fields["currency"] = {};
GatewayTxs._meta_.fields["currency"].type = payments_Currency;
GatewayTxs._meta_.fields["state"] = {};
GatewayTxs._meta_.fields["state"].type = payments_GatewayTxState;
GatewayTxs._meta_.fields["retries"] = {};
GatewayTxs._meta_.fields["retries"].type = Number;
GatewayTxs._meta_.fields["type"] = {};
GatewayTxs._meta_.fields["type"].type = payments_GatewayTxType;
GatewayTxs._meta_.fields["entryType"] = {};
GatewayTxs._meta_.fields["entryType"].type = payments_CardEntryType;
GatewayTxs._meta_.fields["responseCode"] = {};
GatewayTxs._meta_.fields["responseCode"].type = String;
GatewayTxs._meta_.fields["responseMessage"] = {};
GatewayTxs._meta_.fields["responseMessage"].type = String;
GatewayTxs._meta_.fields["first4"] = {};
GatewayTxs._meta_.fields["first4"].type = String;
GatewayTxs._meta_.fields["last4"] = {};
GatewayTxs._meta_.fields["last4"].type = String;
GatewayTxs._meta_.fields["cardType"] = {};
GatewayTxs._meta_.fields["cardType"].type = payments_CardType;
GatewayTxs._meta_.fields["refnum"] = {};
GatewayTxs._meta_.fields["refnum"].type = String;
GatewayTxs._meta_.fields["token"] = {};
GatewayTxs._meta_.fields["token"].type = String;
GatewayTxs._meta_.fields["authcode"] = {};
GatewayTxs._meta_.fields["authcode"].type = String;
GatewayTxs._meta_.fields["employeeId"] = {};
GatewayTxs._meta_.fields["employeeId"].type = String;
GatewayTxs._meta_.fields["extra"] = {};
GatewayTxs._meta_.fields["extra"].type = String;
GatewayTxs._meta_.fields["captured"] = {};
GatewayTxs._meta_.fields["captured"].type = Boolean;
GatewayTxs._meta_.fields["swiperSerial"] = {};
GatewayTxs._meta_.fields["swiperSerial"].type = String;
GatewayTxs._meta_.fields["ksnPrefix"] = {};
GatewayTxs._meta_.fields["ksnPrefix"].type = String;
GatewayTxs._meta_.fields["createdTime"] = {};
GatewayTxs._meta_.fields["createdTime"].type = Number;
GatewayTxs._meta_.fields["modifiedTime"] = {};
GatewayTxs._meta_.fields["modifiedTime"].type = Number;
GatewayTxs._meta_.fields["refundId"] = {};
GatewayTxs._meta_.fields["refundId"].type = Number;
GatewayTxs._meta_.fields["paymentRefundId"] = {};
GatewayTxs._meta_.fields["paymentRefundId"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = GatewayTxs;
}

