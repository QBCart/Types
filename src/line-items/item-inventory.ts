import type CosmosBase from '../extends/cosmos-base';
import type Metadata from '../extends/metadata/item-inventory';
import type Ref from '../shared/ref';

/**
 * Describes an inventory item from QuickBooks.
 */
export default interface ItemInventory extends CosmosBase, Metadata {
  /**
   * Along with FullName, ListID is a way to identify a list object.
   * When a list object is added to QuickBooks through the SDK or through the QuickBooks user interface,
   * the QuickBooks server assigns it a ListID. A ListID is not unique across lists,
   * but it is unique across each particular type of list.
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
   * When you try to modify a list object, you must provide its EditSequence.
   * The server compares the EditSequence you provide with the EditSequence in memory
   * to make sure you are dealing with the latest copy of the object.
   * If you are not, the server will reject the request and return an error.
   * Because EditSequence is only used to check whether two objects match,
   * there is no reason to interpret its value.
   */
  EditSequence: string;

  /**
   * The case-insensitive name of a list object, not including the names of its ancestors.
   * Name must be unique, unless it is the Name of a “hierarchical” list object.
   * List objects in different hierarchies can have duplicate names because their FullNames will still be unique.
   * For example, two objects could both have the Name kitchen,
   * but they could have unique FullNames, such as Job12:kitchen and Baker:kitchen.
   * For built-in currencies, Name is the internationally accepted currency name and is not editable.
   */
  Name: string;

  /**
   * FullName (along with ListID) is a way to identify a list object.
   * The FullName is the name prefixed by the names of each ancestor,
   * for example Jones:Kitchen:Cabinets.
   * FullName values are not case-sensitive.
   */
  FullName: string;

  /**
   * Value of the barcode in the item.
   */
  BarCodeValue: string;

  /**
   * If IsActive is true, this object is currently enabled for use by QuickBooks.
   * The default value is true.
   */
  IsActive: boolean;

  /**
   * Classes can be used to separate transactions into meaningful categories.
   * (For example, transactions could be classified according to department, business location, or type of work.)
   * In QuickBooks, class tracking is off by default.
   * A ClassRef aggregate refers to one of these named classes.
   * For example, in a TimeTracking message, ClassRef refers to the QuickBooks class into which the timed activity falls.
   * If a ClassRef aggregate includes both FullName and ListID, FullName will be ignored.
   * In an InvoiceAdd request, if you specify a ClassRef for the whole invoice,
   * that same ClassRef is automatically used in the line items.
   * If you want to clear that (that is, have NO ClassRef for the line item),
   * you can clear it in the line item by simply not specifying it in the line item.
   */
  ClassRef: Ref;

  /**
   * A reference to the list object that is one level above this one.
   * For example, an inventory item with the FullName of GermanCars:Mercedes-Benz:CL500I99AA
   * might have a parent object with the FullName of GermanCars:Mercedes-Benz.
   * In a request, if a ParentRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  ParentRef: Ref;

  /**
   * The number of ancestors.
   * For example, The customer job with Name = carpets and FullName = Jones:Building2:carpets would have a sublevel of 2.
   */
  Sublevel: number;

  /**
   * The part number used by the manufacturer of the item.
   */
  ManufacturerPartNumber: string;

  /**
   * The unit of measure set consists of a base unit and 0-n related units.
   */
  UnitOfMeasureSetRef: Ref;

  /**
   * Each item on a sales form is assigned a sales-tax code that indicates whether the item is taxable or non-taxable, and why.
   * Two general codes, which can be modified but not deleted, appear on the sales-tax code list by default:
   * Non-taxable (Name = NON; Desc = Non-Taxable; IsTaxable = false) and
   * Taxable (Name = TAX; Desc = Taxable; IsTaxable = true).
   * A sales-tax code can be deleted only if it is no longer associated with any customer, item, or transaction.
   * If the “Do You Charge Sales Tax?” preference within QuickBooks is set to No,
   * QuickBooks will assign the default non-taxable sales-tax code to all sales.
   * A SalesTaxCodeRef aggregate refers to a sales-tax code on the list.
   * In a request, if a SalesTaxCodeRef aggregate includes both FullName and ListID, FullName will be ignored.
   * In a Customer message, SalesTaxCodeRef refers to the sales-tax code that will be used for items related to this customer.
   * In an ItemInventory message, SalesTaxCodeRef refers to the type of sales tax that will be charged for this item,
   * if it is a taxable item and if sales tax is set up within QuickBooks.
   */
  SalesTaxCodeRef: Ref;

  /**
   * Appears in the Description column of a sales form when the QuickBooks user sells this item.
   * For a fixed asset, describes the sale of the asset (for accounting purposes).
   */
  SalesDesc: string;

  /**
   * Price charged for this item.
   */
  SalesPrice: number;

  /**
   * Refers to an income account.
   * If an IncomeAccountRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  IncomeAccountRef: Ref;

  /**
   * Appears in the Description column of checks, bills, credit card charges, and item receipts when this item is reordered.
   */
  PurchaseDesc: string;

  /**
   * Amount that the QuickBooks user expects to pay when ordering or buying this item, or the amount that was actually paid for this item.
   */
  PurchaseCost: number;

  /**
   * Refers to the account that QuickBooks uses to track the original cost of goods that are eventually sold.
   * (The AccountType of this account will be CostOfGoodsSold.)
   * In a request, if a COGSAccountRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  COGSAccountRef: Ref;

  /**
   * The preferred vendor for this item.
   * If a PrefVendorRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  PrefVendorRef: Ref;

  /**
   * Refers to the account QuickBooks uses to track the current value of the company’s inventory.
   * (The AccountType of this account will be FixedAsset, OtherAsset, or OtherCurrentAsset.)
   * In a request, if an AssetAccountRef aggregate includes both FullName and ListID, FullName will be ignored.
   */
  AssetAccountRef: Ref;

  /**
   * Quantity at which QuickBooks will remind the user to reorder this inventory item.
   */
  ReorderPoint: number;

  /**
   * Maximum number of items in inventory.
   */
  Max: number;

  /**
   * The number of these items in inventory. QuantityOnHand times AverageCost is TotalValue in an inventory item list.
   * To change the QuantityOnHand for an item, you would have to use InventoryAdjustmentAdd not an ItemInventoryMod.
   */
  QuantityOnHand: number;

  /**
   * AverageCost is the total value of this item divided by QuantityOnHand.
   * Initially the total value is the same as the QuantityOnHand times the PurchaseCost (so AverageCost equals PurchaseCost).
   * However, the total value can be changed by an inventory adjustment so that it no longer matches QuantityOnHand times PurchaseCost.
   */
  AverageCost: number;

  /**
   * The number of these items that have been ordered from vendors (as recorded in purchase orders) but not received.
   */
  QuantityOnOrder: number;

  /**
   * The number of these items that have been sold (as recorded in sales orders) but not delivered to customers.
   */
  QuantityOnSalesOrder: number;

  /**
   * Allows for the attachment of a user defined GUID value.
   * This field is used by QBCart to match adds to and returns from QuickBooks.
   */
  ExternalGUID: string;
}
