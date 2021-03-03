import type CartItems from '../internals/cart-items';
import type CosmosBase from '../extends/cosmos-base';

/**
 * Describes a customer's cart in EShop.
 */
export default interface EShopCart extends CosmosBase {
  /**
   * List of items in a customer's cart.
   */
  items: CartItems;

  /**
   * Unix timestamp representing last time cart was updated.
   * This is controlled client-side only.
   */
  lastUpdated: number;
}
