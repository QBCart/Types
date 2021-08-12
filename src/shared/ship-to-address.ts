import type Address from './address';

/**
 * Describes a ship-to address type from QuickBooks.
 */
export default interface ShipToAddress extends Address {
  /**
   * The case-insensitive name of a list object, not including the names of its ancestors.
   * Name must be unique, unless it is the Name of a "hierarchical" list object.
   *
   * List objects in different hierarchies can have duplicate names because their FullNames will still be unique.
   * For example, two objects could both have the Name kitchen, but they could have unique FullNames, such as Job12:kitchen and Baker:kitchen.
   *
   * For built-in currencies, Name is the internationally accepted currency name and is not editable.
   */
  Name: string;

  /**
   * Whether this is the default ship-to address.
   */
  DefaultShipTo: boolean;
}
