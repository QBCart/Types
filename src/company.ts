import type CosmosBase from './cosmos-base';

/**
 * A company as described by QuickBooks and QBCart.
 */
export default interface Company extends CosmosBase {
  /**
   * ESHOP: The name of the site.
   */
  SiteName: string;
}
