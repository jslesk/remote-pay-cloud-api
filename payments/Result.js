/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
The expected values of the payment.result and credit.result fields
* @memberof payments
* @enum {string}
*/
Result = {
  SUCCESS : "SUCCESS",
  FAIL : "FAIL",
  INITIATED : "INITIATED",
  VOIDED : "VOIDED",
  VOIDING : "VOIDING",
  VOID_FAILED : "VOID_FAILED",
  AUTH : "AUTH",
  AUTH_COMPLETED : "AUTH_COMPLETED",
  CASH_ADVANCE : "CASH_ADVANCE"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Result;
}

