/**
 * Describes a credit card info type from QuickBooks.
 */
export default interface CreditCardInfo {
  /**
   * Credit-card number for this customer or this payment.
   *
   * Beginning with qbXML spec 6.0 and QuickBooks 2007, you must mask the credit card number with lower case "x" and no dashes. For example, xxxxxxxxxxxx1234.
   */
  CreditCardNumber: string;

  /**
   * The month when the credit card expires.
   */
  ExpirationMonth: number;

  /**
   * The year when the credit card expires.
   */
  ExpirationYear: number;

  /**
   * The name on the customer's credit card.
   */
  NameOnCard: string;

  /**
   * The address associated with this credit card.
   */
  CreditCardAddress: string;

  /**
   * The postal code associated with the address for this credit card.
   */
  CreditCardPostalCode: string;
}
