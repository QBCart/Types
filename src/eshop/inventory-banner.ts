import CosmosBase from '../extends/cosmos-base';

/**
 * Describes inventory banners in EShop.
 */
export default interface InventoryBanner extends CosmosBase {
  /**
   * QuickBooks listId of category to which banner belongs.
   * (NOTE: For home page, this value will be an empty string.)
   */
  listId: string;

  /**
   * Path to banner for desktop views.
   */
  desktopPath: string;

  /**
   * Path to banner for mobile views.
   */
  mobilePath: string;

  /**
   * A binary value (0 or 1) denoting whether banner should be shown.
   * (NOTE: Boolean cannot be used for client-indexedDB purposes.)
   */
  enabled: number;

  /**
   * Order that banner will be sorted among all banners to be shown.
   */
  sortOrder: number;
}
