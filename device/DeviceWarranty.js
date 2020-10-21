/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/** The state of a warranty for a device. */
/**
* @constructor
* @memberof device
*/
var DeviceWarranty = function() {
  this._class_ = DeviceWarranty;
  this.id = undefined;
  this.serialNumber = undefined;
  this.standardWarrantyStartDay = undefined;
  this.standardWarrantyEndDay = undefined;
  this.standardWarrantyStartDate = undefined;
  this.standardWarrantyEndDate = undefined;
  this.extendedWarrantyStatus = undefined;
  this.extendedWarrantyStartDay = undefined;
  this.extendedWarrantyEndDay = undefined;
  this.extendedWarrantyStartDate = undefined;
  this.extendedWarrantyEndDate = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof device.DeviceWarranty
* @param {String} id 
*/
DeviceWarranty.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* @memberof device.DeviceWarranty
* @param {String} serialNumber 
*/
DeviceWarranty.prototype.setSerialNumber = function(serialNumber) {
  this.serialNumber = serialNumber;
};

/**
* Get the field value
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getSerialNumber = function() {
  return this.serialNumber;
};

/**
* Set the field value
* Day standard warranty starts dd-MMM-yyyy
*
* @memberof device.DeviceWarranty
* @param {String} standardWarrantyStartDay 
*/
DeviceWarranty.prototype.setStandardWarrantyStartDay = function(standardWarrantyStartDay) {
  this.standardWarrantyStartDay = standardWarrantyStartDay;
};

/**
* Get the field value
* Day standard warranty starts dd-MMM-yyyy
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getStandardWarrantyStartDay = function() {
  return this.standardWarrantyStartDay;
};

/**
* Set the field value
* Day standard warranty ends dd-MMM-yyyy
*
* @memberof device.DeviceWarranty
* @param {String} standardWarrantyEndDay 
*/
DeviceWarranty.prototype.setStandardWarrantyEndDay = function(standardWarrantyEndDay) {
  this.standardWarrantyEndDay = standardWarrantyEndDay;
};

/**
* Get the field value
* Day standard warranty ends dd-MMM-yyyy
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getStandardWarrantyEndDay = function() {
  return this.standardWarrantyEndDay;
};

/**
* Set the field value
* Date standard warranty starts
*
* @memberof device.DeviceWarranty
* @param {Number} standardWarrantyStartDate must be a long integer
*/
DeviceWarranty.prototype.setStandardWarrantyStartDate = function(standardWarrantyStartDate) {
  this.standardWarrantyStartDate = standardWarrantyStartDate;
};

/**
* Get the field value
* Date standard warranty starts
* @memberof device.DeviceWarranty
* @return {Number} must be a long integer
*/
DeviceWarranty.prototype.getStandardWarrantyStartDate = function() {
  return this.standardWarrantyStartDate;
};

/**
* Set the field value
* Date standard warranty ends
*
* @memberof device.DeviceWarranty
* @param {Number} standardWarrantyEndDate must be a long integer
*/
DeviceWarranty.prototype.setStandardWarrantyEndDate = function(standardWarrantyEndDate) {
  this.standardWarrantyEndDate = standardWarrantyEndDate;
};

/**
* Get the field value
* Date standard warranty ends
* @memberof device.DeviceWarranty
* @return {Number} must be a long integer
*/
DeviceWarranty.prototype.getStandardWarrantyEndDate = function() {
  return this.standardWarrantyEndDate;
};

/**
* Set the field value
* Status of the extended warranty
*
* @memberof device.DeviceWarranty
* @param {String} extendedWarrantyStatus 
*/
DeviceWarranty.prototype.setExtendedWarrantyStatus = function(extendedWarrantyStatus) {
  this.extendedWarrantyStatus = extendedWarrantyStatus;
};

/**
* Get the field value
* Status of the extended warranty
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getExtendedWarrantyStatus = function() {
  return this.extendedWarrantyStatus;
};

/**
* Set the field value
* Day extended warranty starts dd-MMM-yyyy
*
* @memberof device.DeviceWarranty
* @param {String} extendedWarrantyStartDay 
*/
DeviceWarranty.prototype.setExtendedWarrantyStartDay = function(extendedWarrantyStartDay) {
  this.extendedWarrantyStartDay = extendedWarrantyStartDay;
};

/**
* Get the field value
* Day extended warranty starts dd-MMM-yyyy
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getExtendedWarrantyStartDay = function() {
  return this.extendedWarrantyStartDay;
};

/**
* Set the field value
* Day extended warranty ends dd-MMM-yyyy
*
* @memberof device.DeviceWarranty
* @param {String} extendedWarrantyEndDay 
*/
DeviceWarranty.prototype.setExtendedWarrantyEndDay = function(extendedWarrantyEndDay) {
  this.extendedWarrantyEndDay = extendedWarrantyEndDay;
};

/**
* Get the field value
* Day extended warranty ends dd-MMM-yyyy
* @memberof device.DeviceWarranty
* @return {String} 
*/
DeviceWarranty.prototype.getExtendedWarrantyEndDay = function() {
  return this.extendedWarrantyEndDay;
};

/**
* Set the field value
* Date extended warranty starts
*
* @memberof device.DeviceWarranty
* @param {Number} extendedWarrantyStartDate must be a long integer
*/
DeviceWarranty.prototype.setExtendedWarrantyStartDate = function(extendedWarrantyStartDate) {
  this.extendedWarrantyStartDate = extendedWarrantyStartDate;
};

/**
* Get the field value
* Date extended warranty starts
* @memberof device.DeviceWarranty
* @return {Number} must be a long integer
*/
DeviceWarranty.prototype.getExtendedWarrantyStartDate = function() {
  return this.extendedWarrantyStartDate;
};

/**
* Set the field value
* Date extended warranty ends
*
* @memberof device.DeviceWarranty
* @param {Number} extendedWarrantyEndDate must be a long integer
*/
DeviceWarranty.prototype.setExtendedWarrantyEndDate = function(extendedWarrantyEndDate) {
  this.extendedWarrantyEndDate = extendedWarrantyEndDate;
};

/**
* Get the field value
* Date extended warranty ends
* @memberof device.DeviceWarranty
* @return {Number} must be a long integer
*/
DeviceWarranty.prototype.getExtendedWarrantyEndDate = function() {
  return this.extendedWarrantyEndDate;
};

/**
* @memberof device.DeviceWarranty
* @private
*/
DeviceWarranty.prototype.getMetaInfo = function(fieldName) {
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

DeviceWarranty.prototype.toString = function() {
  return JSON.stringify(this);
};

DeviceWarranty._meta_ =  {fields:  {}};
DeviceWarranty._meta_._class_ =  DeviceWarranty;
DeviceWarranty._meta_.fields["id"] = {};
DeviceWarranty._meta_.fields["id"].type = String;
DeviceWarranty._meta_.fields["serialNumber"] = {};
DeviceWarranty._meta_.fields["serialNumber"].type = String;
DeviceWarranty._meta_.fields["standardWarrantyStartDay"] = {};
DeviceWarranty._meta_.fields["standardWarrantyStartDay"].type = String;
DeviceWarranty._meta_.fields["standardWarrantyEndDay"] = {};
DeviceWarranty._meta_.fields["standardWarrantyEndDay"].type = String;
DeviceWarranty._meta_.fields["standardWarrantyStartDate"] = {};
DeviceWarranty._meta_.fields["standardWarrantyStartDate"].type = Number;
DeviceWarranty._meta_.fields["standardWarrantyEndDate"] = {};
DeviceWarranty._meta_.fields["standardWarrantyEndDate"].type = Number;
DeviceWarranty._meta_.fields["extendedWarrantyStatus"] = {};
DeviceWarranty._meta_.fields["extendedWarrantyStatus"].type = String;
DeviceWarranty._meta_.fields["extendedWarrantyStartDay"] = {};
DeviceWarranty._meta_.fields["extendedWarrantyStartDay"].type = String;
DeviceWarranty._meta_.fields["extendedWarrantyEndDay"] = {};
DeviceWarranty._meta_.fields["extendedWarrantyEndDay"].type = String;
DeviceWarranty._meta_.fields["extendedWarrantyStartDate"] = {};
DeviceWarranty._meta_.fields["extendedWarrantyStartDate"].type = Number;
DeviceWarranty._meta_.fields["extendedWarrantyEndDate"] = {};
DeviceWarranty._meta_.fields["extendedWarrantyEndDate"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DeviceWarranty;
}
