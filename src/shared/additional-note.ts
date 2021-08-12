/**
 * Describes an additional note type from QuickBooks.
 */
export default interface AdditionalNote {
  /**
   * The id of the note.
   */
  NoteID: number;

  /**
   * Date of note.
   */
  Date: Date;

  /**
   * In a BillAddress or ShipAddress aggregate, the Note field value is written at the bottom of the address in the form in which it appears, such as the invoice form.
   */
  Note: string;
}
