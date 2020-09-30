/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof customers
*/
var Confirmation = function() {
  this._class_ = Confirmation;
  this.order = undefined;
  this.customer = undefined;
  this.card = undefined;
  this.emailAddress = undefined;
};


/**
* Set the field value
* Order UUID could be passed in if confirmation is related to a transaction
*
* @memberof customers.Confirmation
* @param {Null|base.Reference} order 
*/
Confirmation.prototype.setOrder = function(order) {
  this.order = order;
};

/**
* Get the field value
* Order UUID could be passed in if confirmation is related to a transaction
* @memberof customers.Confirmation
* @return {Null|base.Reference} 
*/
Confirmation.prototype.getOrder = function() {
  return this.order;
};

/**
* Set the field value
* Customer associated with the confirmation
*
* @memberof customers.Confirmation
* @param {Null|base.Reference} customer 
*/
Confirmation.prototype.setCustomer = function(customer) {
  this.customer = customer;
};

/**
* Get the field value
* Customer associated with the confirmation
* @memberof customers.Confirmation
* @return {Null|base.Reference} 
*/
Confirmation.prototype.getCustomer = function() {
  return this.customer;
};

/**
* Set the field value
* New Card that is being confirmed
*
* @memberof customers.Confirmation
* @param {Null|base.Reference} card 
*/
Confirmation.prototype.setCard = function(card) {
  this.card = card;
};

/**
* Get the field value
* New Card that is being confirmed
* @memberof customers.Confirmation
* @return {Null|base.Reference} 
*/
Confirmation.prototype.getCard = function() {
  return this.card;
};

/**
* Set the field value
* Email address to send confirmation to
*
* @memberof customers.Confirmation
* @param {Null|String} emailAddress 
*/
Confirmation.prototype.setEmailAddress = function(emailAddress) {
  this.emailAddress = emailAddress;
};

/**
* Get the field value
* Email address to send confirmation to
* @memberof customers.Confirmation
* @return {Null|String} 
*/
Confirmation.prototype.getEmailAddress = function() {
  return this.emailAddress;
};

/**
* @memberof customers.Confirmation
* @private
*/
Confirmation.prototype.getMetaInfo = function(fieldName) {
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

Confirmation.prototype.toString = function() {
  return JSON.stringify(this);
};

Confirmation._meta_ =  {fields:  {}};
Confirmation._meta_._class_ =  Confirmation;
Confirmation._meta_.fields["order"] = {};
Confirmation._meta_.fields["order"].type = base_Reference;
Confirmation._meta_.fields["customer"] = {};
Confirmation._meta_.fields["customer"].type = base_Reference;
Confirmation._meta_.fields["card"] = {};
Confirmation._meta_.fields["card"].type = base_Reference;
Confirmation._meta_.fields["emailAddress"] = {};
Confirmation._meta_.fields["emailAddress"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Confirmation;
}

