/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_CardTransaction = require("../payments/CardTransaction");
var payments_AdditionalChargeAmount = require("../payments/AdditionalChargeAmount");
var payments_TaxableAmountRate = require("../payments/TaxableAmountRate");
var apps_AppTracking = require("../apps/AppTracking");
var payments_ServiceChargeAmount = require("../payments/ServiceChargeAmount");
var payments_TransactionInfo = require("../payments/TransactionInfo");
var base_Reference = require("../base/Reference");
var base_Tender = require("../base/Tender");
var payments_GermanInfo = require("../payments/GermanInfo");

/**
* @constructor
* @memberof payments
*/
var Refund = function() {
  this._class_ = Refund;
  this.id = undefined;
  this.orderRef = undefined;
  this.device = undefined;
  this.amount = undefined;
  this.taxAmount = undefined;
  this.tipAmount = undefined;
  this.createdTime = undefined;
  this.clientCreatedTime = undefined;
  this.payment = undefined;
  this.employee = undefined;
  this.lineItems = undefined;
  this.overrideMerchantTender = undefined;
  this.taxableAmountRates = undefined;
  this.serviceChargeAmount = undefined;
  this.additionalCharges = undefined;
  this.germanInfo = undefined;
  this.appTracking = undefined;
  this.voided = undefined;
  this.voidReason = undefined;
  this.cardTransaction = undefined;
  this.transactionInfo = undefined;
  this.merchant = undefined;
  this.externalReferenceId = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof payments.Refund
* @param {String} id 
*/
Refund.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof payments.Refund
* @return {String} 
*/
Refund.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The order with which the refund is associated
*
* @memberof payments.Refund
* @param {base.Reference} orderRef 
*/
Refund.prototype.setOrderRef = function(orderRef) {
  this.orderRef = orderRef;
};

/**
* Get the field value
* The order with which the refund is associated
* @memberof payments.Refund
* @return {base.Reference} 
*/
Refund.prototype.getOrderRef = function() {
  return this.orderRef;
};

/**
* Set the field value
* Device which processed the transaction for this refund
*
* @memberof payments.Refund
* @param {base.Reference|Null} device 
*/
Refund.prototype.setDevice = function(device) {
  this.device = device;
};

/**
* Get the field value
* Device which processed the transaction for this refund
* @memberof payments.Refund
* @return {base.Reference|Null} 
*/
Refund.prototype.getDevice = function() {
  return this.device;
};

/**
* Set the field value
* Total amount refunded, including tax and tip
*
* @memberof payments.Refund
* @param {Number} amount must be a long integer
*/
Refund.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Total amount refunded, including tax and tip
* @memberof payments.Refund
* @return {Number} must be a long integer
*/
Refund.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Tax amount refunded
*
* @memberof payments.Refund
* @param {Number|Null} taxAmount must be a long integer, 
*/
Refund.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* Tax amount refunded
* @memberof payments.Refund
* @return {Number|Null} must be a long integer, 
*/
Refund.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* Tip amount refunded
*
* @memberof payments.Refund
* @param {Number|Null} tipAmount must be a long integer, 
*/
Refund.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* Tip amount refunded
* @memberof payments.Refund
* @return {Number|Null} must be a long integer, 
*/
Refund.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* The time when the refund was recorded on the server
*
* @memberof payments.Refund
* @param {Number} createdTime must be a long integer
*/
Refund.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* The time when the refund was recorded on the server
* @memberof payments.Refund
* @return {Number} must be a long integer
*/
Refund.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* The time when the refund was recorded on the client
*
* @memberof payments.Refund
* @param {Number} clientCreatedTime must be a long integer
*/
Refund.prototype.setClientCreatedTime = function(clientCreatedTime) {
  this.clientCreatedTime = clientCreatedTime;
};

/**
* Get the field value
* The time when the refund was recorded on the client
* @memberof payments.Refund
* @return {Number} must be a long integer
*/
Refund.prototype.getClientCreatedTime = function() {
  return this.clientCreatedTime;
};

/**
* Set the field value
* The payment with which the refund is associated
*
* @memberof payments.Refund
* @param {base.Reference} payment 
*/
Refund.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* The payment with which the refund is associated
* @memberof payments.Refund
* @return {base.Reference} 
*/
Refund.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {base.Reference} employee 
*/
Refund.prototype.setEmployee = function(employee) {
  this.employee = employee;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {base.Reference} 
*/
Refund.prototype.getEmployee = function() {
  return this.employee;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {Array.<base.Reference>} lineItems An array of 
*/
Refund.prototype.setLineItems = function(lineItems) {
  this.lineItems = lineItems;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {Array.<base.Reference>} An array of 
*/
Refund.prototype.getLineItems = function() {
  return this.lineItems;
};

/**
* Set the field value
* The tender type associated with this payment, e.g. credit card, cash, etc.
*
* @memberof payments.Refund
* @param {base.Tender} overrideMerchantTender 
*/
Refund.prototype.setOverrideMerchantTender = function(overrideMerchantTender) {
  this.overrideMerchantTender = overrideMerchantTender;
};

/**
* Get the field value
* The tender type associated with this payment, e.g. credit card, cash, etc.
* @memberof payments.Refund
* @return {base.Tender} 
*/
Refund.prototype.getOverrideMerchantTender = function() {
  return this.overrideMerchantTender;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {Array.<payments.TaxableAmountRate>} taxableAmountRates An array of 
*/
Refund.prototype.setTaxableAmountRates = function(taxableAmountRates) {
  this.taxableAmountRates = taxableAmountRates;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {Array.<payments.TaxableAmountRate>} An array of 
*/
Refund.prototype.getTaxableAmountRates = function() {
  return this.taxableAmountRates;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {payments.ServiceChargeAmount} serviceChargeAmount 
*/
Refund.prototype.setServiceChargeAmount = function(serviceChargeAmount) {
  this.serviceChargeAmount = serviceChargeAmount;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {payments.ServiceChargeAmount} 
*/
Refund.prototype.getServiceChargeAmount = function() {
  return this.serviceChargeAmount;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {Array.<payments.AdditionalChargeAmount>} additionalCharges An array of 
*/
Refund.prototype.setAdditionalCharges = function(additionalCharges) {
  this.additionalCharges = additionalCharges;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {Array.<payments.AdditionalChargeAmount>} An array of 
*/
Refund.prototype.getAdditionalCharges = function() {
  return this.additionalCharges;
};

/**
* Set the field value
* German region-specific information
*
* @memberof payments.Refund
* @param {payments.GermanInfo|Null} germanInfo 
*/
Refund.prototype.setGermanInfo = function(germanInfo) {
  this.germanInfo = germanInfo;
};

/**
* Get the field value
* German region-specific information
* @memberof payments.Refund
* @return {payments.GermanInfo|Null} 
*/
Refund.prototype.getGermanInfo = function() {
  return this.germanInfo;
};

/**
* Set the field value
* Tracking information for the app that created this refund.
*
* @memberof payments.Refund
* @param {apps.AppTracking|Null} appTracking 
*/
Refund.prototype.setAppTracking = function(appTracking) {
  this.appTracking = appTracking;
};

/**
* Get the field value
* Tracking information for the app that created this refund.
* @memberof payments.Refund
* @return {apps.AppTracking|Null} 
*/
Refund.prototype.getAppTracking = function() {
  return this.appTracking;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {Boolean} voided 
*/
Refund.prototype.setVoided = function(voided) {
  this.voided = voided;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {Boolean} 
*/
Refund.prototype.getVoided = function() {
  return this.voided;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {String} voidReason 
*/
Refund.prototype.setVoidReason = function(voidReason) {
  this.voidReason = voidReason;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {String} 
*/
Refund.prototype.getVoidReason = function() {
  return this.voidReason;
};

/**
* Set the field value
* Information about the card used for credit or debit card refunds
*
* @memberof payments.Refund
* @param {payments.CardTransaction} cardTransaction 
*/
Refund.prototype.setCardTransaction = function(cardTransaction) {
  this.cardTransaction = cardTransaction;
};

/**
* Get the field value
* Information about the card used for credit or debit card refunds
* @memberof payments.Refund
* @return {payments.CardTransaction} 
*/
Refund.prototype.getCardTransaction = function() {
  return this.cardTransaction;
};

/**
* Set the field value
* Transaction information
*
* @memberof payments.Refund
* @param {payments.TransactionInfo|Null} transactionInfo 
*/
Refund.prototype.setTransactionInfo = function(transactionInfo) {
  this.transactionInfo = transactionInfo;
};

/**
* Get the field value
* Transaction information
* @memberof payments.Refund
* @return {payments.TransactionInfo|Null} 
*/
Refund.prototype.getTransactionInfo = function() {
  return this.transactionInfo;
};

/**
* Set the field value
* @memberof payments.Refund
* @param {base.Reference} merchant 
*/
Refund.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* @memberof payments.Refund
* @return {base.Reference} 
*/
Refund.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* The external reference id if associated with the refund
*
* @memberof payments.Refund
* @param {String|Null} externalReferenceId 
*/
Refund.prototype.setExternalReferenceId = function(externalReferenceId) {
  this.externalReferenceId = externalReferenceId;
};

/**
* Get the field value
* The external reference id if associated with the refund
* @memberof payments.Refund
* @return {String|Null} 
*/
Refund.prototype.getExternalReferenceId = function() {
  return this.externalReferenceId;
};

/**
* @memberof payments.Refund
* @private
*/
Refund.prototype.getMetaInfo = function(fieldName) {
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

Refund.prototype.toString = function() {
  return JSON.stringify(this);
};

Refund._meta_ =  {fields:  {}};
Refund._meta_._class_ =  Refund;
Refund._meta_.fields["id"] = {};
Refund._meta_.fields["id"].type = String;
Refund._meta_.fields["orderRef"] = {};
Refund._meta_.fields["orderRef"].type = base_Reference;
Refund._meta_.fields["device"] = {};
Refund._meta_.fields["device"].type = base_Reference;
Refund._meta_.fields["amount"] = {};
Refund._meta_.fields["amount"].type = Number;
Refund._meta_.fields["taxAmount"] = {};
Refund._meta_.fields["taxAmount"].type = Number;
Refund._meta_.fields["tipAmount"] = {};
Refund._meta_.fields["tipAmount"].type = Number;
Refund._meta_.fields["createdTime"] = {};
Refund._meta_.fields["createdTime"].type = Number;
Refund._meta_.fields["clientCreatedTime"] = {};
Refund._meta_.fields["clientCreatedTime"].type = Number;
Refund._meta_.fields["payment"] = {};
Refund._meta_.fields["payment"].type = base_Reference;
Refund._meta_.fields["employee"] = {};
Refund._meta_.fields["employee"].type = base_Reference;
Refund._meta_.fields["lineItems"] = {};
Refund._meta_.fields["lineItems"].type = Array;
Refund._meta_.fields["lineItems"].elementType = base_Reference;
Refund._meta_.fields["overrideMerchantTender"] = {};
Refund._meta_.fields["overrideMerchantTender"].type = base_Tender;
Refund._meta_.fields["taxableAmountRates"] = {};
Refund._meta_.fields["taxableAmountRates"].type = Array;
Refund._meta_.fields["taxableAmountRates"].elementType = payments_TaxableAmountRate;
Refund._meta_.fields["serviceChargeAmount"] = {};
Refund._meta_.fields["serviceChargeAmount"].type = payments_ServiceChargeAmount;
Refund._meta_.fields["additionalCharges"] = {};
Refund._meta_.fields["additionalCharges"].type = Array;
Refund._meta_.fields["additionalCharges"].elementType = payments_AdditionalChargeAmount;
Refund._meta_.fields["germanInfo"] = {};
Refund._meta_.fields["germanInfo"].type = payments_GermanInfo;
Refund._meta_.fields["appTracking"] = {};
Refund._meta_.fields["appTracking"].type = apps_AppTracking;
Refund._meta_.fields["voided"] = {};
Refund._meta_.fields["voided"].type = Boolean;
Refund._meta_.fields["voidReason"] = {};
Refund._meta_.fields["voidReason"].type = String;
Refund._meta_.fields["cardTransaction"] = {};
Refund._meta_.fields["cardTransaction"].type = payments_CardTransaction;
Refund._meta_.fields["transactionInfo"] = {};
Refund._meta_.fields["transactionInfo"].type = payments_TransactionInfo;
Refund._meta_.fields["merchant"] = {};
Refund._meta_.fields["merchant"].type = base_Reference;
Refund._meta_.fields["externalReferenceId"] = {};
Refund._meta_.fields["externalReferenceId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Refund;
}

