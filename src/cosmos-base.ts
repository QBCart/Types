/**
 * Contains properties common to all objects that QBCart stores in Cosmos Db,
 * and exposes meta-properties that Cosmos DB adds to every stored document.
 */
export default interface CosmosBase {
  /**
   * A unique id that along with the partition key uniquely identifies an object within a partitioned container.
   * This, therefore, does not have to be unique across partitions or containers.
   */
  id: string;

  /**
   * The key used by Cosmos to partition data within a container.
   * Together with id, uniquely identifies an object within a partitioned container.
   */
  Discriminator: string;

  /**
   * Time the object was created/stored in Cosmos by QBCart.
   */
  Created: Date;

  /**
   * Entity that created/stored object in Cosmos via QBCart.
   */
  CreatedBy: string;

  /**
   * Unix timestamp that object was last modified in Cosmos.
   * This is tracked and set by Cosmos.
   */
  _ts: number;

  /**
   * Entity that updated object in Cosmos via QBCart.
   */
  ModifiedBy: string;

  /**
   * The entity tag associated with the item in Cosmos.
   * Used to enforce consistency.
   */
  _etag: string;
}
