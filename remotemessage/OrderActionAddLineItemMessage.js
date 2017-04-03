/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_AddLineItemAction = require("../remotemessage/AddLineItemAction");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var OrderActionAddLineItemMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = OrderActionAddLineItemMessage;
  this.setMethod(remotemessage_Method["ORDER_ACTION_ADD_LINE_ITEM"]);
  this.addLineItemAction = undefined;
};

OrderActionAddLineItemMessage.prototype = Object.create(remotemessage_Message.prototype);
OrderActionAddLineItemMessage.prototype.constructor = OrderActionAddLineItemMessage;

/**
* Set the field value
* @memberof remotemessage.OrderActionAddLineItemMessage
* @param {remotemessage.AddLineItemAction} addLineItemAction 
*/
OrderActionAddLineItemMessage.prototype.setAddLineItemAction = function(addLineItemAction) {
  this.addLineItemAction = addLineItemAction;
};

/**
* Get the field value
* @memberof remotemessage.OrderActionAddLineItemMessage
* @return {remotemessage.AddLineItemAction} 
*/
OrderActionAddLineItemMessage.prototype.getAddLineItemAction = function() {
  return this.addLineItemAction;
};

OrderActionAddLineItemMessage._meta_ =  {fields:  {}};
OrderActionAddLineItemMessage._meta_._class_ =  OrderActionAddLineItemMessage;
OrderActionAddLineItemMessage._meta_._superMeta_ = remotemessage_Message._meta_;
OrderActionAddLineItemMessage._meta_.fields["addLineItemAction"] = {};
OrderActionAddLineItemMessage._meta_.fields["addLineItemAction"].type = remotemessage_AddLineItemAction;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderActionAddLineItemMessage;
}

