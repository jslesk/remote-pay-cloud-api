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
var StopVasMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = StopVasMessage;
  this.setMethod(remotemessage_Method["STOP_VAS"]);
};

StopVasMessage.prototype = Object.create(remotemessage_Message.prototype);
StopVasMessage.prototype.constructor = StopVasMessage;

StopVasMessage._meta_ =  {fields:  {}};
StopVasMessage._meta_._class_ =  StopVasMessage;
StopVasMessage._meta_._superMeta_ = remotemessage_Message._meta_;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = StopVasMessage;
}

