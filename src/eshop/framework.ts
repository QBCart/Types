import CosmosBase from '../extends/cosmos-base';

/**
 * Describes the framework in EShop.
 */
interface EShopFramework extends CosmosBase {
  /**
   * Global settings for EShop.
   */
  globalSettings: GlobalSettings;

  /**
   * Page settings for EShop.
   */
  pageSettings: PageSettings;
}

/**
 * Describes the global settings in EShop.
 */
interface GlobalSettings {
  /**
   * Html meta tags used on every page.
   */
  meta: string[];

  /**
   * Html style tags used on every page.
   */
  styles: string[];

  /**
   * Html script tags used on every page.
   */
  scripts: string[];

  /**
   * Javascript imports used on every page.
   */
  imports: string[];

  /**
   * Base url to image storage.
   */
  imagesStorageUrl: string;

  /**
   * Base url to site (mainly needed for b2c page redirects).
   */
  siteUrl: string;

  /**
   * Name of site displayed in top app bar and other appropriate places.
   */
  siteName: string;

  /**
   * The interval between client-sync updates in milliseconds.
   */
  syncInterval?: number;
}

interface PageSettings {
  [key: string]: PageSetting;
}

/**
 * Describes the page settings in EShop.
 */
interface PageSetting {
  /**
   * Html meta tags for the specified page.
   */
  meta: string[];

  /**
   * Html style tags for the specified page.
   */
  styles: string[];

  /**
   * Html script tags for the specified page.
   */
  scripts: string[];

  /**
   * Javascript imports for the specified page.
   */
  imports: string[];

  /**
   * Title of page displayed in browser tab for the specified page.
   */
  title: string;

  /**
   * The actions that appear in the app drawer for the specified page.
   */
  AppDrawerActions: AppDrawerActions;

  /**
   * Whether the specified page is b2c related.
   */
  isB2C: boolean;
}

interface AppDrawerActions {
  /**
   * The actions that appear in the app drawer when user is logged in.
   */
  loggedIn: AppDrawerAction[];

  /**
   * The actions that appear in the app drawer when user is logged out.
   */
  loggedOut: AppDrawerAction[];
}

interface AppDrawerAction {
  text: string;
  icon: string;
  href: string;
  activated: boolean;
}

export type {
  EShopFramework,
  GlobalSettings,
  PageSettings,
  PageSetting,
  AppDrawerActions,
  AppDrawerAction
};
