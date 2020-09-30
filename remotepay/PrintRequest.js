/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");
var remotepay_Img = require("../remotepay/Img");

/** Request to print an image, text, or an image from a URL. Current intention is to only have one. */
/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var PrintRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = PrintRequest;
  this.images = undefined;
  this.text = undefined;
  this.imageUrls = undefined;
  this.printRequestId = undefined;
  this.printDeviceId = undefined;
};

PrintRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
PrintRequest.prototype.constructor = PrintRequest;

/**
* Set the field value
* The image to be printed (put in an array for future extensibility).
*
* @memberof remotepay.PrintRequest
* @param {Array.<remotepay.Img>} images An array of 
*/
PrintRequest.prototype.setImages = function(images) {
  this.images = images;
};

/**
* Get the field value
* The image to be printed (put in an array for future extensibility).
* @memberof remotepay.PrintRequest
* @return {Array.<remotepay.Img>} An array of 
*/
PrintRequest.prototype.getImages = function() {
  return this.images;
};

/**
* Set the field value
* The text to be printed.
*
* @memberof remotepay.PrintRequest
* @param {Array.<String>} text An array of 
*/
PrintRequest.prototype.setText = function(text) {
  this.text = text;
};

/**
* Get the field value
* The text to be printed.
* @memberof remotepay.PrintRequest
* @return {Array.<String>} An array of 
*/
PrintRequest.prototype.getText = function() {
  return this.text;
};

/**
* Set the field value
* The image URLs to be printed (put in an array for future extensibility).
*
* @memberof remotepay.PrintRequest
* @param {Array.<String>} imageUrls An array of 
*/
PrintRequest.prototype.setImageUrls = function(imageUrls) {
  this.imageUrls = imageUrls;
};

/**
* Get the field value
* The image URLs to be printed (put in an array for future extensibility).
* @memberof remotepay.PrintRequest
* @return {Array.<String>} An array of 
*/
PrintRequest.prototype.getImageUrls = function() {
  return this.imageUrls;
};

/**
* Set the field value
* The ID associated with the request (for Status checks and similar use).
*
* @memberof remotepay.PrintRequest
* @param {String|Null} printRequestId 
*/
PrintRequest.prototype.setPrintRequestId = function(printRequestId) {
  this.printRequestId = printRequestId;
};

/**
* Get the field value
* The ID associated with the request (for Status checks and similar use).
* @memberof remotepay.PrintRequest
* @return {String|Null} 
*/
PrintRequest.prototype.getPrintRequestId = function() {
  return this.printRequestId;
};

/**
* Set the field value
* The ID of the device the print job should print from.
*
* @memberof remotepay.PrintRequest
* @param {String|Null} printDeviceId 
*/
PrintRequest.prototype.setPrintDeviceId = function(printDeviceId) {
  this.printDeviceId = printDeviceId;
};

/**
* Get the field value
* The ID of the device the print job should print from.
* @memberof remotepay.PrintRequest
* @return {String|Null} 
*/
PrintRequest.prototype.getPrintDeviceId = function() {
  return this.printDeviceId;
};

PrintRequest._meta_ =  {fields:  {}};
PrintRequest._meta_._class_ =  PrintRequest;
PrintRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
PrintRequest._meta_.fields["images"] = {};
PrintRequest._meta_.fields["images"].type = Array;
PrintRequest._meta_.fields["images"].elementType = remotepay_Img;
PrintRequest._meta_.fields["text"] = {};
PrintRequest._meta_.fields["text"].type = Array;
PrintRequest._meta_.fields["imageUrls"] = {};
PrintRequest._meta_.fields["imageUrls"].type = Array;
PrintRequest._meta_.fields["printRequestId"] = {};
PrintRequest._meta_.fields["printRequestId"].type = String;
PrintRequest._meta_.fields["printDeviceId"] = {};
PrintRequest._meta_.fields["printDeviceId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PrintRequest;
}

