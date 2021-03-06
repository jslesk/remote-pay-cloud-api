/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var order_DisplayDiscount = require("../order/DisplayDiscount");
var order_DisplayModification = require("../order/DisplayModification");

/**
* @constructor
* @memberof order
*/
var DisplayLineItem = function() {
  this._class_ = DisplayLineItem;
  this.id = undefined;
  this.orderId = undefined;
  this.name = undefined;
  this.alternateName = undefined;
  this.price = undefined;
  this.unitPrice = undefined;
  this.quantity = undefined;
  this.unitQuantity = undefined;
  this.note = undefined;
  this.printed = "false";
  this.binName = undefined;
  this.userData = undefined;
  this.discounts = undefined;
  this.discountAmount = undefined;
  this.exchanged = "false";
  this.exchangedAmount = undefined;
  this.modifications = undefined;
  this.refunded = "false";
  this.refundedAmount = undefined;
  this.percent = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof order.DisplayLineItem
* @param {String} id 
*/
DisplayLineItem.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof order.DisplayLineItem
* @return {String} 
*/
DisplayLineItem.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The order with which the line item is associated
*
* @memberof order.DisplayLineItem
* @param {String} orderId 
*/
DisplayLineItem.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* The order with which the line item is associated
* @memberof order.DisplayLineItem
* @return {String} 
*/
DisplayLineItem.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* Line item name
*
* @memberof order.DisplayLineItem
* @param {Null|String} name 
*/
DisplayLineItem.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Line item name
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Alternate name of the line item
*
* @memberof order.DisplayLineItem
* @param {Null|String} alternateName 
*/
DisplayLineItem.prototype.setAlternateName = function(alternateName) {
  this.alternateName = alternateName;
};

/**
* Get the field value
* Alternate name of the line item
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getAlternateName = function() {
  return this.alternateName;
};

/**
* Set the field value
* Formatted total price of the line item
*
* @memberof order.DisplayLineItem
* @param {String} price 
*/
DisplayLineItem.prototype.setPrice = function(price) {
  this.price = price;
};

/**
* Get the field value
* Formatted total price of the line item
* @memberof order.DisplayLineItem
* @return {String} 
*/
DisplayLineItem.prototype.getPrice = function() {
  return this.price;
};

/**
* Set the field value
* Formatted unit price in cases if applicable
*
* @memberof order.DisplayLineItem
* @param {String} unitPrice 
*/
DisplayLineItem.prototype.setUnitPrice = function(unitPrice) {
  this.unitPrice = unitPrice;
};

/**
* Get the field value
* Formatted unit price in cases if applicable
* @memberof order.DisplayLineItem
* @return {String} 
*/
DisplayLineItem.prototype.getUnitPrice = function() {
  return this.unitPrice;
};

/**
* Set the field value
* Formatted quantity
*
* @memberof order.DisplayLineItem
* @param {Null|String} quantity 
*/
DisplayLineItem.prototype.setQuantity = function(quantity) {
  this.quantity = quantity;
};

/**
* Get the field value
* Formatted quantity
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getQuantity = function() {
  return this.quantity;
};

/**
* Set the field value
* Formatted unit quantity - such as 10 @ $1.99/oz
*
* @memberof order.DisplayLineItem
* @param {Null|String} unitQuantity 
*/
DisplayLineItem.prototype.setUnitQuantity = function(unitQuantity) {
  this.unitQuantity = unitQuantity;
};

/**
* Get the field value
* Formatted unit quantity - such as 10 @ $1.99/oz
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getUnitQuantity = function() {
  return this.unitQuantity;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Null|String} note 
*/
DisplayLineItem.prototype.setNote = function(note) {
  this.note = note;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getNote = function() {
  return this.note;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Boolean} printed 
*/
DisplayLineItem.prototype.setPrinted = function(printed) {
  this.printed = printed;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Boolean} 
*/
DisplayLineItem.prototype.getPrinted = function() {
  return this.printed;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Null|String} binName 
*/
DisplayLineItem.prototype.setBinName = function(binName) {
  this.binName = binName;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getBinName = function() {
  return this.binName;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Null|String} userData 
*/
DisplayLineItem.prototype.setUserData = function(userData) {
  this.userData = userData;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getUserData = function() {
  return this.userData;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Array.<order.DisplayDiscount>} discounts An array of 
*/
DisplayLineItem.prototype.setDiscounts = function(discounts) {
  this.discounts = discounts;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Array.<order.DisplayDiscount>} An array of 
*/
DisplayLineItem.prototype.getDiscounts = function() {
  return this.discounts;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Null|String} discountAmount 
*/
DisplayLineItem.prototype.setDiscountAmount = function(discountAmount) {
  this.discountAmount = discountAmount;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getDiscountAmount = function() {
  return this.discountAmount;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Boolean} exchanged 
*/
DisplayLineItem.prototype.setExchanged = function(exchanged) {
  this.exchanged = exchanged;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Boolean} 
*/
DisplayLineItem.prototype.getExchanged = function() {
  return this.exchanged;
};

/**
* Set the field value
* Formatted exchanged amount
*
* @memberof order.DisplayLineItem
* @param {Null|String} exchangedAmount 
*/
DisplayLineItem.prototype.setExchangedAmount = function(exchangedAmount) {
  this.exchangedAmount = exchangedAmount;
};

/**
* Get the field value
* Formatted exchanged amount
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getExchangedAmount = function() {
  return this.exchangedAmount;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Array.<order.DisplayModification>} modifications An array of 
*/
DisplayLineItem.prototype.setModifications = function(modifications) {
  this.modifications = modifications;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Array.<order.DisplayModification>} An array of 
*/
DisplayLineItem.prototype.getModifications = function() {
  return this.modifications;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Boolean} refunded 
*/
DisplayLineItem.prototype.setRefunded = function(refunded) {
  this.refunded = refunded;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Boolean} 
*/
DisplayLineItem.prototype.getRefunded = function() {
  return this.refunded;
};

/**
* Set the field value
* Formatted refunded amount
*
* @memberof order.DisplayLineItem
* @param {Null|String} refundedAmount 
*/
DisplayLineItem.prototype.setRefundedAmount = function(refundedAmount) {
  this.refundedAmount = refundedAmount;
};

/**
* Get the field value
* Formatted refunded amount
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getRefundedAmount = function() {
  return this.refundedAmount;
};

/**
* Set the field value
* @memberof order.DisplayLineItem
* @param {Null|String} percent 
*/
DisplayLineItem.prototype.setPercent = function(percent) {
  this.percent = percent;
};

/**
* Get the field value
* @memberof order.DisplayLineItem
* @return {Null|String} 
*/
DisplayLineItem.prototype.getPercent = function() {
  return this.percent;
};

/**
* @memberof order.DisplayLineItem
* @private
*/
DisplayLineItem.prototype.getMetaInfo = function(fieldName) {
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

DisplayLineItem.prototype.toString = function() {
  return JSON.stringify(this);
};

DisplayLineItem._meta_ =  {fields:  {}};
DisplayLineItem._meta_._class_ =  DisplayLineItem;
DisplayLineItem._meta_.fields["id"] = {};
DisplayLineItem._meta_.fields["id"].type = String;
DisplayLineItem._meta_.fields["orderId"] = {};
DisplayLineItem._meta_.fields["orderId"].type = String;
DisplayLineItem._meta_.fields["name"] = {};
DisplayLineItem._meta_.fields["name"].type = String;
DisplayLineItem._meta_.fields["alternateName"] = {};
DisplayLineItem._meta_.fields["alternateName"].type = String;
DisplayLineItem._meta_.fields["price"] = {};
DisplayLineItem._meta_.fields["price"].type = String;
DisplayLineItem._meta_.fields["unitPrice"] = {};
DisplayLineItem._meta_.fields["unitPrice"].type = String;
DisplayLineItem._meta_.fields["quantity"] = {};
DisplayLineItem._meta_.fields["quantity"].type = String;
DisplayLineItem._meta_.fields["unitQuantity"] = {};
DisplayLineItem._meta_.fields["unitQuantity"].type = String;
DisplayLineItem._meta_.fields["note"] = {};
DisplayLineItem._meta_.fields["note"].type = String;
DisplayLineItem._meta_.fields["printed"] = {};
DisplayLineItem._meta_.fields["printed"].type = Boolean;
DisplayLineItem._meta_.fields["binName"] = {};
DisplayLineItem._meta_.fields["binName"].type = String;
DisplayLineItem._meta_.fields["userData"] = {};
DisplayLineItem._meta_.fields["userData"].type = String;
DisplayLineItem._meta_.fields["discounts"] = {};
DisplayLineItem._meta_.fields["discounts"].type = Array;
DisplayLineItem._meta_.fields["discounts"].elementType = order_DisplayDiscount;
DisplayLineItem._meta_.fields["discountAmount"] = {};
DisplayLineItem._meta_.fields["discountAmount"].type = String;
DisplayLineItem._meta_.fields["exchanged"] = {};
DisplayLineItem._meta_.fields["exchanged"].type = Boolean;
DisplayLineItem._meta_.fields["exchangedAmount"] = {};
DisplayLineItem._meta_.fields["exchangedAmount"].type = String;
DisplayLineItem._meta_.fields["modifications"] = {};
DisplayLineItem._meta_.fields["modifications"].type = Array;
DisplayLineItem._meta_.fields["modifications"].elementType = order_DisplayModification;
DisplayLineItem._meta_.fields["refunded"] = {};
DisplayLineItem._meta_.fields["refunded"].type = Boolean;
DisplayLineItem._meta_.fields["refundedAmount"] = {};
DisplayLineItem._meta_.fields["refundedAmount"].type = String;
DisplayLineItem._meta_.fields["percent"] = {};
DisplayLineItem._meta_.fields["percent"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DisplayLineItem;
}

