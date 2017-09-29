/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_IdType = require("../payments/IdType");

/**
* @constructor
* @memberof payments
*/
var CashAdvanceCustomerIdentification = function() {
  this._class_ = CashAdvanceCustomerIdentification;
  this.idType = undefined;
  this.serialNumber = undefined;
  this.maskedSerialNumber = undefined;
  this.encryptedSerialNumber = undefined;
  this.expirationDate = undefined;
  this.issuingState = undefined;
  this.issuingCountry = undefined;
  this.customerName = undefined;
  this.addressStreet1 = undefined;
  this.addressStreet2 = undefined;
  this.addressCity = undefined;
  this.addressState = undefined;
  this.addressZipCode = undefined;
  this.addressCountry = undefined;
};


/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {payments.IdType} idType 
*/
CashAdvanceCustomerIdentification.prototype.setIdType = function(idType) {
  this.idType = idType;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {payments.IdType} 
*/
CashAdvanceCustomerIdentification.prototype.getIdType = function() {
  return this.idType;
};

/**
* Set the field value
* Identification serial number
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} serialNumber 
*/
CashAdvanceCustomerIdentification.prototype.setSerialNumber = function(serialNumber) {
  this.serialNumber = serialNumber;
};

/**
* Get the field value
* Identification serial number
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getSerialNumber = function() {
  return this.serialNumber;
};

/**
* Set the field value
* Masked identification serial number
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} maskedSerialNumber 
*/
CashAdvanceCustomerIdentification.prototype.setMaskedSerialNumber = function(maskedSerialNumber) {
  this.maskedSerialNumber = maskedSerialNumber;
};

/**
* Get the field value
* Masked identification serial number
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getMaskedSerialNumber = function() {
  return this.maskedSerialNumber;
};

/**
* Set the field value
* Encrypted identification serial number
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} encryptedSerialNumber 
*/
CashAdvanceCustomerIdentification.prototype.setEncryptedSerialNumber = function(encryptedSerialNumber) {
  this.encryptedSerialNumber = encryptedSerialNumber;
};

/**
* Get the field value
* Encrypted identification serial number
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getEncryptedSerialNumber = function() {
  return this.encryptedSerialNumber;
};

/**
* Set the field value
* Expiration date in format MMDDYYYY
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} expirationDate 
*/
CashAdvanceCustomerIdentification.prototype.setExpirationDate = function(expirationDate) {
  this.expirationDate = expirationDate;
};

/**
* Get the field value
* Expiration date in format MMDDYYYY
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getExpirationDate = function() {
  return this.expirationDate;
};

/**
* Set the field value
* State in which identification was issued
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} issuingState 
*/
CashAdvanceCustomerIdentification.prototype.setIssuingState = function(issuingState) {
  this.issuingState = issuingState;
};

/**
* Get the field value
* State in which identification was issued
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getIssuingState = function() {
  return this.issuingState;
};

/**
* Set the field value
* Country in which identification was issued
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} issuingCountry 
*/
CashAdvanceCustomerIdentification.prototype.setIssuingCountry = function(issuingCountry) {
  this.issuingCountry = issuingCountry;
};

/**
* Get the field value
* Country in which identification was issued
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getIssuingCountry = function() {
  return this.issuingCountry;
};

/**
* Set the field value
* Full customer name
*
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} customerName 
*/
CashAdvanceCustomerIdentification.prototype.setCustomerName = function(customerName) {
  this.customerName = customerName;
};

/**
* Get the field value
* Full customer name
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getCustomerName = function() {
  return this.customerName;
};

/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} addressStreet1 
*/
CashAdvanceCustomerIdentification.prototype.setAddressStreet1 = function(addressStreet1) {
  this.addressStreet1 = addressStreet1;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getAddressStreet1 = function() {
  return this.addressStreet1;
};

/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} addressStreet2 
*/
CashAdvanceCustomerIdentification.prototype.setAddressStreet2 = function(addressStreet2) {
  this.addressStreet2 = addressStreet2;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getAddressStreet2 = function() {
  return this.addressStreet2;
};

/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} addressCity 
*/
CashAdvanceCustomerIdentification.prototype.setAddressCity = function(addressCity) {
  this.addressCity = addressCity;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getAddressCity = function() {
  return this.addressCity;
};

/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} addressState 
*/
CashAdvanceCustomerIdentification.prototype.setAddressState = function(addressState) {
  this.addressState = addressState;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getAddressState = function() {
  return this.addressState;
};

/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} addressZipCode 
*/
CashAdvanceCustomerIdentification.prototype.setAddressZipCode = function(addressZipCode) {
  this.addressZipCode = addressZipCode;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getAddressZipCode = function() {
  return this.addressZipCode;
};

/**
* Set the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @param {String} addressCountry 
*/
CashAdvanceCustomerIdentification.prototype.setAddressCountry = function(addressCountry) {
  this.addressCountry = addressCountry;
};

/**
* Get the field value
* @memberof payments.CashAdvanceCustomerIdentification
* @return {String} 
*/
CashAdvanceCustomerIdentification.prototype.getAddressCountry = function() {
  return this.addressCountry;
};

/**
* @memberof payments.CashAdvanceCustomerIdentification
* @private
*/
CashAdvanceCustomerIdentification.prototype.getMetaInfo = function(fieldName) {
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

CashAdvanceCustomerIdentification.prototype.toString = function() {
  return JSON.stringify(this);
};

CashAdvanceCustomerIdentification._meta_ =  {fields:  {}};
CashAdvanceCustomerIdentification._meta_._class_ =  CashAdvanceCustomerIdentification;
CashAdvanceCustomerIdentification._meta_.fields["idType"] = {};
CashAdvanceCustomerIdentification._meta_.fields["idType"].type = payments_IdType;
CashAdvanceCustomerIdentification._meta_.fields["serialNumber"] = {};
CashAdvanceCustomerIdentification._meta_.fields["serialNumber"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["maskedSerialNumber"] = {};
CashAdvanceCustomerIdentification._meta_.fields["maskedSerialNumber"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["encryptedSerialNumber"] = {};
CashAdvanceCustomerIdentification._meta_.fields["encryptedSerialNumber"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["expirationDate"] = {};
CashAdvanceCustomerIdentification._meta_.fields["expirationDate"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["issuingState"] = {};
CashAdvanceCustomerIdentification._meta_.fields["issuingState"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["issuingCountry"] = {};
CashAdvanceCustomerIdentification._meta_.fields["issuingCountry"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["customerName"] = {};
CashAdvanceCustomerIdentification._meta_.fields["customerName"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["addressStreet1"] = {};
CashAdvanceCustomerIdentification._meta_.fields["addressStreet1"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["addressStreet2"] = {};
CashAdvanceCustomerIdentification._meta_.fields["addressStreet2"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["addressCity"] = {};
CashAdvanceCustomerIdentification._meta_.fields["addressCity"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["addressState"] = {};
CashAdvanceCustomerIdentification._meta_.fields["addressState"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["addressZipCode"] = {};
CashAdvanceCustomerIdentification._meta_.fields["addressZipCode"].type = String;
CashAdvanceCustomerIdentification._meta_.fields["addressCountry"] = {};
CashAdvanceCustomerIdentification._meta_.fields["addressCountry"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CashAdvanceCustomerIdentification;
}
