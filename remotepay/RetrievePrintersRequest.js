/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");
var printer_PrintCategory = require("../printer/PrintCategory");

/** Request to retrieve printers attached to a specific device. */
/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var RetrievePrintersRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = RetrievePrintersRequest;
  this.category = undefined;
};

RetrievePrintersRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
RetrievePrintersRequest.prototype.constructor = RetrievePrintersRequest;

/**
* Set the field value
* Category of printers to retrieve
*
* @memberof remotepay.RetrievePrintersRequest
* @param {printer.PrintCategory} category 
*/
RetrievePrintersRequest.prototype.setCategory = function(category) {
  this.category = category;
};

/**
* Get the field value
* Category of printers to retrieve
* @memberof remotepay.RetrievePrintersRequest
* @return {printer.PrintCategory} 
*/
RetrievePrintersRequest.prototype.getCategory = function() {
  return this.category;
};

RetrievePrintersRequest._meta_ =  {fields:  {}};
RetrievePrintersRequest._meta_._class_ =  RetrievePrintersRequest;
RetrievePrintersRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
RetrievePrintersRequest._meta_.fields["category"] = {};
RetrievePrintersRequest._meta_.fields["category"].type = printer_PrintCategory;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrievePrintersRequest;
}

