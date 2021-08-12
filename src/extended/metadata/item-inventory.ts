/**
 * Describes metadata that QBCart tracks in regards to "Item Inventory" list objects from QuickBooks.
 */
export default interface Metadata {
  /**
   * METADATA: Whether the item is a parent to others in QuickBooks.
   */
  IsCategory: boolean;

  /**
   * METADATA: Whether the item should be visible in EShop.
   */
  IsPublic: boolean;

  /**
   * METADATA: The FullName represented as relative url.
   */
  Href: string;

  /**
   * METADATA: Price charged to current customer.
   */
  CustomerPrice: number;

  /**
   * METADATA: Whether the item is tracked by location in QuickBooks.
   * Typically true for inventory that is countable.
   */
  HasSiteLocation: boolean;

  /**
   * METADATA: Whether the item represents a set of items.
   */
  IsItemSet: boolean;

  /**
   * METADATA: Whether the item is part of a set of items.
   */
  InItemSet: boolean;

  /**
   * METADATA: Whether the item typically is sold as a case.
   */
  IsItemCase: boolean;

  /**
   * METADATA: The number of items in a case when sold as a case.
   */
  ItemCaseCount: number;

  /**
   * METADATA: A fuller description of product for eshop purposes.
   */
  FullDesc: string;

  /**
   * METADATA: List of alternative product images for display.
   */
  Images: string[];

  /**
   * METADATA: List of product specs.
   */
  Specs: string[];

  /**
   * METADATA: The rank out of best sellers in ascending order.
   */
  BestSellerRank: number;

  /**
   * METADATA: A binary value (0 or 1) denoting whether item should be featured.
   * (NOTE: Boolean cannot be used for client-indexedDB purposes.)
   */
  IsFeatured: number;

  /**
   * METADATA: A binary value (0 or 1) denoting whether item is on sale.
   * (NOTE: Boolean cannot be used for client-indexedDB purposes.)
   */
  IsOnSale: number;

  /**
   * METADATA: The on-sale price of an item when IsOnSale is true.
   */
  OnSalePrice: number;
}
