/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof remotemessage
* @enum {string}
*/
Method = {
  ACK : "ACK",
  CLOSEOUT_RESPONSE : "CLOSEOUT_RESPONSE",
  CLOSEOUT_REQUEST : "CLOSEOUT_REQUEST",
  CAPTURE_PREAUTH_RESPONSE : "CAPTURE_PREAUTH_RESPONSE",
  CAPTURE_PREAUTH : "CAPTURE_PREAUTH",
  CONFIRM_PAYMENT_MESSAGE : "CONFIRM_PAYMENT_MESSAGE",
  LAST_MSG_REQUEST : "LAST_MSG_REQUEST",
  LAST_MSG_RESPONSE : "LAST_MSG_RESPONSE",
  TIP_ADJUST : "TIP_ADJUST",
  TIP_ADJUST_RESPONSE : "TIP_ADJUST_RESPONSE",
  OPEN_CASH_DRAWER : "OPEN_CASH_DRAWER",
  SHOW_PAYMENT_RECEIPT_OPTIONS : "SHOW_PAYMENT_RECEIPT_OPTIONS",
  REFUND_RESPONSE : "REFUND_RESPONSE",
  REFUND_REQUEST : "REFUND_REQUEST",
  TX_START : "TX_START",
  TX_START_RESPONSE : "TX_START_RESPONSE",
  KEY_PRESS : "KEY_PRESS",
  UI_STATE : "UI_STATE",
  TX_STATE : "TX_STATE",
  FINISH_OK : "FINISH_OK",
  FINISH_CANCEL : "FINISH_CANCEL",
  DISCOVERY_REQUEST : "DISCOVERY_REQUEST",
  DISCOVERY_RESPONSE : "DISCOVERY_RESPONSE",
  TIP_ADDED : "TIP_ADDED",
  VERIFY_SIGNATURE : "VERIFY_SIGNATURE",
  SIGNATURE_VERIFIED : "SIGNATURE_VERIFIED",
  PAYMENT_CONFIRMED : "PAYMENT_CONFIRMED",
  PAYMENT_REJECTED : "PAYMENT_REJECTED",
  PAYMENT_VOIDED : "PAYMENT_VOIDED",
  PRINT_PAYMENT : "PRINT_PAYMENT",
  REFUND_PRINT_PAYMENT : "REFUND_PRINT_PAYMENT",
  PRINT_PAYMENT_MERCHANT_COPY : "PRINT_PAYMENT_MERCHANT_COPY",
  PRINT_CREDIT : "PRINT_CREDIT",
  PRINT_PAYMENT_DECLINE : "PRINT_PAYMENT_DECLINE",
  PRINT_CREDIT_DECLINE : "PRINT_CREDIT_DECLINE",
  PRINT_TEXT : "PRINT_TEXT",
  PRINT_IMAGE : "PRINT_IMAGE",
  TERMINAL_MESSAGE : "TERMINAL_MESSAGE",
  SHOW_WELCOME_SCREEN : "SHOW_WELCOME_SCREEN",
  SHOW_THANK_YOU_SCREEN : "SHOW_THANK_YOU_SCREEN",
  SHOW_ORDER_SCREEN : "SHOW_ORDER_SCREEN",
  BREAK : "BREAK",
  CASHBACK_SELECTED : "CASHBACK_SELECTED",
  PARTIAL_AUTH : "PARTIAL_AUTH",
  VOID_PAYMENT : "VOID_PAYMENT",
  ORDER_ACTION_ADD_DISCOUNT : "ORDER_ACTION_ADD_DISCOUNT",
  ORDER_ACTION_REMOVE_DISCOUNT : "ORDER_ACTION_REMOVE_DISCOUNT",
  ORDER_ACTION_ADD_LINE_ITEM : "ORDER_ACTION_ADD_LINE_ITEM",
  ORDER_ACTION_REMOVE_LINE_ITEM : "ORDER_ACTION_REMOVE_LINE_ITEM",
  ORDER_ACTION_RESPONSE : "ORDER_ACTION_RESPONSE",
  VAULT_CARD : "VAULT_CARD",
  VAULT_CARD_RESPONSE : "VAULT_CARD_RESPONSE",
  LOG_MESSAGE : "LOG_MESSAGE",
  RETRIEVE_PENDING_PAYMENTS : "RETRIEVE_PENDING_PAYMENTS",
  RETRIEVE_PENDING_PAYMENTS_RESPONSE : "RETRIEVE_PENDING_PAYMENTS_RESPONSE",
  CARD_DATA_RESPONSE : "CARD_DATA_RESPONSE",
  CARD_DATA : "CARD_DATA",
  PAIRING_REQUEST : "PAIRING_REQUEST",
  PAIRING_RESPONSE : "PAIRING_RESPONSE",
  PAIRING_CODE : "PAIRING_CODE",
  REMOTE_ERROR : "REMOTE_ERROR",
  ACTIVITY_REQUEST : "ACTIVITY_REQUEST",
  ACTIVITY_RESPONSE : "ACTIVITY_RESPONSE",
  SHUTDOWN : "SHUTDOWN",
  RESET : "RESET",
  FORCECONNECT : "FORCECONNECT",
  RETRIEVE_DEVICE_STATUS_REQUEST : "RETRIEVE_DEVICE_STATUS_REQUEST",
  RETRIEVE_DEVICE_STATUS_RESPONSE : "RETRIEVE_DEVICE_STATUS_RESPONSE",
  RESET_RESPONSE : "RESET_RESPONSE",
  ACTIVITY_MESSAGE_TO_ACTIVITY : "ACTIVITY_MESSAGE_TO_ACTIVITY",
  ACTIVITY_MESSAGE_FROM_ACTIVITY : "ACTIVITY_MESSAGE_FROM_ACTIVITY"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Method;
}

