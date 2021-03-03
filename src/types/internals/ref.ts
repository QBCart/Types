/**
 * Describes a ref type from QuickBooks.
 */
export default interface Ref {
  /**
   * Along with FullName, ListID is a way to identify a list object.
   * When a list object is added to QuickBooks through the SDK or through the QuickBooks user interface,
   * the QuickBooks server assigns it a ListID. A ListID is not unique across lists,
   * but it is unique across each particular type of list.
   * For example, two customers could not have the same ListID, and a customer could not have the same ListID as an employee
   * (because Customer and Employee are both name lists). But a customer could have the same ListID as a non-inventory item.
   */
  ListID: string;

  /**
   * FullName (along with ListID) is a way to identify a list object.
   * The FullName is the name prefixed by the names of each ancestor,
   * for example Jones:Kitchen:Cabinets.
   * FullName values are not case-sensitive.
   */
  FullName: string;
}
