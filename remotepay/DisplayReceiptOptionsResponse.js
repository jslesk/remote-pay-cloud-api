/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_ResultStatus = require("../remotepay/ResultStatus");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var DisplayReceiptOptionsResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = DisplayReceiptOptionsResponse;
  this.resultStatus = undefined;
};

DisplayReceiptOptionsResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
DisplayReceiptOptionsResponse.prototype.constructor = DisplayReceiptOptionsResponse;

/**
* Set the field value
* The status of the request.
*
* @memberof remotepay.DisplayReceiptOptionsResponse
* @param {remotepay.ResultStatus} resultStatus 
*/
DisplayReceiptOptionsResponse.prototype.setResultStatus = function(resultStatus) {
  this.resultStatus = resultStatus;
};

/**
* Get the field value
* The status of the request.
* @memberof remotepay.DisplayReceiptOptionsResponse
* @return {remotepay.ResultStatus} 
*/
DisplayReceiptOptionsResponse.prototype.getResultStatus = function() {
  return this.resultStatus;
};

DisplayReceiptOptionsResponse._meta_ =  {fields:  {}};
DisplayReceiptOptionsResponse._meta_._class_ =  DisplayReceiptOptionsResponse;
DisplayReceiptOptionsResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
DisplayReceiptOptionsResponse._meta_.fields["resultStatus"] = {};
DisplayReceiptOptionsResponse._meta_.fields["resultStatus"].type = remotepay_ResultStatus;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DisplayReceiptOptionsResponse;
}

