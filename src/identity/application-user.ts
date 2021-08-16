import type CosmosBase from '../extended/cosmos-base';

/**
 * Describes an application user on the company-side of QBCart.
 */
export default interface ApplicationUser extends CosmosBase {
  /**
   * The user's display name.
   */
  Username: string;

  /**
   * The user's email address, typically same as their id.
   */
  Email: string;

  /**
   * Whether the user is active.
   */
  IsActive: boolean;

  /**
   * The user's role.
   */
  Role: string;

  /**
   * The user's permissions.
   */
  Permissions: string[];

  /**
   * ListID's of allowed sales reps by which to filter the user's allowed customers.
   */
  SalesReps: string[];

  /**
   * The id of the user's current selected customer, if any.
   */
  SelectedCustomer: string;
}
