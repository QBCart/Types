import CosmosBase from '../extends/cosmos-base';

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

  /**
   * The sales price for an inventory item, which reflects either current retail
   * or any custom pricing the customer has.
   */
  price: number;

  /**
   * A timestamp representing when the item was added to the cart and used to sort it in the cart.
   */
  sortOrder: number;
}
