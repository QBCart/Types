import CosmosBase from '../extends/cosmos-base';

/**
 * Describes inventory banners in EShop.
 */
export default interface InventoryBanner extends CosmosBase {
  /**
   * Path to which banner belongs
   */
  path: string;

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
