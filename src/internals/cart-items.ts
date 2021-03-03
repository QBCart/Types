import type CartItem from "./cart-item";

/**
 * Describes a list of items in a customer's cart in EShop.
 */
export default interface CartItems {
    [key: string]: CartItem;
  }