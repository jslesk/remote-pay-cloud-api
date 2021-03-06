/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var BalanceInquiryRequestMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = BalanceInquiryRequestMessage;
  this.setMethod(remotemessage_Method["BALANCE_INQUIRY"]);
  this.cardEntryMethods = undefined;
  this.cardDataMessage = undefined;
};

BalanceInquiryRequestMessage.prototype = Object.create(remotemessage_Message.prototype);
BalanceInquiryRequestMessage.prototype.constructor = BalanceInquiryRequestMessage;

/**
* Set the field value
* @memberof remotemessage.BalanceInquiryRequestMessage
* @param {Null|Number} cardEntryMethods must be an integer
*/
BalanceInquiryRequestMessage.prototype.setCardEntryMethods = function(cardEntryMethods) {
  this.cardEntryMethods = cardEntryMethods;
};

/**
* Get the field value
* @memberof remotemessage.BalanceInquiryRequestMessage
* @return {Null|Number} must be an integer
*/
BalanceInquiryRequestMessage.prototype.getCardEntryMethods = function() {
  return this.cardEntryMethods;
};

/**
* Set the field value
* @memberof remotemessage.BalanceInquiryRequestMessage
* @param {String} cardDataMessage 
*/
BalanceInquiryRequestMessage.prototype.setCardDataMessage = function(cardDataMessage) {
  this.cardDataMessage = cardDataMessage;
};

/**
* Get the field value
* @memberof remotemessage.BalanceInquiryRequestMessage
* @return {String} 
*/
BalanceInquiryRequestMessage.prototype.getCardDataMessage = function() {
  return this.cardDataMessage;
};

BalanceInquiryRequestMessage._meta_ =  {fields:  {}};
BalanceInquiryRequestMessage._meta_._class_ =  BalanceInquiryRequestMessage;
BalanceInquiryRequestMessage._meta_._superMeta_ = remotemessage_Message._meta_;
BalanceInquiryRequestMessage._meta_.fields["cardEntryMethods"] = {};
BalanceInquiryRequestMessage._meta_.fields["cardEntryMethods"].type = Number;
BalanceInquiryRequestMessage._meta_.fields["cardDataMessage"] = {};
BalanceInquiryRequestMessage._meta_.fields["cardDataMessage"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BalanceInquiryRequestMessage;
}

