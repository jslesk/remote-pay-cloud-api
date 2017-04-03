/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var remotemessage_Message = require("../remotemessage/Message");
var payments_VaultedCard = require("../payments/VaultedCard");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var VaultCardResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = VaultCardResponseMessage;
  this.setMethod(remotemessage_Method["VAULT_CARD_RESPONSE"]);
  this.reason = undefined;
  this.status = undefined;
  this.card = undefined;
};

VaultCardResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
VaultCardResponseMessage.prototype.constructor = VaultCardResponseMessage;

/**
* Set the field value
* May be populated when the operation fails.
*
* @memberof remotemessage.VaultCardResponseMessage
* @param {String} reason 
*/
VaultCardResponseMessage.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* May be populated when the operation fails.
* @memberof remotemessage.VaultCardResponseMessage
* @return {String} 
*/
VaultCardResponseMessage.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* @memberof remotemessage.VaultCardResponseMessage
* @param {remotemessage.ResultStatus} status 
*/
VaultCardResponseMessage.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* @memberof remotemessage.VaultCardResponseMessage
* @return {remotemessage.ResultStatus} 
*/
VaultCardResponseMessage.prototype.getStatus = function() {
  return this.status;
};

/**
* Set the field value
* The card that was vaulted.
*
* @memberof remotemessage.VaultCardResponseMessage
* @param {payments.VaultedCard} card 
*/
VaultCardResponseMessage.prototype.setCard = function(card) {
  this.card = card;
};

/**
* Get the field value
* The card that was vaulted.
* @memberof remotemessage.VaultCardResponseMessage
* @return {payments.VaultedCard} 
*/
VaultCardResponseMessage.prototype.getCard = function() {
  return this.card;
};

VaultCardResponseMessage._meta_ =  {fields:  {}};
VaultCardResponseMessage._meta_._class_ =  VaultCardResponseMessage;
VaultCardResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
VaultCardResponseMessage._meta_.fields["reason"] = {};
VaultCardResponseMessage._meta_.fields["reason"].type = String;
VaultCardResponseMessage._meta_.fields["status"] = {};
VaultCardResponseMessage._meta_.fields["status"].type = remotemessage_ResultStatus;
VaultCardResponseMessage._meta_.fields["card"] = {};
VaultCardResponseMessage._meta_.fields["card"].type = payments_VaultedCard;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VaultCardResponseMessage;
}

