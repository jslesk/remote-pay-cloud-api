/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var remotemessage_ExternalDeviceState = require("../remotemessage/ExternalDeviceState");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var ResetDeviceResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = ResetDeviceResponseMessage;
  this.setMethod(remotemessage_Method["RESET_DEVICE_RESPONSE"]);
  this.reason = undefined;
  this.status = undefined;
  this.state = undefined;
};

ResetDeviceResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
ResetDeviceResponseMessage.prototype.constructor = ResetDeviceResponseMessage;

/**
* Set the field value
* May be populated when the operation fails.
*
* @memberof remotemessage.ResetDeviceResponseMessage
* @param {String} reason 
*/
ResetDeviceResponseMessage.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* May be populated when the operation fails.
* @memberof remotemessage.ResetDeviceResponseMessage
* @return {String} 
*/
ResetDeviceResponseMessage.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* @memberof remotemessage.ResetDeviceResponseMessage
* @param {remotemessage.ResultStatus} status 
*/
ResetDeviceResponseMessage.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* @memberof remotemessage.ResetDeviceResponseMessage
* @return {remotemessage.ResultStatus} 
*/
ResetDeviceResponseMessage.prototype.getStatus = function() {
  return this.status;
};

/**
* Set the field value
* High level state of the connected device.
*
* @memberof remotemessage.ResetDeviceResponseMessage
* @param {remotemessage.ExternalDeviceState} state 
*/
ResetDeviceResponseMessage.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* High level state of the connected device.
* @memberof remotemessage.ResetDeviceResponseMessage
* @return {remotemessage.ExternalDeviceState} 
*/
ResetDeviceResponseMessage.prototype.getState = function() {
  return this.state;
};

ResetDeviceResponseMessage._meta_ =  {fields:  {}};
ResetDeviceResponseMessage._meta_._class_ =  ResetDeviceResponseMessage;
ResetDeviceResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
ResetDeviceResponseMessage._meta_.fields["reason"] = {};
ResetDeviceResponseMessage._meta_.fields["reason"].type = String;
ResetDeviceResponseMessage._meta_.fields["status"] = {};
ResetDeviceResponseMessage._meta_.fields["status"].type = remotemessage_ResultStatus;
ResetDeviceResponseMessage._meta_.fields["state"] = {};
ResetDeviceResponseMessage._meta_.fields["state"].type = remotemessage_ExternalDeviceState;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ResetDeviceResponseMessage;
}

