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
var LastMessageResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = LastMessageResponseMessage;
  this.setMethod(remotemessage_Method["LAST_MSG_RESPONSE"]);
  this.request = undefined;
  this.response = undefined;
};

LastMessageResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
LastMessageResponseMessage.prototype.constructor = LastMessageResponseMessage;

/**
* Set the field value
* The last transactional request the device recorded
*
* @memberof remotemessage.LastMessageResponseMessage
* @param {remotemessage.Message} request 
*/
LastMessageResponseMessage.prototype.setRequest = function(request) {
  this.request = request;
};

/**
* Get the field value
* The last transactional request the device recorded
* @memberof remotemessage.LastMessageResponseMessage
* @return {remotemessage.Message} 
*/
LastMessageResponseMessage.prototype.getRequest = function() {
  return this.request;
};

/**
* Set the field value
* The last transactional response the device recorded
*
* @memberof remotemessage.LastMessageResponseMessage
* @param {remotemessage.Message} response 
*/
LastMessageResponseMessage.prototype.setResponse = function(response) {
  this.response = response;
};

/**
* Get the field value
* The last transactional response the device recorded
* @memberof remotemessage.LastMessageResponseMessage
* @return {remotemessage.Message} 
*/
LastMessageResponseMessage.prototype.getResponse = function() {
  return this.response;
};

LastMessageResponseMessage._meta_ =  {fields:  {}};
LastMessageResponseMessage._meta_._class_ =  LastMessageResponseMessage;
LastMessageResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
LastMessageResponseMessage._meta_.fields["request"] = {};
LastMessageResponseMessage._meta_.fields["request"].type = remotemessage_Message;
LastMessageResponseMessage._meta_.fields["response"] = {};
LastMessageResponseMessage._meta_.fields["response"].type = remotemessage_Message;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LastMessageResponseMessage;
}

