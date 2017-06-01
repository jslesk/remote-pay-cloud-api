/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_ExternalDeviceState = require("../remotepay/ExternalDeviceState");

/**
* @constructor
* @memberof remotepay
*/
var ExternalDeviceStateEnum = function() {
  this._class_ = ExternalDeviceStateEnum;
  this.state = undefined;
};


/**
* Set the field value
* @memberof remotepay.ExternalDeviceStateEnum
* @param {remotepay.ExternalDeviceState} state 
*/
ExternalDeviceStateEnum.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* @memberof remotepay.ExternalDeviceStateEnum
* @return {remotepay.ExternalDeviceState} 
*/
ExternalDeviceStateEnum.prototype.getState = function() {
  return this.state;
};

/**
* @memberof remotepay.ExternalDeviceStateEnum
* @private
*/
ExternalDeviceStateEnum.prototype.getMetaInfo = function(fieldName) {
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

ExternalDeviceStateEnum.prototype.toString = function() {
  return JSON.stringify(this);
};

ExternalDeviceStateEnum._meta_ =  {fields:  {}};
ExternalDeviceStateEnum._meta_._class_ =  ExternalDeviceStateEnum;
ExternalDeviceStateEnum._meta_.fields["state"] = {};
ExternalDeviceStateEnum._meta_.fields["state"].type = remotepay_ExternalDeviceState;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ExternalDeviceStateEnum;
}

