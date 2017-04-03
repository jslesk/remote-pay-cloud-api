/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof inventory
*/
var ItemGroup = function() {
  this._class_ = ItemGroup;
  this.id = undefined;
  this.name = undefined;
  this.items = undefined;
  this.attributes = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof inventory.ItemGroup
* @param {String} id 
*/
ItemGroup.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof inventory.ItemGroup
* @return {String} 
*/
ItemGroup.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Name of the option
*
* @memberof inventory.ItemGroup
* @param {String} name 
*/
ItemGroup.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Name of the option
* @memberof inventory.ItemGroup
* @return {String} 
*/
ItemGroup.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Items that are members of this group
*
* @memberof inventory.ItemGroup
* @param {Array.<base.Reference>} items An array of 
*/
ItemGroup.prototype.setItems = function(items) {
  this.items = items;
};

/**
* Get the field value
* Items that are members of this group
* @memberof inventory.ItemGroup
* @return {Array.<base.Reference>} An array of 
*/
ItemGroup.prototype.getItems = function() {
  return this.items;
};

/**
* Set the field value
* Attributes that belong to this group
*
* @memberof inventory.ItemGroup
* @param {Array.<base.Reference>} attributes An array of 
*/
ItemGroup.prototype.setAttributes = function(attributes) {
  this.attributes = attributes;
};

/**
* Get the field value
* Attributes that belong to this group
* @memberof inventory.ItemGroup
* @return {Array.<base.Reference>} An array of 
*/
ItemGroup.prototype.getAttributes = function() {
  return this.attributes;
};

/**
* @memberof inventory.ItemGroup
* @private
*/
ItemGroup.prototype.getMetaInfo = function(fieldName) {
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

ItemGroup.prototype.toString = function() {
  return JSON.stringify(this);
};

ItemGroup._meta_ =  {fields:  {}};
ItemGroup._meta_._class_ =  ItemGroup;
ItemGroup._meta_.fields["id"] = {};
ItemGroup._meta_.fields["id"].type = String;
ItemGroup._meta_.fields["name"] = {};
ItemGroup._meta_.fields["name"].type = String;
ItemGroup._meta_.fields["items"] = {};
ItemGroup._meta_.fields["items"].type = Array;
ItemGroup._meta_.fields["items"].elementType = base_Reference;
ItemGroup._meta_.fields["attributes"] = {};
ItemGroup._meta_.fields["attributes"].type = Array;
ItemGroup._meta_.fields["attributes"].elementType = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ItemGroup;
}

