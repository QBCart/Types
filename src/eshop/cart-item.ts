import CosmosBase from '../types/extends/cosmos-base';

/**
 * Describes an item in a customer's cart in EShop.
 * The @property {id} specifies the inventory item for which this cart item denotes,
 * while @property {Discriminator} specifies the value `CART-ITEM-${customerId}`.
 */
export default interface CartItem extends CosmosBase {
  /**
   * The current number of an inventory item requested for purchase.
   */
  quantity: number;
}
