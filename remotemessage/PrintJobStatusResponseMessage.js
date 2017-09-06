/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var printer_PrintJobStatus = require("../printer/PrintJobStatus");
var remotemessage_Message = require("../remotemessage/Message");

/** contains the status of the requested print job. */
/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var PrintJobStatusResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = PrintJobStatusResponseMessage;
  this.setMethod(remotemessage_Method["PRINT_JOB_STATUS_RESPONSE"]);
  this.externalPrintJobId = undefined;
  this.status = undefined;
};

PrintJobStatusResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
PrintJobStatusResponseMessage.prototype.constructor = PrintJobStatusResponseMessage;

/**
* Set the field value
* External print job ID that status was retrieved for
*
* @memberof remotemessage.PrintJobStatusResponseMessage
* @param {String} externalPrintJobId 
*/
PrintJobStatusResponseMessage.prototype.setExternalPrintJobId = function(externalPrintJobId) {
  this.externalPrintJobId = externalPrintJobId;
};

/**
* Get the field value
* External print job ID that status was retrieved for
* @memberof remotemessage.PrintJobStatusResponseMessage
* @return {String} 
*/
PrintJobStatusResponseMessage.prototype.getExternalPrintJobId = function() {
  return this.externalPrintJobId;
};

/**
* Set the field value
* The current status of the requested print job
*
* @memberof remotemessage.PrintJobStatusResponseMessage
* @param {printer.PrintJobStatus} status 
*/
PrintJobStatusResponseMessage.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* The current status of the requested print job
* @memberof remotemessage.PrintJobStatusResponseMessage
* @return {printer.PrintJobStatus} 
*/
PrintJobStatusResponseMessage.prototype.getStatus = function() {
  return this.status;
};

PrintJobStatusResponseMessage._meta_ =  {fields:  {}};
PrintJobStatusResponseMessage._meta_._class_ =  PrintJobStatusResponseMessage;
PrintJobStatusResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
PrintJobStatusResponseMessage._meta_.fields["externalPrintJobId"] = {};
PrintJobStatusResponseMessage._meta_.fields["externalPrintJobId"].type = String;
PrintJobStatusResponseMessage._meta_.fields["status"] = {};
PrintJobStatusResponseMessage._meta_.fields["status"].type = printer_PrintJobStatus;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PrintJobStatusResponseMessage;
}

