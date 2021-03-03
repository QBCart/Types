/**
 * Describes an item in a customer's cart in EShop.
 */
export default interface CartItem {
  /**
   * The unique id used by Cosmos to distinguish an object from others in the same container.
   */
  id: string;

  /**
   * The unique id used by QuickBooks to distinguish a list object from other list objects.
   */
  listId: string;

  /**
   * The name, aka item code, of an inventory item.
   */
  name: string;

  /**
   * The sales description of an inventory item.
   */
  salesDesc: string;

  /**
   * The sales price for an inventory item, which reflects either current retail
   * or any special pricing the customer has.
   */
  salesPrice: number;

  /**
   * The relative href to an inventory item's product page.
   */
  href: string;

  /**
   * The current number of an inventory item requested for purchase.
   */
  quantity: number;
}
