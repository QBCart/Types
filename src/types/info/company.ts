import type CosmosBase from '../extends/cosmos-base';

/**
 * Describes info about a QBCart company.
 */
export default interface Company extends CosmosBase {
  /**
   * ESHOP: The name of the site.
   */
  SiteName: string;
}
