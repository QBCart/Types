import type CosmosBase from '../extended/cosmos-base';

/**
 * Describes info about a QBCart company.
 */
export default interface Company extends CosmosBase {
  /**
   * ESHOP: The name of the site.
   */
  SiteName: string;
}
