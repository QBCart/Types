/**
 * Describes an address type from QuickBooks.
 */
export default interface Address {
  /**
   * The first line of an address.
   */
  Addr1: string;

  /**
   * The second line of an address.
   */
  Addr2: string;

  /**
   * The third line of an address.
   */
  Addr3: string;

  /**
   * The fourth line of an address.
   */
  Addr4: string;

  /**
   * The fifth line of an address.
   */
  Addr5: string;

  /**
   * The city name in an address.
   */
  City: string;

  /**
   * The state name in an address.
   */
  State: string;

  /**
   * The postal code in an address.
   */
  PostalCode: string;

  /**
   * The country name in an address, or, in returned Host information (HostRet or HostInfo),
   * the country for which this edition of QuickBooks was designed. (Possible values are US, CA, UK, and AU.)
   */
  Country: string;

  /**
   * In a BillAddress or ShipAddress aggregate,
   * the Note field value is written at the bottom of the address in the form in which it appears,
   * such as the invoice form.
   */
  Note: string;
}
