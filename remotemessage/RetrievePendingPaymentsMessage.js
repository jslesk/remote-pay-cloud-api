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
var RetrievePendingPaymentsMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RetrievePendingPaymentsMessage;
  this.setMethod(remotemessage_Method["RETRIEVE_PENDING_PAYMENTS"]);
};

RetrievePendingPaymentsMessage.prototype = Object.create(remotemessage_Message.prototype);
RetrievePendingPaymentsMessage.prototype.constructor = RetrievePendingPaymentsMessage;

RetrievePendingPaymentsMessage._meta_ =  {fields:  {}};
RetrievePendingPaymentsMessage._meta_._class_ =  RetrievePendingPaymentsMessage;
RetrievePendingPaymentsMessage._meta_._superMeta_ = remotemessage_Message._meta_;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrievePendingPaymentsMessage;
}
