/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_CardType = require("../payments/CardType");

/**
* @constructor
* @memberof payments
*/
var BatchCardTotal = function() {
  this._class_ = BatchCardTotal;
  this.cardType = undefined;
  this.cardTypeLabel = undefined;
  this.installments = undefined;
  this.count = undefined;
  this.total = undefined;
};


/**
* Set the field value
* @memberof payments.BatchCardTotal
* @param {payments.CardType} cardType 
*/
BatchCardTotal.prototype.setCardType = function(cardType) {
  this.cardType = cardType;
};

/**
* Get the field value
* @memberof payments.BatchCardTotal
* @return {payments.CardType} 
*/
BatchCardTotal.prototype.getCardType = function() {
  return this.cardType;
};

/**
* Set the field value
* In the case of CardType.OTHER, an optional label might be provided
*
* @memberof payments.BatchCardTotal
* @param {String} cardTypeLabel 
*/
BatchCardTotal.prototype.setCardTypeLabel = function(cardTypeLabel) {
  this.cardTypeLabel = cardTypeLabel;
};

/**
* Get the field value
* In the case of CardType.OTHER, an optional label might be provided
* @memberof payments.BatchCardTotal
* @return {String} 
*/
BatchCardTotal.prototype.getCardTypeLabel = function() {
  return this.cardTypeLabel;
};

/**
* Set the field value
* Number of installments for this CardTotal
*
* @memberof payments.BatchCardTotal
* @param {Number} installments must be a long integer
*/
BatchCardTotal.prototype.setInstallments = function(installments) {
  this.installments = installments;
};

/**
* Get the field value
* Number of installments for this CardTotal
* @memberof payments.BatchCardTotal
* @return {Number} must be a long integer
*/
BatchCardTotal.prototype.getInstallments = function() {
  return this.installments;
};

/**
* Set the field value
* Total count of types
*
* @memberof payments.BatchCardTotal
* @param {Number} count must be a long integer
*/
BatchCardTotal.prototype.setCount = function(count) {
  this.count = count;
};

/**
* Get the field value
* Total count of types
* @memberof payments.BatchCardTotal
* @return {Number} must be a long integer
*/
BatchCardTotal.prototype.getCount = function() {
  return this.count;
};

/**
* Set the field value
* Total amount for type
*
* @memberof payments.BatchCardTotal
* @param {Number} total must be a long integer
*/
BatchCardTotal.prototype.setTotal = function(total) {
  this.total = total;
};

/**
* Get the field value
* Total amount for type
* @memberof payments.BatchCardTotal
* @return {Number} must be a long integer
*/
BatchCardTotal.prototype.getTotal = function() {
  return this.total;
};

/**
* @memberof payments.BatchCardTotal
* @private
*/
BatchCardTotal.prototype.getMetaInfo = function(fieldName) {
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

BatchCardTotal.prototype.toString = function() {
  return JSON.stringify(this);
};

BatchCardTotal._meta_ =  {fields:  {}};
BatchCardTotal._meta_._class_ =  BatchCardTotal;
BatchCardTotal._meta_.fields["cardType"] = {};
BatchCardTotal._meta_.fields["cardType"].type = payments_CardType;
BatchCardTotal._meta_.fields["cardTypeLabel"] = {};
BatchCardTotal._meta_.fields["cardTypeLabel"].type = String;
BatchCardTotal._meta_.fields["installments"] = {};
BatchCardTotal._meta_.fields["installments"].type = Number;
BatchCardTotal._meta_.fields["count"] = {};
BatchCardTotal._meta_.fields["count"].type = Number;
BatchCardTotal._meta_.fields["total"] = {};
BatchCardTotal._meta_.fields["total"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BatchCardTotal;
}

