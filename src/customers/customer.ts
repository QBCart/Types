import type CosmosBase from '../extends/cosmos-base';
import type Metadata from './metadata/customer';
import type Ref from '../shared/ref';
import type Address from '../shared/address';
import type AddressBlock from '../shared/address-block';
import type AdditionalNote from '../shared/additional-note';
import type CreditCardInfo from '../shared/credit-card-info';
import type AdditionalContact from '../shared/additional-contact';
import type Contact from '../shared/contact';
import type ShipToAddress from '../shared/ship-to-address';

/**
 * Describes a customer object.
 */
export default interface Customer extends CosmosBase, Metadata {
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
   * The case-insensitive name of a list object, not including the names of its ancestors.
   * Name must be unique, unless it is the Name of a “hierarchical” list object.
   *
   * List objects in different hierarchies can have duplicate names because their FullNames will still be unique.
   * For example, two objects could both have the Name kitchen,
   * but they could have unique FullNames, such as Job12:kitchen and Baker:kitchen.
   *
   * For built-in currencies, Name is the internationally accepted currency name and is not editable.
   */
  Name: string;

  /**
   * FullName (along with ListID) is a way to identify a list object.
   *
   * The FullName is the name prefixed by the names of each ancestor,
   * for example Jones:Kitchen:Cabinets.
   *
   * FullName values are not case-sensitive.
   */
  FullName: string;

  /**
   * If IsActive is true, this object is currently enabled for use by QuickBooks.
   * The default value is true.
   */
  IsActive: boolean;

  /**
   * Classes can be used to separate transactions into meaningful categories.
   *
   * (For example, transactions could be classified according to department, business location, or type of work.)
   *
   * In QuickBooks, class tracking is off by default.
   * A ClassRef aggregate refers to one of these named classes.
   *
   * For example, in a TimeTracking message, ClassRef refers to the QuickBooks class into which the timed activity falls.
   *
   * If a ClassRef aggregate includes both FullName and ListID, FullName will be ignored.
   *
   * In an InvoiceAdd request, if you specify a ClassRef for the whole invoice,
   * that same ClassRef is automatically used in the line items.
   *
   * If you want to clear that (that is, have NO ClassRef for the line item),
   * you can clear it in the line item by simply not specifying it in the line item.
   */
  ClassRef: Ref;

  /**
   * A reference to the list object that is one level above this one.
   *
   * For example, an inventory item with the FullName of GermanCars:Mercedes-Benz:CL500I99AA
   * might have a parent object with the FullName of GermanCars:Mercedes-Benz.
   *
   * In a request, if a ParentRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  ParentRef: Ref;

  /**
   * The number of ancestors.
   * For example, The customer job with Name = carpets and FullName = Jones:Building2:carpets would have a sublevel of 2.
   */
  Sublevel: number;

  /**
   * The name of the QuickBooks user's business, as specified in QuickBooks.
   *
   * CompanyName and Address are used on invoices, checks, and other forms.
   *
   * (LegalCompanyName and LegalAddress, on the other hand, are used on a company's tax forms and pay stubs.)
   */
  CompanyName: string;

  /**
   * A formal reference, such as Mr. or Dr., that precedes a name.
   */
  Salutation: string;

  /**
   * The first name of a customer.
   */
  FirstName: string;

  /**
   * The middle name of a customer.
   */
  MiddleName: string;

  /**
   * The last name of a customer.
   */
  LastName: string;

  /**
   * The job title of a customer.
   */
  JobTitle: string;

  /**
   * Whatever address you specify in this aggregate must not result in an address greater than 5 lines,
   * otherwise you'll get a runtime error, because QuickBooks doesn't support addresses more than 5 lines.
   *
   * There are two ways to specify an address within this aggregate:
   * 1. Using Addr1 through Addr3 along with the other possible aggregate elements, such as City, State, Postalcode.
   * 2. Using Addr1, Addr2, Addr3, Addr4, and Addr5 to fully specify the address.
   *
   * If you use this so called "address block" approach, you cannot use any other address elements, such as City, State, etc.
   * (Note: this approach is not valid for EmployeeAdd/Mod/Query)
   *
   * Moreover, the lines Addr1...Addr5 are each printed as a separate line on the transaction,
   * and the values are returned in the Ret object under the aggregate ShipAddressBlock or BillAddressBlock.
   */
  BillAddress: Address;

  /**
   * The address expressed as an address block of Addr1 through Addr5,
   * depending on the number of lines in the original request that created the address.
   */
  BillAddressBlock: AddressBlock;

  /**
   * Whatever address you specify in this aggregate must not result in an address greater than 5 lines,
   * otherwise you'll get a runtime error, because QuickBooks doesn't support addresses more than 5 lines.
   *
   * There are two ways to specify an address within this aggregate:
   * 1. Using Addr1 through Addr3 along with the other possible aggregate elements, such as City, State, Postalcode.
   * 2. Using Addr1, Addr2, Addr3, Addr4, and Addr5 to fully specify the address.
   *
   * If you use this so called "address block" approach, you cannot use any other address elements, such as City, State, etc.
   * (Note: this approach is not valid for EmployeeAdd/Mod/Query)
   *
   * Moreover, the lines Addr1...Addr5 are each printed as a separate line on the transaction,
   * and the values are returned in the Ret object under the aggregate ShipAddressBlock or BillAddressBlock.
   */
  ShipAddress: Address;

  /**
   * The address expressed as an address block of Addr1 through Addr5,
   * depending on the number of lines in the original request that created the address.
   */
  ShipAddressBlock: AddressBlock;

  /**
   * The ship-to addresses of a customer.
   */
  ShipToAddress: ShipToAddress[];

  /**
   * The telephone number.
   */
  Phone: string;

  /**
   * A telephone number given as an alternative to Phone.
   */
  AltPhone: string;

  /**
   * Fax number.
   */
  Fax: string;

  /**
   * E-mail address.
   */
  Email: string;

  /**
   * The cc address to use for a customer.
   */
  Cc: string;

  /**
   * The name of a contact person for a customer.
   */
  Contact: string;

  /**
   * The name of an alternate contact person for a customer.
   */
  AltContact: string;

  /**
   * No details given by QuickBooks.
   */
  AdditionalContactRef: AdditionalContact[];

  /**
   * No details given by QuickBooks.
   */
  ContactsRet: Contact[];

  /**
   * Customer types allow business owners to categorize customers in ways that are meaningful for their businesses.
   *
   * For example, a customer type might indicate which industry a customer represents, or which part of the country a customer is in.
   *
   * A CustomerTypeRef aggregate refers to one of the types on the CustomerType list.
   * In a request, if a CustomerTypeRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  CustomerTypeRef: Ref;

  /**
   * Refers to the payment terms associated with this entity.
   *
   * (This will be an item on the DateDrivenTerms or StandardTerms list.)
   *
   * If a TermsRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  TermsRef: Ref;

  /**
   * A sales representative must be on the Employee, Vendor, or Other Names list within QuickBooks.
   * Sales representative's names and initials appear on the Rep drop-down list on QuickBooks sales forms.
   * A SalesRepRef refers to a person on the SalesRep list.
   *
   * In a request, if a SalesRepRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  SalesRepRef: Ref;

  /**
   * A positive number indicates money owed by the customer. Compare with TotalBalance.
   */
  Balance: number;

  /**
   * Total balance for this customer, including all this customer's jobs (subcustomers).
   * A positive number indicates money that the customer owes.
   *
   * If a customer does not have any subcustomers, TotalBalance and Balance are the same.
   */
  TotalBalance: number;

  /**
   * Each item on a sales form is assigned a sales-tax code that indicates whether the item is taxable or non-taxable, and why.
   *
   * Two general codes, which can be modified but not deleted, appear on the sales-tax code list by default:
   * * Non-taxable (Name = NON; Desc = Non-Taxable; IsTaxable = false)
   * * Taxable (Name = TAX; Desc = Taxable; IsTaxable = true)
   *
   * A sales-tax code can be deleted only if it is no longer associated with any customer, item, or transaction.
   * If the "Do You Charge Sales Tax?" preference within QuickBooks is set to No, QuickBooks will assign the default non-taxable sales-tax code to all sales.
   *
   * A SalesTaxCodeRef aggregate refers to a sales-tax code on the list. In a request,
   * if a SalesTaxCodeRef aggregate includes both FullName and ListID, FullName will be ignored.
   *
   * In a Customer message, SalesTaxCodeRef refers to the sales-tax code that will be used for items related to this customer.
   *
   * In an ItemInventory message, SalesTaxCodeRef refers to the type of sales tax that will be charged for this item, if it is a taxable item and if sales tax is set up within QuickBooks.
   */
  SalesTaxCodeRef: Ref;

  /**
   * A sales-tax item is used to calculate a single sales tax that is collected at a specified rate and paid to a single agency.
   * (Compare with the ItemSalesTaxGroupAdd message.)
   *
   * An ItemSalesTaxRef aggregate refers to an item on this list. In a request, if an ItemSalesTaxRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  ItemSalesTaxRef: Ref;

  /**
   * The customer's resale number, if they have one. This number will not affect reports or sales tax calculations.
   */
  ResaleNumber: string;

  /**
   * Account numbers appear in the QuickBooks chart of accounts, Account fields, and reports and graphs.
   *
   * If the IsUsingAccountNumber preference is false (that is, if the QuickBooks user has the account numbers Preference turned off),
   * you can still set account numbers through the SDK, but the numbers will not be visible in the user interface.
   */
  AccountNumber: string;

  /**
   * Set and returned as a positive number that indicates a customer's credit limit.
   * If no value has been defined, there is no credit limit.
   */
  CreditLimit: number;

  /**
   * Refers to a PaymentMethod object.
   *
   * In a request, if a PreferredPaymentMethodRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  PreferredPaymentMethodRef: Ref;

  /**
   * Customer's credit-card information.
   */
  CreditCardInfo: CreditCardInfo;

  /**
   * Status information about a sub-customer; used in reports.
   */
  JobStatus:
    | 'None'
    | 'Awarded'
    | 'Closed'
    | 'InProgress'
    | 'NotAwarded'
    | 'Pending';

  /**
   * The date on which work for a sub-customer was started; used in reports.
   */
  JobStartDate: Date;

  /**
   * The date on which work for a sub-customer is expected to be complete; used in reports.
   */
  JobProjectedEndDate: Date;

  /**
   * The date on which work for a sub-customer was completed; used in reports.
   */
  JobEndDate: Date;

  /**
   * A short job description for a sub-customer; used in reports.
   */
  JobDesc: string;

  /**
   * Job type can be used to separate jobs into any categories that are meaningful to the business.
   *
   * A JobTypeRef aggregate refers to a job type on the JobType list.
   * In a request, if a JobTypeRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  JobTypeRef: Ref;

  /**
   * No details given by QuickBooks.
   */
  Notes: string;

  /**
   * No details given by QuickBooks.
   */
  AdditionalNotesRet: AdditionalNote[];

  /**
   * No details given by QuickBooks.
   */
  PreferredDeliveryMethod: 'None' | 'Email' | 'Fax';

  /**
   * You can use price levels to specify custom pricing for specific customers.
   *
   * Once you create a price level for a customer, QuickBooks will automatically use the custom price in new invoices, sales receipts, sales orders or credit memos for that customer.
   *
   * You can override this automatic feature, however, when you create the invoices, sales receipts, etc.)
   *
   * The user can now specify a price level on line items in the following supported sales transactions: invoices, sales receipts, credit memos, and sales orders.
   *
   * Notice that the response data for the affected sales transaction does not list the price level that was used. The response simply lists the Rate for the item, which was set using the price level.
   */
  PriceLevelRef: Ref;

  /**
   * Allows for the attachment of a user defined GUID value.
   */
  ExternalGUID: string;

  /**
   * The currency object contains all of the information needed by QuickBooks to display and use.
   *
   * For built-in currencies, the name and currency code values are internationally accepted values and thus are not editable.
   * The comma format is editable, as is the IsActive status.
   *
   * For user-defined currencies, every value in the object is editable including name and currency code.
   *
   * When used with PriceLevels, the CurrencyRef should only be used with "per item" price levels.
   */
  CurrencyRef: Ref;
}
