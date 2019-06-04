/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof base
*/
var ServiceCharge = function() {
  this._class_ = ServiceCharge;
  this.id = undefined;
  this.name = undefined;
  this.enabled = undefined;
  this.percentage = undefined;
  this.percentageDecimal = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof base.ServiceCharge
* @param {String} id 
*/
ServiceCharge.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof base.ServiceCharge
* @return {String} 
*/
ServiceCharge.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Service charge name
*
* @memberof base.ServiceCharge
* @param {String} name 
*/
ServiceCharge.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Service charge name
* @memberof base.ServiceCharge
* @return {String} 
*/
ServiceCharge.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* If this service charge is enabled
*
* @memberof base.ServiceCharge
* @param {Boolean} enabled 
*/
ServiceCharge.prototype.setEnabled = function(enabled) {
  this.enabled = enabled;
};

/**
* Get the field value
* If this service charge is enabled
* @memberof base.ServiceCharge
* @return {Boolean} 
*/
ServiceCharge.prototype.getEnabled = function() {
  return this.enabled;
};

/**
* Set the field value
* DEPRECATED
*
* @memberof base.ServiceCharge
* @param {Number} percentage must be a long integer
*/
ServiceCharge.prototype.setPercentage = function(percentage) {
  this.percentage = percentage;
};

/**
* Get the field value
* DEPRECATED
* @memberof base.ServiceCharge
* @return {Number} must be a long integer
*/
ServiceCharge.prototype.getPercentage = function() {
  return this.percentage;
};

/**
* Set the field value
* Percent to charge times 10000, e.g. 12.5% will be 125000
*
* @memberof base.ServiceCharge
* @param {Number} percentageDecimal must be a long integer
*/
ServiceCharge.prototype.setPercentageDecimal = function(percentageDecimal) {
  this.percentageDecimal = percentageDecimal;
};

/**
* Get the field value
* Percent to charge times 10000, e.g. 12.5% will be 125000
* @memberof base.ServiceCharge
* @return {Number} must be a long integer
*/
ServiceCharge.prototype.getPercentageDecimal = function() {
  return this.percentageDecimal;
};

/**
* @memberof base.ServiceCharge
* @private
*/
ServiceCharge.prototype.getMetaInfo = function(fieldName) {
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

ServiceCharge.prototype.toString = function() {
  return JSON.stringify(this);
};

ServiceCharge._meta_ =  {fields:  {}};
ServiceCharge._meta_._class_ =  ServiceCharge;
ServiceCharge._meta_.fields["id"] = {};
ServiceCharge._meta_.fields["id"].type = String;
ServiceCharge._meta_.fields["name"] = {};
ServiceCharge._meta_.fields["name"].type = String;
ServiceCharge._meta_.fields["enabled"] = {};
ServiceCharge._meta_.fields["enabled"].type = Boolean;
ServiceCharge._meta_.fields["percentage"] = {};
ServiceCharge._meta_.fields["percentage"].type = Number;
ServiceCharge._meta_.fields["percentageDecimal"] = {};
ServiceCharge._meta_.fields["percentageDecimal"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ServiceCharge;
}

