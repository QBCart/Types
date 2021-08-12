import type AdditionalContact from './additional-contact';

/**
 * Describes a contact type from QuickBooks.
 */
export default interface Contact {
  /**
   * Along with FullName, ListID is a way to identify a list object.
   *
   * When a list object is added to QuickBooks through the SDK or through the QuickBooks user interface,
   * the QuickBooks server assigns it a ListID. A ListID is not unique across lists,
   * but it is unique across each particular type of list.
   *
   * For example, two customers could not have the same ListID, and a customer could not have the same ListID as an employee
   * (because Customer and Employee are both name lists). But a customer could have the same ListID as a non-inventory item.
   */
  ListID: string;

  /**
   * Time the object was created by QuickBooks.
   */
  TimeCreated: Date;

  /**
   * Time the object was last modified by QuickBooks.
   */
  TimeModified: Date;

  /**
   * A number that the QuickBooks server generates and assigns to this object.
   * Every time the object is changed, the server will change its EditSequence value.
   *
   * When you try to modify a list object, you must provide its EditSequence.
   * The server compares the EditSequence you provide with the EditSequence in memory
   * to make sure you are dealing with the latest copy of the object.
   * If you are not, the server will reject the request and return an error.
   *
   * Because EditSequence is only used to check whether two objects match,
   * there is no reason to interpret its value.
   */
  EditSequence: string;

  /**
   * The name of a contact person for a customer or vendor.
   */
  Contact: string;

  /**
   * A formal reference, such as Mr. or Dr., that precedes a name.
   */
  Salutation: string;

  /**
   * The first name of a customer, vendor, employee, or person on the "other names" list.
   */
  FirstName: string;

  /**
   * The middle name of a customer, vendor, employee, or person on the "other names" list.
   */
  MiddleName: string;

  /**
   * The last name of a customer, vendor, employee, or person on the "other names" list.
   */
  LastName: string;

  /**
   * The job title of a customer, vendor, employee, or person on the "other names" list.
   */
  JobTitle: string;

  /**
   * No details given by QuickBooks.
   */
  AdditionalContacts: AdditionalContact[];
}
