/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


 /**
 *  Interface to the Clover remote-pay API.
 *
 *  Defines the interface used to interact with remote pay
 *  adapters.
 */
/**
* @constructor
* @memberof remotepay
*/
var ICloverConnector = function() {
};


/**
* Send a signature acceptance
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.VerifySignatureRequest} request 
* @return void
*/
ICloverConnector.prototype.acceptSignature = function(request) {
};

/**
* Accepts a payment that has been challenged.
* @memberof remotepay.ICloverConnector
*
* @param {payments.Payment} payment 
* @return void
*/
ICloverConnector.prototype.acceptPayment = function(payment) {
};

/**
* Rejects a payment that has been challenged.
* @memberof remotepay.ICloverConnector
*
* @param {payments.Payment} payment 
* @param {base.Challenge} challenge 
* @return void
*/
ICloverConnector.prototype.rejectPayment = function(payment, challenge) {
};

/**
* Request an authorization operation.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.AuthRequest} authRequest 
* @return void
*/
ICloverConnector.prototype.auth = function(authRequest) {
};

/**
* Request a preauth operation.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.PreAuthRequest} preAuthRequest 
* @return void
*/
ICloverConnector.prototype.preAuth = function(preAuthRequest) {
};

/**
* Request a cancel be sent to the device.
  * @deprecated - use {@link #invokeInputOption(InputOption)}, or {@link #resetDevice()}.  The cancel() functionality is dependant upon the presence of a 'cancel' input option being present on the screen, and the terminology is confusing.  A call to this function sends a 'cancel' button press, but the device may not be in a state where it can respond to the button press.
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.cancel = function() {
};

/**
* Request a preauth be captured.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.CapturePreAuthRequest} capturePreAuthRequest 
* @return void
*/
ICloverConnector.prototype.capturePreAuth = function(capturePreAuthRequest) {
};

/**
* Request a closeout.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.CloseoutRequest} closeoutRequest 
* @return void
*/
ICloverConnector.prototype.closeout = function(closeoutRequest) {
};

/**
* Incompatibility between sdks!  Old cloud had this.
  * Show the customer facing receipt option screen for the specified payment
  *
  * @deprecated - use #displayPaymentReceiptOptions(string orderId, string paymentId)
* @memberof remotepay.ICloverConnector
*
* @param {String} orderId 
* @param {String} paymentId 
* @return void
*/
ICloverConnector.prototype.showPaymentReceiptOptions = function(orderId, paymentId) {
};

/**
* Show the customer facing receipt option screen for the specified payment
* @memberof remotepay.ICloverConnector
*
* @param {String} orderId 
* @param {String} paymentId 
* @return void
*/
ICloverConnector.prototype.displayPaymentReceiptOptions = function(orderId, paymentId) {
};

/**
* Display order information on the screen. Calls to this method will cause the DisplayOrder
  * to show on the clover device. If a DisplayOrder is already showing on the Clover device,
  * it will replace the existing DisplayOrder on the device.
* @memberof remotepay.ICloverConnector
*
* @param {order.DisplayOrder} order 
* @return void
*/
ICloverConnector.prototype.showDisplayOrder = function(order) {
};

/**
* Removes the Display order information on the screen.
* @memberof remotepay.ICloverConnector
*
* @param {order.DisplayOrder} order 
* @return void
*/
ICloverConnector.prototype.removeDisplayOrder = function(order) {
};

/**
* Notify device of a discount being added to the order. The discount will then reflect in the displayOrder.
  * Note: This is independent of a discount being added to a display line item.
* @memberof remotepay.ICloverConnector
*
* @param {order.DisplayDiscount} discount 
* @param {order.DisplayOrder} order 
* @return void
*/
ICloverConnector.prototype.discountAddedToDisplayOrder = function(discount, order) {
};

/**
* Notify device of a discount being removed to the order. The discount will then reflect in the displayOrder.
  * Note: This is independent of a discount being removed to a display line item.
* @memberof remotepay.ICloverConnector
*
* @param {order.DisplayDiscount} discount 
* @param {order.DisplayOrder} order 
* @return void
*/
ICloverConnector.prototype.discountRemovedFromDisplayOrder = function(discount, order) {
};

/**
* Notify device of a line item being added to the order. The line item will then reflect in the displayOrder.
  * Note: This is independent of a line item being added to a display line item.
* @memberof remotepay.ICloverConnector
*
* @param {order.DisplayLineItem} lineItem 
* @param {order.DisplayOrder} order 
* @return void
*/
ICloverConnector.prototype.lineItemAddedToDisplayOrder = function(lineItem, order) {
};

/**
* Notify device of a line item being removed to the order. The line item will then reflect in the displayOrder.
  * Note: This is independent of a line item being removed to a display line item.
* @memberof remotepay.ICloverConnector
*
* @param {order.DisplayLineItem} lineItem 
* @param {order.DisplayOrder} order 
* @return void
*/
ICloverConnector.prototype.lineItemRemovedFromDisplayOrder = function(lineItem, order) {
};

/**
* Destroy the connector.  After this is called, the connection to the device is severed, and this object is
  * no longer usable
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.dispose = function() {
};

/**
* Send a keystroke to the device.  When in non secure displays are on the device, this can be used to
  * act in the role of the user to 'press' available keys.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.InputOption} io 
* @return void
*/
ICloverConnector.prototype.invokeInputOption = function(io) {
};

/**
* Do a refund to a card.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.ManualRefundRequest} request 
* @return void
*/
ICloverConnector.prototype.manualRefund = function(request) {
};

/**
* Do a refund on a previously made payment.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.RefundPaymentRequest} request 
* @return void
*/
ICloverConnector.prototype.refundPayment = function(request) {
};

/**
* Open the first cash drawer that is found connected to the clover device.
* @memberof remotepay.ICloverConnector
*
* @param {String} reason 
* @return void
*/
ICloverConnector.prototype.openCashDrawer = function(reason) {
};

/**
* Print the passed image. bitmap is a language specific object that represents an image.
  * @deprecated - use {@link #printImageFromURL()}.  This functionality is severely limited because of transport limitations.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.Img} bitmap 
* @return void
*/
ICloverConnector.prototype.printImage = function(bitmap) {
};

/**
* Print an image on the clover device that is found at the passed url.
* @memberof remotepay.ICloverConnector
*
* @param {String} imgUrl 
* @return void
*/
ICloverConnector.prototype.printImageFromURL = function(imgUrl) {
};

/**
* Print text on the clover device printer.
* @memberof remotepay.ICloverConnector
*
* @param {Array.<String>} messages An array of 
* @return void
*/
ICloverConnector.prototype.printText = function(messages) {
};

/**
* Reject a signature
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.VerifySignatureRequest} request 
* @return void
*/
ICloverConnector.prototype.rejectSignature = function(request) {
};

/**
* Send a message to the device to reset back to the welcome screen.  Can be used when the device is in
  * an unknown state. Will trigger an onResetDevice callback
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.resetDevice = function() {
};

/**
* Begin a sale transaction.
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.SaleRequest} request 
* @return void
*/
ICloverConnector.prototype.sale = function(request) {
};

/**
* Show a text message on the device.
* @memberof remotepay.ICloverConnector
*
* @param {String} message 
* @return void
*/
ICloverConnector.prototype.showMessage = function(message) {
};

/**
* Show the thank you display on the device.
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.showThankYouScreen = function() {
};

/**
* Show the welcome display on the device.
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.showWelcomeScreen = function() {
};

/**
* Tip adjust an existing auth
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.TipAdjustAuthRequest} request 
* @return void
*/
ICloverConnector.prototype.tipAdjustAuth = function(request) {
};

/**
* Vault a card using optional cardEntryMethods
* @memberof remotepay.ICloverConnector
*
* @param {Number} cardEntryMethods must be an integer
* @return void
*/
ICloverConnector.prototype.vaultCard = function(cardEntryMethods) {
};

/**
* Void a payment
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.VoidPaymentRequest} request 
* @return void
*/
ICloverConnector.prototype.voidPayment = function(request) {
};

/**
* Starts communication with the device.  This is called after the connector is created and listeners are added to the connector.
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.initializeConnection = function() {
};

/**
* Used to request a list of pending payments that have been taken offline, but
  * haven't processed yet. will trigger an onRetrievePendingPaymentsResponse callback
* @memberof remotepay.ICloverConnector
*
* @return void
*/
ICloverConnector.prototype.retrievePendingPayments = function() {
};

/**
* Sends a request to read card information and call back with the information collected.
  * @see ICloverConnectorListener.onReadCardDataResponse(ReadCardDataResponse)
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.ReadCardDataRequest} request 
* @return void
*/
ICloverConnector.prototype.readCardData = function(request) {
};

/**
* @param request a message that is sent to an existing running custom activity
  * @see ICloverConnectorListener.onMessageFromActivity(MessageFromActivity)
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.MessageToActivity} request 
* @return void
*/
ICloverConnector.prototype.sendMessageToActivity = function(request) {
};

/**
*  Start a custom activity on a device
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.CustomActivityRequest} request 
* @return void
*/
ICloverConnector.prototype.startCustomActivity = function(request) {
};

/**
* retrieve the status of the device, and conditionally re-send the last message
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.RetrieveDeviceStatusRequest} request 
* @return {Null} 
*/
ICloverConnector.prototype.retrieveDeviceStatus = function(request) {
  return null;
};

/**
* Sends a request to get a payment.  Only valid for payments made in the past 24 hours on the device queried
  * @see ICloverConnectorListener.onRetrievePaymentResponse(RetrievePaymentResponse)
* @memberof remotepay.ICloverConnector
*
* @param {remotepay.RetrievePaymentRequest} request 
* @return void
*/
ICloverConnector.prototype.retrievePayment = function(request) {
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ICloverConnector;
}

