/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof merchant
*/
var TipSuggestion = function() {
  this._class_ = TipSuggestion;
  this.id = undefined;
  this.name = undefined;
  this.percentage = undefined;
  this.amount = undefined;
  this.isEnabled = undefined;
};


/**
* Set the field value
* @memberof merchant.TipSuggestion
* @param {String} id 
*/
TipSuggestion.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* @memberof merchant.TipSuggestion
* @return {String} 
*/
TipSuggestion.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Name of the tip
*
* @memberof merchant.TipSuggestion
* @param {String} name 
*/
TipSuggestion.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Name of the tip
* @memberof merchant.TipSuggestion
* @return {String} 
*/
TipSuggestion.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Suggested tip percentage
*
* @memberof merchant.TipSuggestion
* @param {Number} percentage must be a long integer
*/
TipSuggestion.prototype.setPercentage = function(percentage) {
  this.percentage = percentage;
};

/**
* Get the field value
* Suggested tip percentage
* @memberof merchant.TipSuggestion
* @return {Number} must be a long integer
*/
TipSuggestion.prototype.getPercentage = function() {
  return this.percentage;
};

/**
* Set the field value
* Suggested tip amount
*
* @memberof merchant.TipSuggestion
* @param {Number} amount must be a long integer
*/
TipSuggestion.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Suggested tip amount
* @memberof merchant.TipSuggestion
* @return {Number} must be a long integer
*/
TipSuggestion.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* @memberof merchant.TipSuggestion
* @param {Boolean} isEnabled 
*/
TipSuggestion.prototype.setIsEnabled = function(isEnabled) {
  this.isEnabled = isEnabled;
};

/**
* Get the field value
* @memberof merchant.TipSuggestion
* @return {Boolean} 
*/
TipSuggestion.prototype.getIsEnabled = function() {
  return this.isEnabled;
};

/**
* @memberof merchant.TipSuggestion
* @private
*/
TipSuggestion.prototype.getMetaInfo = function(fieldName) {
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

TipSuggestion.prototype.toString = function() {
  return JSON.stringify(this);
};

TipSuggestion._meta_ =  {fields:  {}};
TipSuggestion._meta_._class_ =  TipSuggestion;
TipSuggestion._meta_.fields["id"] = {};
TipSuggestion._meta_.fields["id"].type = String;
TipSuggestion._meta_.fields["name"] = {};
TipSuggestion._meta_.fields["name"].type = String;
TipSuggestion._meta_.fields["percentage"] = {};
TipSuggestion._meta_.fields["percentage"].type = Number;
TipSuggestion._meta_.fields["amount"] = {};
TipSuggestion._meta_.fields["amount"].type = Number;
TipSuggestion._meta_.fields["isEnabled"] = {};
TipSuggestion._meta_.fields["isEnabled"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TipSuggestion;
}

