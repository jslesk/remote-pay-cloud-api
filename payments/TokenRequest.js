/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var customers_Customer = require("../customers/Customer");
var payments_TokenRequestType = require("../payments/TokenRequestType");
var payments_CardTransaction = require("../payments/CardTransaction");
var payments_Result = require("../payments/Result");
var payments_TransactionInfo = require("../payments/TransactionInfo");
var base_Reference = require("../base/Reference");
var base_Tender = require("../base/Tender");

/**
* @constructor
* @memberof payments
*/
var TokenRequest = function() {
  this._class_ = TokenRequest;
  this.id = undefined;
  this.type = undefined;
  this.employee = undefined;
  this.device = undefined;
  this.merchant = undefined;
  this.tender = undefined;
  this.customer = undefined;
  this.externalReferenceId = undefined;
  this.cardTransaction = undefined;
  this.note = undefined;
  this.result = undefined;
  this.createdTime = undefined;
  this.modifiedTime = undefined;
  this.deletedTime = undefined;
  this.transactionInfo = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof payments.TokenRequest
* @param {String} id 
*/
TokenRequest.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof payments.TokenRequest
* @return {String} 
*/
TokenRequest.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Type of request
*
* @memberof payments.TokenRequest
* @param {payments.TokenRequestType} type 
*/
TokenRequest.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* Type of request
* @memberof payments.TokenRequest
* @return {payments.TokenRequestType} 
*/
TokenRequest.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* The employee who processed the token request
*
* @memberof payments.TokenRequest
* @param {base.Reference} employee 
*/
TokenRequest.prototype.setEmployee = function(employee) {
  this.employee = employee;
};

/**
* Get the field value
* The employee who processed the token request
* @memberof payments.TokenRequest
* @return {base.Reference} 
*/
TokenRequest.prototype.getEmployee = function() {
  return this.employee;
};

/**
* Set the field value
* The device that processed the token request, a 128-bit UUID, not a normal base-13 Clover ID.
*
* @memberof payments.TokenRequest
* @param {base.Reference} device 
*/
TokenRequest.prototype.setDevice = function(device) {
  this.device = device;
};

/**
* Get the field value
* The device that processed the token request, a 128-bit UUID, not a normal base-13 Clover ID.
* @memberof payments.TokenRequest
* @return {base.Reference} 
*/
TokenRequest.prototype.getDevice = function() {
  return this.device;
};

/**
* Set the field value
* The merchant associate with this token request
*
* @memberof payments.TokenRequest
* @param {base.Reference} merchant 
*/
TokenRequest.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* The merchant associate with this token request
* @memberof payments.TokenRequest
* @return {base.Reference} 
*/
TokenRequest.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* The tender associated with this token request
*
* @memberof payments.TokenRequest
* @param {base.Tender} tender 
*/
TokenRequest.prototype.setTender = function(tender) {
  this.tender = tender;
};

/**
* Get the field value
* The tender associated with this token request
* @memberof payments.TokenRequest
* @return {base.Tender} 
*/
TokenRequest.prototype.getTender = function() {
  return this.tender;
};

/**
* Set the field value
* The customer associated with this token request
*
* @memberof payments.TokenRequest
* @param {customers.Customer} customer 
*/
TokenRequest.prototype.setCustomer = function(customer) {
  this.customer = customer;
};

/**
* Get the field value
* The customer associated with this token request
* @memberof payments.TokenRequest
* @return {customers.Customer} 
*/
TokenRequest.prototype.getCustomer = function() {
  return this.customer;
};

/**
* Set the field value
* Merchant-specified reference number
*
* @memberof payments.TokenRequest
* @param {String} externalReferenceId 
*/
TokenRequest.prototype.setExternalReferenceId = function(externalReferenceId) {
  this.externalReferenceId = externalReferenceId;
};

/**
* Get the field value
* Merchant-specified reference number
* @memberof payments.TokenRequest
* @return {String} 
*/
TokenRequest.prototype.getExternalReferenceId = function() {
  return this.externalReferenceId;
};

/**
* Set the field value
* Information about the card used for the token request
*
* @memberof payments.TokenRequest
* @param {payments.CardTransaction} cardTransaction 
*/
TokenRequest.prototype.setCardTransaction = function(cardTransaction) {
  this.cardTransaction = cardTransaction;
};

/**
* Get the field value
* Information about the card used for the token request
* @memberof payments.TokenRequest
* @return {payments.CardTransaction} 
*/
TokenRequest.prototype.getCardTransaction = function() {
  return this.cardTransaction;
};

/**
* Set the field value
* Note input by the merchant
*
* @memberof payments.TokenRequest
* @param {String} note 
*/
TokenRequest.prototype.setNote = function(note) {
  this.note = note;
};

/**
* Get the field value
* Note input by the merchant
* @memberof payments.TokenRequest
* @return {String} 
*/
TokenRequest.prototype.getNote = function() {
  return this.note;
};

/**
* Set the field value
* Result of this token request
*
* @memberof payments.TokenRequest
* @param {payments.Result} result 
*/
TokenRequest.prototype.setResult = function(result) {
  this.result = result;
};

/**
* Get the field value
* Result of this token request
* @memberof payments.TokenRequest
* @return {payments.Result} 
*/
TokenRequest.prototype.getResult = function() {
  return this.result;
};

/**
* Set the field value
* Time that the token request was recorded on the server
*
* @memberof payments.TokenRequest
* @param {Number} createdTime must be a long integer
*/
TokenRequest.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* Time that the token request was recorded on the server
* @memberof payments.TokenRequest
* @return {Number} must be a long integer
*/
TokenRequest.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* Time that the token request was initiated on the device
*
* @memberof payments.TokenRequest
* @param {Number} modifiedTime must be a long integer
*/
TokenRequest.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* Time that the token request was initiated on the device
* @memberof payments.TokenRequest
* @return {Number} must be a long integer
*/
TokenRequest.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* Time that the token request was deleted
*
* @memberof payments.TokenRequest
* @param {Number} deletedTime must be a long integer
*/
TokenRequest.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* Time that the token request was deleted
* @memberof payments.TokenRequest
* @return {Number} must be a long integer
*/
TokenRequest.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* Set the field value
* Information over transaction information
*
* @memberof payments.TokenRequest
* @param {payments.TransactionInfo} transactionInfo 
*/
TokenRequest.prototype.setTransactionInfo = function(transactionInfo) {
  this.transactionInfo = transactionInfo;
};

/**
* Get the field value
* Information over transaction information
* @memberof payments.TokenRequest
* @return {payments.TransactionInfo} 
*/
TokenRequest.prototype.getTransactionInfo = function() {
  return this.transactionInfo;
};

/**
* @memberof payments.TokenRequest
* @private
*/
TokenRequest.prototype.getMetaInfo = function(fieldName) {
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

TokenRequest.prototype.toString = function() {
  return JSON.stringify(this);
};

TokenRequest._meta_ =  {fields:  {}};
TokenRequest._meta_._class_ =  TokenRequest;
TokenRequest._meta_.fields["id"] = {};
TokenRequest._meta_.fields["id"].type = String;
TokenRequest._meta_.fields["type"] = {};
TokenRequest._meta_.fields["type"].type = payments_TokenRequestType;
TokenRequest._meta_.fields["employee"] = {};
TokenRequest._meta_.fields["employee"].type = base_Reference;
TokenRequest._meta_.fields["device"] = {};
TokenRequest._meta_.fields["device"].type = base_Reference;
TokenRequest._meta_.fields["merchant"] = {};
TokenRequest._meta_.fields["merchant"].type = base_Reference;
TokenRequest._meta_.fields["tender"] = {};
TokenRequest._meta_.fields["tender"].type = base_Tender;
TokenRequest._meta_.fields["customer"] = {};
TokenRequest._meta_.fields["customer"].type = customers_Customer;
TokenRequest._meta_.fields["externalReferenceId"] = {};
TokenRequest._meta_.fields["externalReferenceId"].type = String;
TokenRequest._meta_.fields["cardTransaction"] = {};
TokenRequest._meta_.fields["cardTransaction"].type = payments_CardTransaction;
TokenRequest._meta_.fields["note"] = {};
TokenRequest._meta_.fields["note"].type = String;
TokenRequest._meta_.fields["result"] = {};
TokenRequest._meta_.fields["result"].type = payments_Result;
TokenRequest._meta_.fields["createdTime"] = {};
TokenRequest._meta_.fields["createdTime"].type = Number;
TokenRequest._meta_.fields["modifiedTime"] = {};
TokenRequest._meta_.fields["modifiedTime"].type = Number;
TokenRequest._meta_.fields["deletedTime"] = {};
TokenRequest._meta_.fields["deletedTime"].type = Number;
TokenRequest._meta_.fields["transactionInfo"] = {};
TokenRequest._meta_.fields["transactionInfo"].type = payments_TransactionInfo;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TokenRequest;
}
