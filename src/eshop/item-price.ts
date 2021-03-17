import CosmosBase from '../types/extends/cosmos-base';

/**
 * Describes a customer's special pricing for an item in EShop.
 * The id specifies the inventory item's id while the Discriminator specifies the customer's id.
 */
export default interface CustomerItemPrice extends CosmosBase {
  /**
   * The customer's special pricing.
   */
  price: number;
}
