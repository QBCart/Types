/**
 * Metadata that QBCart tracks in regards to Item-list objects in QuickBooks.
 */
export default interface ItemListObjectMetadata {
  /**
   * Whether the item is a parent to others in QuickBooks.
   */
  IsCategory: boolean;

  /**
   * Whether the item should be visible in EShop.
   */
  IsPublic: boolean;

  /**
   * The FullName represented as relative url.
   */
  Href: string;

  /**
   * Price charged to current customer.
   */
  CustomerPrice: number;

  /**
   * Whether the item is tracked by location in QuickBooks.
   * Typically true for inventory that is countable.
   */
  HasSiteLocation: boolean;

  /**
   * Whether the item represents a set of items.
   */
  IsItemSet: boolean;

  /**
   * Whether the item is part of a set of items.
   */
  InItemSet: boolean;

  /**
   * Whether the item typically is sold as a case.
   */
  IsItemCase: boolean;

  /**
   * The number of items in a case when sold as a case.
   */
  ItemCaseCount: number;
}
