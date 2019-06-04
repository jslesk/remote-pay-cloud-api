/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Result = require("../payments/Result");
var payments_AdditionalChargeAmount = require("../payments/AdditionalChargeAmount");
var payments_ServiceChargeAmount = require("../payments/ServiceChargeAmount");
var payments_PaymentTaxRate = require("../payments/PaymentTaxRate");
var payments_DCCInfo = require("../payments/DCCInfo");
var payments_CashAdvanceExtra = require("../payments/CashAdvanceExtra");
var payments_Refund = require("../payments/Refund");
var payments_GermanInfo = require("../payments/GermanInfo");
var payments_CardTransaction = require("../payments/CardTransaction");
var payments_LineItemPayment = require("../payments/LineItemPayment");
var order_VoidReason = require("../order/VoidReason");
var apps_AppTracking = require("../apps/AppTracking");
var payments_TransactionInfo = require("../payments/TransactionInfo");
var base_Reference = require("../base/Reference");
var base_Tender = require("../base/Tender");
var payments_TransactionSettings = require("../payments/TransactionSettings");
var payments_SignatureDisclaimer = require("../payments/SignatureDisclaimer");

/**
* @constructor
* @memberof payments
*/
var Payment = function() {
  this._class_ = Payment;
  this.id = undefined;
  this.order = undefined;
  this.device = undefined;
  this.tender = undefined;
  this.amount = undefined;
  this.tipAmount = undefined;
  this.taxAmount = undefined;
  this.cashbackAmount = undefined;
  this.cashTendered = undefined;
  this.externalPaymentId = undefined;
  this.employee = undefined;
  this.createdTime = undefined;
  this.clientCreatedTime = undefined;
  this.modifiedTime = undefined;
  this.offline = false;
  this.result = undefined;
  this.cardTransaction = undefined;
  this.serviceCharge = undefined;
  this.attributes = undefined;
  this.additionalCharges = undefined;
  this.taxRates = undefined;
  this.refunds = undefined;
  this.note = undefined;
  this.lineItemPayments = undefined;
  this.authorization = undefined;
  this.voidPaymentRef = undefined;
  this.voidReason = undefined;
  this.dccInfo = undefined;
  this.transactionSettings = undefined;
  this.germanInfo = undefined;
  this.appTracking = undefined;
  this.cashAdvanceExtra = undefined;
  this.transactionInfo = undefined;
  this.signatureDisclaimer = undefined;
  this.externalReferenceId = undefined;
  this.merchant = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof payments.Payment
* @param {String} id 
*/
Payment.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof payments.Payment
* @return {String} 
*/
Payment.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The order with which the payment is associated
*
* @memberof payments.Payment
* @param {base.Reference} order 
*/
Payment.prototype.setOrder = function(order) {
  this.order = order;
};

/**
* Get the field value
* The order with which the payment is associated
* @memberof payments.Payment
* @return {base.Reference} 
*/
Payment.prototype.getOrder = function() {
  return this.order;
};

/**
* Set the field value
* Device which processed the transaction for this payment
*
* @memberof payments.Payment
* @param {base.Reference|Null} device 
*/
Payment.prototype.setDevice = function(device) {
  this.device = device;
};

/**
* Get the field value
* Device which processed the transaction for this payment
* @memberof payments.Payment
* @return {base.Reference|Null} 
*/
Payment.prototype.getDevice = function() {
  return this.device;
};

/**
* Set the field value
* The tender type associated with this payment, e.g. credit card, cash, etc.
*
* @memberof payments.Payment
* @param {base.Tender} tender 
*/
Payment.prototype.setTender = function(tender) {
  this.tender = tender;
};

/**
* Get the field value
* The tender type associated with this payment, e.g. credit card, cash, etc.
* @memberof payments.Payment
* @return {base.Tender} 
*/
Payment.prototype.getTender = function() {
  return this.tender;
};

/**
* Set the field value
* Total amount paid
*
* @memberof payments.Payment
* @param {Number} amount must be a long integer
*/
Payment.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Total amount paid
* @memberof payments.Payment
* @return {Number} must be a long integer
*/
Payment.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Amount paid in tips
*
* @memberof payments.Payment
* @param {Number|Null} tipAmount must be a long integer, 
*/
Payment.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* Amount paid in tips
* @memberof payments.Payment
* @return {Number|Null} must be a long integer, 
*/
Payment.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* Amount paid in tax
*
* @memberof payments.Payment
* @param {Number|Null} taxAmount must be a long integer, 
*/
Payment.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* Amount paid in tax
* @memberof payments.Payment
* @return {Number|Null} must be a long integer, 
*/
Payment.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* Amount given back in a cash back transaction
*
* @memberof payments.Payment
* @param {Number|Null} cashbackAmount must be a long integer, 
*/
Payment.prototype.setCashbackAmount = function(cashbackAmount) {
  this.cashbackAmount = cashbackAmount;
};

/**
* Get the field value
* Amount given back in a cash back transaction
* @memberof payments.Payment
* @return {Number|Null} must be a long integer, 
*/
Payment.prototype.getCashbackAmount = function() {
  return this.cashbackAmount;
};

/**
* Set the field value
* Amount of cash given by the customer
*
* @memberof payments.Payment
* @param {Number|Null} cashTendered must be a long integer, 
*/
Payment.prototype.setCashTendered = function(cashTendered) {
  this.cashTendered = cashTendered;
};

/**
* Get the field value
* Amount of cash given by the customer
* @memberof payments.Payment
* @return {Number|Null} must be a long integer, 
*/
Payment.prototype.getCashTendered = function() {
  return this.cashTendered;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {String} externalPaymentId 
*/
Payment.prototype.setExternalPaymentId = function(externalPaymentId) {
  this.externalPaymentId = externalPaymentId;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {String} 
*/
Payment.prototype.getExternalPaymentId = function() {
  return this.externalPaymentId;
};

/**
* Set the field value
* The employee who processed the payment
*
* @memberof payments.Payment
* @param {base.Reference} employee 
*/
Payment.prototype.setEmployee = function(employee) {
  this.employee = employee;
};

/**
* Get the field value
* The employee who processed the payment
* @memberof payments.Payment
* @return {base.Reference} 
*/
Payment.prototype.getEmployee = function() {
  return this.employee;
};

/**
* Set the field value
* Time payment was recorded on server
*
* @memberof payments.Payment
* @param {Number} createdTime must be a long integer
*/
Payment.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* Time payment was recorded on server
* @memberof payments.Payment
* @return {Number} must be a long integer
*/
Payment.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Number} clientCreatedTime must be a long integer
*/
Payment.prototype.setClientCreatedTime = function(clientCreatedTime) {
  this.clientCreatedTime = clientCreatedTime;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Number} must be a long integer
*/
Payment.prototype.getClientCreatedTime = function() {
  return this.clientCreatedTime;
};

/**
* Set the field value
* Last modified time of the payment
*
* @memberof payments.Payment
* @param {Number} modifiedTime must be a long integer
*/
Payment.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* Last modified time of the payment
* @memberof payments.Payment
* @return {Number} must be a long integer
*/
Payment.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Boolean} offline 
*/
Payment.prototype.setOffline = function(offline) {
  this.offline = offline;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Boolean} 
*/
Payment.prototype.getOffline = function() {
  return this.offline;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {payments.Result} result 
*/
Payment.prototype.setResult = function(result) {
  this.result = result;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {payments.Result} 
*/
Payment.prototype.getResult = function() {
  return this.result;
};

/**
* Set the field value
* Information about the card used for credit/debit card payments
*
* @memberof payments.Payment
* @param {payments.CardTransaction} cardTransaction 
*/
Payment.prototype.setCardTransaction = function(cardTransaction) {
  this.cardTransaction = cardTransaction;
};

/**
* Get the field value
* Information about the card used for credit/debit card payments
* @memberof payments.Payment
* @return {payments.CardTransaction} 
*/
Payment.prototype.getCardTransaction = function() {
  return this.cardTransaction;
};

/**
* Set the field value
* Amount record as a service charge
*
* @memberof payments.Payment
* @param {payments.ServiceChargeAmount} serviceCharge 
*/
Payment.prototype.setServiceCharge = function(serviceCharge) {
  this.serviceCharge = serviceCharge;
};

/**
* Get the field value
* Amount record as a service charge
* @memberof payments.Payment
* @return {payments.ServiceChargeAmount} 
*/
Payment.prototype.getServiceCharge = function() {
  return this.serviceCharge;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Object.<String,String>} attributes A map of <String> to <>
*/
Payment.prototype.setAttributes = function(attributes) {
  this.attributes = attributes;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Object.<String,String>} A map of <String> to <>
*/
Payment.prototype.getAttributes = function() {
  return this.attributes;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Array.<payments.AdditionalChargeAmount>} additionalCharges An array of 
*/
Payment.prototype.setAdditionalCharges = function(additionalCharges) {
  this.additionalCharges = additionalCharges;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Array.<payments.AdditionalChargeAmount>} An array of 
*/
Payment.prototype.getAdditionalCharges = function() {
  return this.additionalCharges;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Array.<payments.PaymentTaxRate>} taxRates An array of 
*/
Payment.prototype.setTaxRates = function(taxRates) {
  this.taxRates = taxRates;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Array.<payments.PaymentTaxRate>} An array of 
*/
Payment.prototype.getTaxRates = function() {
  return this.taxRates;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Array.<payments.Refund>} refunds An array of 
*/
Payment.prototype.setRefunds = function(refunds) {
  this.refunds = refunds;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Array.<payments.Refund>} An array of 
*/
Payment.prototype.getRefunds = function() {
  return this.refunds;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {String} note 
*/
Payment.prototype.setNote = function(note) {
  this.note = note;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {String} 
*/
Payment.prototype.getNote = function() {
  return this.note;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {Array.<payments.LineItemPayment>} lineItemPayments An array of 
*/
Payment.prototype.setLineItemPayments = function(lineItemPayments) {
  this.lineItemPayments = lineItemPayments;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {Array.<payments.LineItemPayment>} An array of 
*/
Payment.prototype.getLineItemPayments = function() {
  return this.lineItemPayments;
};

/**
* Set the field value
* Authorization which this payment is associated to (opening or closing payment) if one exists
*
* @memberof payments.Payment
* @param {base.Reference} authorization 
*/
Payment.prototype.setAuthorization = function(authorization) {
  this.authorization = authorization;
};

/**
* Get the field value
* Authorization which this payment is associated to (opening or closing payment) if one exists
* @memberof payments.Payment
* @return {base.Reference} 
*/
Payment.prototype.getAuthorization = function() {
  return this.authorization;
};

/**
* Set the field value
* If voided, the corresponding successful payment, and vice versa
*
* @memberof payments.Payment
* @param {base.Reference} voidPaymentRef 
*/
Payment.prototype.setVoidPaymentRef = function(voidPaymentRef) {
  this.voidPaymentRef = voidPaymentRef;
};

/**
* Get the field value
* If voided, the corresponding successful payment, and vice versa
* @memberof payments.Payment
* @return {base.Reference} 
*/
Payment.prototype.getVoidPaymentRef = function() {
  return this.voidPaymentRef;
};

/**
* Set the field value
* If voided, the reason why (when available)
*
* @memberof payments.Payment
* @param {order.VoidReason} voidReason 
*/
Payment.prototype.setVoidReason = function(voidReason) {
  this.voidReason = voidReason;
};

/**
* Get the field value
* If voided, the reason why (when available)
* @memberof payments.Payment
* @return {order.VoidReason} 
*/
Payment.prototype.getVoidReason = function() {
  return this.voidReason;
};

/**
* Set the field value
* Dynamic Currency Conversion information
*
* @memberof payments.Payment
* @param {payments.DCCInfo|Null} dccInfo 
*/
Payment.prototype.setDccInfo = function(dccInfo) {
  this.dccInfo = dccInfo;
};

/**
* Get the field value
* Dynamic Currency Conversion information
* @memberof payments.Payment
* @return {payments.DCCInfo|Null} 
*/
Payment.prototype.getDccInfo = function() {
  return this.dccInfo;
};

/**
* Set the field value
* Per transaction settings for the payment
*
* @memberof payments.Payment
* @param {payments.TransactionSettings} transactionSettings 
*/
Payment.prototype.setTransactionSettings = function(transactionSettings) {
  this.transactionSettings = transactionSettings;
};

/**
* Get the field value
* Per transaction settings for the payment
* @memberof payments.Payment
* @return {payments.TransactionSettings} 
*/
Payment.prototype.getTransactionSettings = function() {
  return this.transactionSettings;
};

/**
* Set the field value
* German region-specific information
*
* @memberof payments.Payment
* @param {payments.GermanInfo|Null} germanInfo 
*/
Payment.prototype.setGermanInfo = function(germanInfo) {
  this.germanInfo = germanInfo;
};

/**
* Get the field value
* German region-specific information
* @memberof payments.Payment
* @return {payments.GermanInfo|Null} 
*/
Payment.prototype.getGermanInfo = function() {
  return this.germanInfo;
};

/**
* Set the field value
* Tracking information for the app that created this payment.
*
* @memberof payments.Payment
* @param {apps.AppTracking|Null} appTracking 
*/
Payment.prototype.setAppTracking = function(appTracking) {
  this.appTracking = appTracking;
};

/**
* Get the field value
* Tracking information for the app that created this payment.
* @memberof payments.Payment
* @return {apps.AppTracking|Null} 
*/
Payment.prototype.getAppTracking = function() {
  return this.appTracking;
};

/**
* Set the field value
* Information specific to cash advance transactions.
*
* @memberof payments.Payment
* @param {payments.CashAdvanceExtra|Null} cashAdvanceExtra 
*/
Payment.prototype.setCashAdvanceExtra = function(cashAdvanceExtra) {
  this.cashAdvanceExtra = cashAdvanceExtra;
};

/**
* Get the field value
* Information specific to cash advance transactions.
* @memberof payments.Payment
* @return {payments.CashAdvanceExtra|Null} 
*/
Payment.prototype.getCashAdvanceExtra = function() {
  return this.cashAdvanceExtra;
};

/**
* Set the field value
* Transaction information
*
* @memberof payments.Payment
* @param {payments.TransactionInfo|Null} transactionInfo 
*/
Payment.prototype.setTransactionInfo = function(transactionInfo) {
  this.transactionInfo = transactionInfo;
};

/**
* Get the field value
* Transaction information
* @memberof payments.Payment
* @return {payments.TransactionInfo|Null} 
*/
Payment.prototype.getTransactionInfo = function() {
  return this.transactionInfo;
};

/**
* Set the field value
* Information displayed to customer for storing electronic signatures
*
* @memberof payments.Payment
* @param {payments.SignatureDisclaimer|Null} signatureDisclaimer 
*/
Payment.prototype.setSignatureDisclaimer = function(signatureDisclaimer) {
  this.signatureDisclaimer = signatureDisclaimer;
};

/**
* Get the field value
* Information displayed to customer for storing electronic signatures
* @memberof payments.Payment
* @return {payments.SignatureDisclaimer|Null} 
*/
Payment.prototype.getSignatureDisclaimer = function() {
  return this.signatureDisclaimer;
};

/**
* Set the field value
* The external reference id if associated with the payment
*
* @memberof payments.Payment
* @param {String|Null} externalReferenceId 
*/
Payment.prototype.setExternalReferenceId = function(externalReferenceId) {
  this.externalReferenceId = externalReferenceId;
};

/**
* Get the field value
* The external reference id if associated with the payment
* @memberof payments.Payment
* @return {String|Null} 
*/
Payment.prototype.getExternalReferenceId = function() {
  return this.externalReferenceId;
};

/**
* Set the field value
* @memberof payments.Payment
* @param {base.Reference} merchant 
*/
Payment.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* @memberof payments.Payment
* @return {base.Reference} 
*/
Payment.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* @memberof payments.Payment
* @private
*/
Payment.prototype.getMetaInfo = function(fieldName) {
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

Payment.prototype.toString = function() {
  return JSON.stringify(this);
};

Payment._meta_ =  {fields:  {}};
Payment._meta_._class_ =  Payment;
Payment._meta_.fields["id"] = {};
Payment._meta_.fields["id"].type = String;
Payment._meta_.fields["order"] = {};
Payment._meta_.fields["order"].type = base_Reference;
Payment._meta_.fields["device"] = {};
Payment._meta_.fields["device"].type = base_Reference;
Payment._meta_.fields["tender"] = {};
Payment._meta_.fields["tender"].type = base_Tender;
Payment._meta_.fields["amount"] = {};
Payment._meta_.fields["amount"].type = Number;
Payment._meta_.fields["tipAmount"] = {};
Payment._meta_.fields["tipAmount"].type = Number;
Payment._meta_.fields["taxAmount"] = {};
Payment._meta_.fields["taxAmount"].type = Number;
Payment._meta_.fields["cashbackAmount"] = {};
Payment._meta_.fields["cashbackAmount"].type = Number;
Payment._meta_.fields["cashTendered"] = {};
Payment._meta_.fields["cashTendered"].type = Number;
Payment._meta_.fields["externalPaymentId"] = {};
Payment._meta_.fields["externalPaymentId"].type = String;
Payment._meta_.fields["employee"] = {};
Payment._meta_.fields["employee"].type = base_Reference;
Payment._meta_.fields["createdTime"] = {};
Payment._meta_.fields["createdTime"].type = Number;
Payment._meta_.fields["clientCreatedTime"] = {};
Payment._meta_.fields["clientCreatedTime"].type = Number;
Payment._meta_.fields["modifiedTime"] = {};
Payment._meta_.fields["modifiedTime"].type = Number;
Payment._meta_.fields["offline"] = {};
Payment._meta_.fields["offline"].type = Boolean;
Payment._meta_.fields["result"] = {};
Payment._meta_.fields["result"].type = payments_Result;
Payment._meta_.fields["cardTransaction"] = {};
Payment._meta_.fields["cardTransaction"].type = payments_CardTransaction;
Payment._meta_.fields["serviceCharge"] = {};
Payment._meta_.fields["serviceCharge"].type = payments_ServiceChargeAmount;
Payment._meta_.fields["attributes"] = {};
Payment._meta_.fields["attributes"].type = Object;
Payment._meta_.fields["additionalCharges"] = {};
Payment._meta_.fields["additionalCharges"].type = Array;
Payment._meta_.fields["additionalCharges"].elementType = payments_AdditionalChargeAmount;
Payment._meta_.fields["taxRates"] = {};
Payment._meta_.fields["taxRates"].type = Array;
Payment._meta_.fields["taxRates"].elementType = payments_PaymentTaxRate;
Payment._meta_.fields["refunds"] = {};
Payment._meta_.fields["refunds"].type = Array;
Payment._meta_.fields["refunds"].elementType = payments_Refund;
Payment._meta_.fields["note"] = {};
Payment._meta_.fields["note"].type = String;
Payment._meta_.fields["lineItemPayments"] = {};
Payment._meta_.fields["lineItemPayments"].type = Array;
Payment._meta_.fields["lineItemPayments"].elementType = payments_LineItemPayment;
Payment._meta_.fields["authorization"] = {};
Payment._meta_.fields["authorization"].type = base_Reference;
Payment._meta_.fields["voidPaymentRef"] = {};
Payment._meta_.fields["voidPaymentRef"].type = base_Reference;
Payment._meta_.fields["voidReason"] = {};
Payment._meta_.fields["voidReason"].type = order_VoidReason;
Payment._meta_.fields["dccInfo"] = {};
Payment._meta_.fields["dccInfo"].type = payments_DCCInfo;
Payment._meta_.fields["transactionSettings"] = {};
Payment._meta_.fields["transactionSettings"].type = payments_TransactionSettings;
Payment._meta_.fields["germanInfo"] = {};
Payment._meta_.fields["germanInfo"].type = payments_GermanInfo;
Payment._meta_.fields["appTracking"] = {};
Payment._meta_.fields["appTracking"].type = apps_AppTracking;
Payment._meta_.fields["cashAdvanceExtra"] = {};
Payment._meta_.fields["cashAdvanceExtra"].type = payments_CashAdvanceExtra;
Payment._meta_.fields["transactionInfo"] = {};
Payment._meta_.fields["transactionInfo"].type = payments_TransactionInfo;
Payment._meta_.fields["signatureDisclaimer"] = {};
Payment._meta_.fields["signatureDisclaimer"].type = payments_SignatureDisclaimer;
Payment._meta_.fields["externalReferenceId"] = {};
Payment._meta_.fields["externalReferenceId"].type = String;
Payment._meta_.fields["merchant"] = {};
Payment._meta_.fields["merchant"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Payment;
}

