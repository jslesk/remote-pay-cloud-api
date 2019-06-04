/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof payments
*/
var RegionalExtras = function() {
  this._class_ = RegionalExtras;
  this.FISCAL_INVOICE_NUMBER_KEY = "com.clover.regionalextras.ar.FISCAL_INVOICE_NUMBER_KEY";
  this.INSTALLMENT_NUMBER_KEY = "com.clover.regionalextras.ar.INSTALLMENT_NUMBER_KEY";
  this.INSTALLMENT_PLAN_KEY = "com.clover.regionalextras.ar.INSTALLMENT_PLAN_KEY";
  this.SKIP_FISCAL_INVOICE_NUMBER_SCREEN_VALUE = "com.clover.regionalextras.ar.SKIP_FISCAL_INVOICE_NUMBER_SCREEN_VALUE";
  this.INSTALLMENT_NUMBER_DEFAULT_VALUE = "1";
};


/**
* Get the field value
* @memberof payments.RegionalExtras
* @return {String} 
*/
RegionalExtras.prototype.getFISCALINVOICENUMBERKEY = function() {
  return this.FISCAL_INVOICE_NUMBER_KEY;
};

/**
* Get the field value
* @memberof payments.RegionalExtras
* @return {String} 
*/
RegionalExtras.prototype.getINSTALLMENTNUMBERKEY = function() {
  return this.INSTALLMENT_NUMBER_KEY;
};

/**
* Get the field value
* @memberof payments.RegionalExtras
* @return {String} 
*/
RegionalExtras.prototype.getINSTALLMENTPLANKEY = function() {
  return this.INSTALLMENT_PLAN_KEY;
};

/**
* Get the field value
* @memberof payments.RegionalExtras
* @return {String} 
*/
RegionalExtras.prototype.getSKIPFISCALINVOICENUMBERSCREENVALUE = function() {
  return this.SKIP_FISCAL_INVOICE_NUMBER_SCREEN_VALUE;
};

/**
* Get the field value
* @memberof payments.RegionalExtras
* @return {String} 
*/
RegionalExtras.prototype.getINSTALLMENTNUMBERDEFAULTVALUE = function() {
  return this.INSTALLMENT_NUMBER_DEFAULT_VALUE;
};

/**
* @memberof payments.RegionalExtras
* @private
*/
RegionalExtras.prototype.getMetaInfo = function(fieldName) {
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

RegionalExtras.prototype.toString = function() {
  return JSON.stringify(this);
};

RegionalExtras._meta_ =  {fields:  {}};
RegionalExtras._meta_._class_ =  RegionalExtras;
RegionalExtras._meta_.fields["FISCAL_INVOICE_NUMBER_KEY"] = {};
RegionalExtras._meta_.fields["FISCAL_INVOICE_NUMBER_KEY"].type = String;
RegionalExtras._meta_.fields["INSTALLMENT_NUMBER_KEY"] = {};
RegionalExtras._meta_.fields["INSTALLMENT_NUMBER_KEY"].type = String;
RegionalExtras._meta_.fields["INSTALLMENT_PLAN_KEY"] = {};
RegionalExtras._meta_.fields["INSTALLMENT_PLAN_KEY"].type = String;
RegionalExtras._meta_.fields["SKIP_FISCAL_INVOICE_NUMBER_SCREEN_VALUE"] = {};
RegionalExtras._meta_.fields["SKIP_FISCAL_INVOICE_NUMBER_SCREEN_VALUE"].type = String;
RegionalExtras._meta_.fields["INSTALLMENT_NUMBER_DEFAULT_VALUE"] = {};
RegionalExtras._meta_.fields["INSTALLMENT_NUMBER_DEFAULT_VALUE"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RegionalExtras;
}

