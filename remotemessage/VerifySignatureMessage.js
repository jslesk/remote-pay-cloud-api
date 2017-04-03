/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");
var base_Signature = require("../base/Signature");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var VerifySignatureMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = VerifySignatureMessage;
  this.setMethod(remotemessage_Method["VERIFY_SIGNATURE"]);
  this.payment = undefined;
  this.signature = undefined;
};

VerifySignatureMessage.prototype = Object.create(remotemessage_Message.prototype);
VerifySignatureMessage.prototype.constructor = VerifySignatureMessage;

/**
* Set the field value
* A payment
*
* @memberof remotemessage.VerifySignatureMessage
* @param {payments.Payment} payment 
*/
VerifySignatureMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* A payment
* @memberof remotemessage.VerifySignatureMessage
* @return {payments.Payment} 
*/
VerifySignatureMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* A signature
*
* @memberof remotemessage.VerifySignatureMessage
* @param {base.Signature} signature 
*/
VerifySignatureMessage.prototype.setSignature = function(signature) {
  this.signature = signature;
};

/**
* Get the field value
* A signature
* @memberof remotemessage.VerifySignatureMessage
* @return {base.Signature} 
*/
VerifySignatureMessage.prototype.getSignature = function() {
  return this.signature;
};

VerifySignatureMessage._meta_ =  {fields:  {}};
VerifySignatureMessage._meta_._class_ =  VerifySignatureMessage;
VerifySignatureMessage._meta_._superMeta_ = remotemessage_Message._meta_;
VerifySignatureMessage._meta_.fields["payment"] = {};
VerifySignatureMessage._meta_.fields["payment"].type = payments_Payment;
VerifySignatureMessage._meta_.fields["signature"] = {};
VerifySignatureMessage._meta_.fields["signature"].type = base_Signature;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VerifySignatureMessage;
}

