/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import type ItemInventory from '../line-items/item-inventory';

/**
 * Describes an item used in the ProductSlider component.
 */
export default interface ProductSliderItem extends ItemInventory {
  /**
   * Text to display in ribbon.
   */
  RibbonText?: string;

  /**
   * Color of text displayed in ribbon.
   */
  RibbonTextColor?: string;

  /**
   * Background color of ribbon.
   */
  RibbonBGColor?: string;
}
