/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/** The information related to a discount and who approved it for a specific line item on an order or entire order. Used for reporting.  */
/**
* @constructor
* @memberof payments
*/
var DiscountApprover = function() {
  this._class_ = DiscountApprover;
  this.discount = undefined;
  this.merchant = undefined;
  this.approvedBy = undefined;
  this.order = undefined;
  this.lineItem = undefined;
  this.createdTime = undefined;
  this.environment = undefined;
};


/**
* Set the field value
* The discount ID and UUID
*
* @memberof payments.DiscountApprover
* @param {base.Reference} discount 
*/
DiscountApprover.prototype.setDiscount = function(discount) {
  this.discount = discount;
};

/**
* Get the field value
* The discount ID and UUID
* @memberof payments.DiscountApprover
* @return {base.Reference} 
*/
DiscountApprover.prototype.getDiscount = function() {
  return this.discount;
};

/**
* Set the field value
* @memberof payments.DiscountApprover
* @param {base.Reference} merchant 
*/
DiscountApprover.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* @memberof payments.DiscountApprover
* @return {base.Reference} 
*/
DiscountApprover.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* Employee who approved the discount
*
* @memberof payments.DiscountApprover
* @param {base.Reference} approvedBy 
*/
DiscountApprover.prototype.setApprovedBy = function(approvedBy) {
  this.approvedBy = approvedBy;
};

/**
* Get the field value
* Employee who approved the discount
* @memberof payments.DiscountApprover
* @return {base.Reference} 
*/
DiscountApprover.prototype.getApprovedBy = function() {
  return this.approvedBy;
};

/**
* Set the field value
* The order with which the discount is associated.
*
* @memberof payments.DiscountApprover
* @param {base.Reference} order 
*/
DiscountApprover.prototype.setOrder = function(order) {
  this.order = order;
};

/**
* Get the field value
* The order with which the discount is associated.
* @memberof payments.DiscountApprover
* @return {base.Reference} 
*/
DiscountApprover.prototype.getOrder = function() {
  return this.order;
};

/**
* Set the field value
* The lineItem with which the discount is associated
*
* @memberof payments.DiscountApprover
* @param {Null|base.Reference} lineItem 
*/
DiscountApprover.prototype.setLineItem = function(lineItem) {
  this.lineItem = lineItem;
};

/**
* Get the field value
* The lineItem with which the discount is associated
* @memberof payments.DiscountApprover
* @return {Null|base.Reference} 
*/
DiscountApprover.prototype.getLineItem = function() {
  return this.lineItem;
};

/**
* Set the field value
* @memberof payments.DiscountApprover
* @param {Number} createdTime must be a long integer
*/
DiscountApprover.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* @memberof payments.DiscountApprover
* @return {Number} must be a long integer
*/
DiscountApprover.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* Which environment was this recorded in
*
* @memberof payments.DiscountApprover
* @param {Null|String} environment 
*/
DiscountApprover.prototype.setEnvironment = function(environment) {
  this.environment = environment;
};

/**
* Get the field value
* Which environment was this recorded in
* @memberof payments.DiscountApprover
* @return {Null|String} 
*/
DiscountApprover.prototype.getEnvironment = function() {
  return this.environment;
};

/**
* @memberof payments.DiscountApprover
* @private
*/
DiscountApprover.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    curclass = curclass.superclass;
  } while(curclass);
  return null;
};

DiscountApprover.prototype.toString = function() {
  return JSON.stringify(this);
};

DiscountApprover._meta_ =  {fields:  {}};
DiscountApprover._meta_.fields["discount"] = {};
DiscountApprover._meta_.fields["discount"].type = base_Reference;
DiscountApprover._meta_.fields["merchant"] = {};
DiscountApprover._meta_.fields["merchant"].type = base_Reference;
DiscountApprover._meta_.fields["approvedBy"] = {};
DiscountApprover._meta_.fields["approvedBy"].type = base_Reference;
DiscountApprover._meta_.fields["order"] = {};
DiscountApprover._meta_.fields["order"].type = base_Reference;
DiscountApprover._meta_.fields["lineItem"] = {};
DiscountApprover._meta_.fields["lineItem"].type = base_Reference;
DiscountApprover._meta_.fields["createdTime"] = {};
DiscountApprover._meta_.fields["createdTime"].type = Number;
DiscountApprover._meta_.fields["environment"] = {};
DiscountApprover._meta_.fields["environment"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DiscountApprover;
}

