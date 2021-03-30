/**
 * Describes object expected by the Alert API's via LocalDB.
 */
export default interface AlertMessage {
  /**
   * The auto-incremented id tracked by LocalDB.
   */
  id: number;

  /**
   * The text displayed in the header of the alert.
   */
  headerText: string;

  /**
   * A valid css color to override the default header text color of the alert.
   */
  headerTextColor?: string;

  /**
   * A valid css color to override the default header background color of the alert.
   */
  headerBackgroundColor?: string;

  /**
   * The text or html content displayed in the body of the alert.
   */
  htmlBody: string;

  /**
   * A valid css color to override the default body text color of the alert.
   */
  bodyTextColor?: string;

  /**
   * A valid css color to override the default body background color of the alert.
   */
  bodyBackgroundColor?: string;

  /**
   * The name of a material icon to override the default company logo used in the alert.
   */
  iconName?: string;

  /**
   * A valid css color to use on the icon.
   */
  iconColor?: string;

  /**
   * The duration of the animation, if supported.
   */
  duration?: number;
}
