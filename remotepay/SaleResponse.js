/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_PaymentResponse = require("../remotepay/PaymentResponse");

/**
* @constructor
* @augments remotepay.PaymentResponse
* @memberof remotepay
*/
var SaleResponse = function() {
  remotepay_PaymentResponse.call(this);
  this._superClass_ = remotepay_PaymentResponse;
  this._class_ = SaleResponse;
};

SaleResponse.prototype = Object.create(remotepay_PaymentResponse.prototype);
SaleResponse.prototype.constructor = SaleResponse;

SaleResponse._meta_ =  {fields:  {}};
SaleResponse._meta_._class_ =  SaleResponse;
SaleResponse._meta_._superMeta_ = remotepay_PaymentResponse._meta_;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SaleResponse;
}

