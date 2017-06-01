/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof remotemessage
*/
var RetrieveDeviceStatusOptions = function() {
  this._class_ = RetrieveDeviceStatusOptions;
  this.sendLastMessage = false;
};


/**
* Set the field value
* Send last message, if true
*
* @memberof remotemessage.RetrieveDeviceStatusOptions
* @param {Boolean} sendLastMessage 
*/
RetrieveDeviceStatusOptions.prototype.setSendLastMessage = function(sendLastMessage) {
  this.sendLastMessage = sendLastMessage;
};

/**
* Get the field value
* Send last message, if true
* @memberof remotemessage.RetrieveDeviceStatusOptions
* @return {Boolean} 
*/
RetrieveDeviceStatusOptions.prototype.getSendLastMessage = function() {
  return this.sendLastMessage;
};

/**
* @memberof remotemessage.RetrieveDeviceStatusOptions
* @private
*/
RetrieveDeviceStatusOptions.prototype.getMetaInfo = function(fieldName) {
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

RetrieveDeviceStatusOptions.prototype.toString = function() {
  return JSON.stringify(this);
};

RetrieveDeviceStatusOptions._meta_ =  {fields:  {}};
RetrieveDeviceStatusOptions._meta_._class_ =  RetrieveDeviceStatusOptions;
RetrieveDeviceStatusOptions._meta_.fields["sendLastMessage"] = {};
RetrieveDeviceStatusOptions._meta_.fields["sendLastMessage"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrieveDeviceStatusOptions;
}

