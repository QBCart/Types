/**
 * Describes an address-block type from QuickBooks.
 */
export default interface AddressBlock {
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
}
