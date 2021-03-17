import CosmosBase from '../types/extends/cosmos-base';

/**
 * Describes an item in a customer's cart in EShop.
 */
export default interface CartItem extends CosmosBase {
  /**
   * The current number of an inventory item requested for purchase.
   * The id specifies the inventory item's id while the Discriminator specifies the customer's id.
   */
  quantity: number;
}
