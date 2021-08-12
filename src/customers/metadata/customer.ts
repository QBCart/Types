/**
 * Describes metadata that QBCart tracks in regards to "Customer" list objects from QuickBooks.
 */
export default interface Metadata {
  /**
   * Whether customer is past due on payment terms.
   */
  PastDue: boolean;

  /**
   * Whether a recent payment was declined.
   */
  DeclinedPayment: boolean;

  /**
   * Reformatted version of FullName used mainly for search and in search results.
   */
  LongName: string;

  /**
   * Abbreviated version of address used mainly for search and in search results.
   */
  Location: string;
}
