/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var employees_EmployeePermission = require("../employees/EmployeePermission");
var base_Reference = require("../base/Reference");
var employees_Permissions = require("../employees/Permissions");

/**
* @constructor
* @memberof employees
*/
var PermissionSet = function() {
  this._class_ = PermissionSet;
  this.id = undefined;
  this.name = undefined;
  this.label = undefined;
  this.app = undefined;
  this.employeeDefault = undefined;
  this.managerDefault = undefined;
  this.permissions = undefined;
  this.employeePermissions = undefined;
  this.module = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof employees.PermissionSet
* @param {String} id 
*/
PermissionSet.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof employees.PermissionSet
* @return {String} 
*/
PermissionSet.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Key of the permissionSet
*
* @memberof employees.PermissionSet
* @param {String} name 
*/
PermissionSet.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Key of the permissionSet
* @memberof employees.PermissionSet
* @return {String} 
*/
PermissionSet.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Label of the permissionSet
*
* @memberof employees.PermissionSet
* @param {String} label 
*/
PermissionSet.prototype.setLabel = function(label) {
  this.label = label;
};

/**
* Get the field value
* Label of the permissionSet
* @memberof employees.PermissionSet
* @return {String} 
*/
PermissionSet.prototype.getLabel = function() {
  return this.label;
};

/**
* Set the field value
* @memberof employees.PermissionSet
* @param {base.Reference} app 
*/
PermissionSet.prototype.setApp = function(app) {
  this.app = app;
};

/**
* Get the field value
* @memberof employees.PermissionSet
* @return {base.Reference} 
*/
PermissionSet.prototype.getApp = function() {
  return this.app;
};

/**
* Set the field value
* @memberof employees.PermissionSet
* @param {Boolean} employeeDefault 
*/
PermissionSet.prototype.setEmployeeDefault = function(employeeDefault) {
  this.employeeDefault = employeeDefault;
};

/**
* Get the field value
* @memberof employees.PermissionSet
* @return {Boolean} 
*/
PermissionSet.prototype.getEmployeeDefault = function() {
  return this.employeeDefault;
};

/**
* Set the field value
* @memberof employees.PermissionSet
* @param {Boolean} managerDefault 
*/
PermissionSet.prototype.setManagerDefault = function(managerDefault) {
  this.managerDefault = managerDefault;
};

/**
* Get the field value
* @memberof employees.PermissionSet
* @return {Boolean} 
*/
PermissionSet.prototype.getManagerDefault = function() {
  return this.managerDefault;
};

/**
* Set the field value
* Bitmap of permissions
*
* @memberof employees.PermissionSet
* @param {employees.Permissions} permissions 
*/
PermissionSet.prototype.setPermissions = function(permissions) {
  this.permissions = permissions;
};

/**
* Get the field value
* Bitmap of permissions
* @memberof employees.PermissionSet
* @return {employees.Permissions} 
*/
PermissionSet.prototype.getPermissions = function() {
  return this.permissions;
};

/**
* Set the field value
* @memberof employees.PermissionSet
* @param {Array.<employees.EmployeePermission>} employeePermissions An array of 
*/
PermissionSet.prototype.setEmployeePermissions = function(employeePermissions) {
  this.employeePermissions = employeePermissions;
};

/**
* Get the field value
* @memberof employees.PermissionSet
* @return {Array.<employees.EmployeePermission>} An array of 
*/
PermissionSet.prototype.getEmployeePermissions = function() {
  return this.employeePermissions;
};

/**
* Set the field value
* The module associated with this permission set (if any)
*
* @memberof employees.PermissionSet
* @param {base.Reference} module 
*/
PermissionSet.prototype.setModule = function(module) {
  this.module = module;
};

/**
* Get the field value
* The module associated with this permission set (if any)
* @memberof employees.PermissionSet
* @return {base.Reference} 
*/
PermissionSet.prototype.getModule = function() {
  return this.module;
};

/**
* @memberof employees.PermissionSet
* @private
*/
PermissionSet.prototype.getMetaInfo = function(fieldName) {
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

PermissionSet.prototype.toString = function() {
  return JSON.stringify(this);
};

PermissionSet._meta_ =  {fields:  {}};
PermissionSet._meta_._class_ =  PermissionSet;
PermissionSet._meta_.fields["id"] = {};
PermissionSet._meta_.fields["id"].type = String;
PermissionSet._meta_.fields["name"] = {};
PermissionSet._meta_.fields["name"].type = String;
PermissionSet._meta_.fields["label"] = {};
PermissionSet._meta_.fields["label"].type = String;
PermissionSet._meta_.fields["app"] = {};
PermissionSet._meta_.fields["app"].type = base_Reference;
PermissionSet._meta_.fields["employeeDefault"] = {};
PermissionSet._meta_.fields["employeeDefault"].type = Boolean;
PermissionSet._meta_.fields["managerDefault"] = {};
PermissionSet._meta_.fields["managerDefault"].type = Boolean;
PermissionSet._meta_.fields["permissions"] = {};
PermissionSet._meta_.fields["permissions"].type = employees_Permissions;
PermissionSet._meta_.fields["employeePermissions"] = {};
PermissionSet._meta_.fields["employeePermissions"].type = Array;
PermissionSet._meta_.fields["employeePermissions"].elementType = employees_EmployeePermission;
PermissionSet._meta_.fields["module"] = {};
PermissionSet._meta_.fields["module"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PermissionSet;
}

