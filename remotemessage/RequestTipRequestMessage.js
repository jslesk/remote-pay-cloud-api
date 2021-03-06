/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var merchant_TipSuggestion = require("../merchant/TipSuggestion");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var RequestTipRequestMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RequestTipRequestMessage;
  this.setMethod(remotemessage_Method["REQUEST_TIP"]);
  this.tipSuggestions = undefined;
  this.tippableAmount = undefined;
};

RequestTipRequestMessage.prototype = Object.create(remotemessage_Message.prototype);
RequestTipRequestMessage.prototype.constructor = RequestTipRequestMessage;

/**
* Set the field value
* @memberof remotemessage.RequestTipRequestMessage
* @param {Array.<merchant.TipSuggestion>} tipSuggestions An array of 
*/
RequestTipRequestMessage.prototype.setTipSuggestions = function(tipSuggestions) {
  this.tipSuggestions = tipSuggestions;
};

/**
* Get the field value
* @memberof remotemessage.RequestTipRequestMessage
* @return {Array.<merchant.TipSuggestion>} An array of 
*/
RequestTipRequestMessage.prototype.getTipSuggestions = function() {
  return this.tipSuggestions;
};

/**
* Set the field value
* @memberof remotemessage.RequestTipRequestMessage
* @param {Number} tippableAmount must be a long integer
*/
RequestTipRequestMessage.prototype.setTippableAmount = function(tippableAmount) {
  this.tippableAmount = tippableAmount;
};

/**
* Get the field value
* @memberof remotemessage.RequestTipRequestMessage
* @return {Number} must be a long integer
*/
RequestTipRequestMessage.prototype.getTippableAmount = function() {
  return this.tippableAmount;
};

RequestTipRequestMessage._meta_ =  {fields:  {}};
RequestTipRequestMessage._meta_._class_ =  RequestTipRequestMessage;
RequestTipRequestMessage._meta_._superMeta_ = remotemessage_Message._meta_;
RequestTipRequestMessage._meta_.fields["tipSuggestions"] = {};
RequestTipRequestMessage._meta_.fields["tipSuggestions"].type = Array;
RequestTipRequestMessage._meta_.fields["tipSuggestions"].elementType = merchant_TipSuggestion;
RequestTipRequestMessage._meta_.fields["tippableAmount"] = {};
RequestTipRequestMessage._meta_.fields["tippableAmount"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RequestTipRequestMessage;
}

