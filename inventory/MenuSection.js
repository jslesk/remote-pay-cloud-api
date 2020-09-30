/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var inventory_MenuItem = require("../inventory/MenuItem");
var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof inventory
*/
var MenuSection = function() {
  this._class_ = MenuSection;
  this.id = undefined;
  this.category = undefined;
  this.merchantRef = undefined;
  this.items = undefined;
  this.itemList = undefined;
  this.name = undefined;
  this.description = undefined;
  this.imageFilename = undefined;
  this.enabled = undefined;
  this.createdTime = undefined;
  this.modifiedTime = undefined;
  this.deletedTime = undefined;
};


/**
* Set the field value
* Item_layout id
*
* @memberof inventory.MenuSection
* @param {String} id 
*/
MenuSection.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Item_layout id
* @memberof inventory.MenuSection
* @return {String} 
*/
MenuSection.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Reference to a category
*
* @memberof inventory.MenuSection
* @param {base.Reference} category 
*/
MenuSection.prototype.setCategory = function(category) {
  this.category = category;
};

/**
* Get the field value
* Reference to a category
* @memberof inventory.MenuSection
* @return {base.Reference} 
*/
MenuSection.prototype.getCategory = function() {
  return this.category;
};

/**
* Set the field value
* Reference to the merchant that created the item layout
*
* @memberof inventory.MenuSection
* @param {base.Reference} merchantRef 
*/
MenuSection.prototype.setMerchantRef = function(merchantRef) {
  this.merchantRef = merchantRef;
};

/**
* Get the field value
* Reference to the merchant that created the item layout
* @memberof inventory.MenuSection
* @return {base.Reference} 
*/
MenuSection.prototype.getMerchantRef = function() {
  return this.merchantRef;
};

/**
* Set the field value
* Items included in the category
*
* @memberof inventory.MenuSection
* @param {String} items 
*/
MenuSection.prototype.setItems = function(items) {
  this.items = items;
};

/**
* Get the field value
* Items included in the category
* @memberof inventory.MenuSection
* @return {String} 
*/
MenuSection.prototype.getItems = function() {
  return this.items;
};

/**
* Set the field value
* List of menu item records
*
* @memberof inventory.MenuSection
* @param {Array.<inventory.MenuItem>} itemList An array of 
*/
MenuSection.prototype.setItemList = function(itemList) {
  this.itemList = itemList;
};

/**
* Get the field value
* List of menu item records
* @memberof inventory.MenuSection
* @return {Array.<inventory.MenuItem>} An array of 
*/
MenuSection.prototype.getItemList = function() {
  return this.itemList;
};

/**
* Set the field value
* Customer facing item layout name
*
* @memberof inventory.MenuSection
* @param {String} name 
*/
MenuSection.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Customer facing item layout name
* @memberof inventory.MenuSection
* @return {String} 
*/
MenuSection.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Item layout description
*
* @memberof inventory.MenuSection
* @param {String} description 
*/
MenuSection.prototype.setDescription = function(description) {
  this.description = description;
};

/**
* Get the field value
* Item layout description
* @memberof inventory.MenuSection
* @return {String} 
*/
MenuSection.prototype.getDescription = function() {
  return this.description;
};

/**
* Set the field value
* Item layout image file path
*
* @memberof inventory.MenuSection
* @param {String} imageFilename 
*/
MenuSection.prototype.setImageFilename = function(imageFilename) {
  this.imageFilename = imageFilename;
};

/**
* Get the field value
* Item layout image file path
* @memberof inventory.MenuSection
* @return {String} 
*/
MenuSection.prototype.getImageFilename = function() {
  return this.imageFilename;
};

/**
* Set the field value
* Section enabled for menu
*
* @memberof inventory.MenuSection
* @param {Boolean} enabled 
*/
MenuSection.prototype.setEnabled = function(enabled) {
  this.enabled = enabled;
};

/**
* Get the field value
* Section enabled for menu
* @memberof inventory.MenuSection
* @return {Boolean} 
*/
MenuSection.prototype.getEnabled = function() {
  return this.enabled;
};

/**
* Set the field value
* Timestamp when the menu section was created
*
* @memberof inventory.MenuSection
* @param {Number} createdTime must be a long integer
*/
MenuSection.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* Timestamp when the menu section was created
* @memberof inventory.MenuSection
* @return {Number} must be a long integer
*/
MenuSection.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* Set the field value
* Timestamp when the menu section was last modified
*
* @memberof inventory.MenuSection
* @param {Number} modifiedTime must be a long integer
*/
MenuSection.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* Timestamp when the menu section was last modified
* @memberof inventory.MenuSection
* @return {Number} must be a long integer
*/
MenuSection.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* Timestamp when the menu section was last deleted
*
* @memberof inventory.MenuSection
* @param {Number} deletedTime must be a long integer
*/
MenuSection.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* Timestamp when the menu section was last deleted
* @memberof inventory.MenuSection
* @return {Number} must be a long integer
*/
MenuSection.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* @memberof inventory.MenuSection
* @private
*/
MenuSection.prototype.getMetaInfo = function(fieldName) {
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

MenuSection.prototype.toString = function() {
  return JSON.stringify(this);
};

MenuSection._meta_ =  {fields:  {}};
MenuSection._meta_._class_ =  MenuSection;
MenuSection._meta_.fields["id"] = {};
MenuSection._meta_.fields["id"].type = String;
MenuSection._meta_.fields["category"] = {};
MenuSection._meta_.fields["category"].type = base_Reference;
MenuSection._meta_.fields["merchantRef"] = {};
MenuSection._meta_.fields["merchantRef"].type = base_Reference;
MenuSection._meta_.fields["items"] = {};
MenuSection._meta_.fields["items"].type = String;
MenuSection._meta_.fields["itemList"] = {};
MenuSection._meta_.fields["itemList"].type = Array;
MenuSection._meta_.fields["itemList"].elementType = inventory_MenuItem;
MenuSection._meta_.fields["name"] = {};
MenuSection._meta_.fields["name"].type = String;
MenuSection._meta_.fields["description"] = {};
MenuSection._meta_.fields["description"].type = String;
MenuSection._meta_.fields["imageFilename"] = {};
MenuSection._meta_.fields["imageFilename"].type = String;
MenuSection._meta_.fields["enabled"] = {};
MenuSection._meta_.fields["enabled"].type = Boolean;
MenuSection._meta_.fields["createdTime"] = {};
MenuSection._meta_.fields["createdTime"].type = Number;
MenuSection._meta_.fields["modifiedTime"] = {};
MenuSection._meta_.fields["modifiedTime"].type = Number;
MenuSection._meta_.fields["deletedTime"] = {};
MenuSection._meta_.fields["deletedTime"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = MenuSection;
}

