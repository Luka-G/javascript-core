goog.provide("istsos.Date");

goog.require("istsos");


/**
 * @class istsos.Date
 */
istsos.Date = class {

  /**
   * constructor - Instantiates istsos.Date
   *
   * @param  {object} options Set of key-value pairs
   * @constructor
   */
  constructor(options) {
     this.year = options.year.toString()
     this.month = (options.month > 9) ? options.month.toString() : `0${options.month.toString()}`;
     this.day = (options.day > 9) ? options.day.toString() : `0${options.day.toString()}`;
     this.hours = (options.hours > 9) ? options.hours.toString() : `0${options.hours.toString()}`;
     this.minutes = (options.minutes > 9) ? options.minutes.toString() : `0${options.minutes.toString()}`;
     this.seconds = (options.seconds > 9) ? options.seconds.toString() : `0${options.seconds.toString()}`;
     this.gmt = (options.gmt > 9) ? options.gmt.toString() : `0${options.gmt.toString()}`;
     this.description = options.opt_description || "Class for converting date&time to proper istSOS format";
  }

  /**
   * getDateString - Get date in ISO 8601 format
   *
   * @return {string}  ISO 8601 date
   */
  getDateString () {
      return `${this.year}-${this.month}-${this.day}T${this.hours}:${this.minutes}:${this.seconds}+${this.gmt}:00`;
  }

  /**
   * getDescription - Get description
   *
   * @return {string}  Description   
   */
  getDescription () {
      return this.description;
  }
}
