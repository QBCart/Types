import CosmosBase from '../types/extends/cosmos-base';

/**
 * Describes a customer's custom pricing for an item in EShop.
 * The @property {id} specifies the inventory item for which this custom price denotes,
 * while  @property {Discriminator} specifies the value `CUSTOM-PRICE-${customerId}`.
 */
export default interface CustomPrice extends CosmosBase {
  /**
   * The customer's custom pricing.
   */
  price: number;
}
