/**
 * A library to manage school holiday dates.
 * This library provides an array of NISD holiday dates to exclude non-school days from calculations.
 *
 * @module HolidayLibrary
 */

/**
 * An array of holiday dates for NISD (Northside Independent School District).
 * Each date is formatted as 'MM/DD/YYYY' and represents a school holiday or break.
 *
 * @constant {string[]} holidayDates - An array of strings, where each string is a holiday date formatted as 'MM/DD/YYYY'.
 */
const holidayDates = [
  "6/7/2024",
  "6/8/2024",
  "6/9/2024",
  "6/10/2024",
  "6/11/2024",
  "6/12/2024",
  "6/13/2024",
  "6/14/2024",
  "6/15/2024",
  "6/16/2024",
  "6/17/2024",
  "6/18/2024",
  "6/19/2024",
  "6/20/2024",
  "6/21/2024",
  "6/22/2024",
  "6/23/2024",
  "6/24/2024",
  "6/25/2024",
  "6/26/2024",
  "6/27/2024",
  "6/28/2024",
  "6/29/2024",
  "6/30/2024",
  "7/1/2024",
  "7/2/2024",
  "7/3/2024",
  "7/4/2024",
  "7/5/2024",
  "7/6/2024",
  "7/7/2024",
  "7/8/2024",
  "7/9/2024",
  "7/10/2024",
  "7/11/2024",
  "7/12/2024",
  "7/13/2024",
  "7/14/2024",
  "7/15/2024",
  "7/16/2024",
  "7/17/2024",
  "7/18/2024",
  "7/19/2024",
  "7/20/2024",
  "7/21/2024",
  "7/22/2024",
  "7/23/2024",
  "7/24/2024",
  "7/25/2024",
  "7/26/2024",
  "7/27/2024",
  "7/28/2024",
  "7/29/2024",
  "7/30/2024",
  "7/31/2024",
  "8/1/2024",
  "8/2/2024",
  "8/3/2024",
  "8/4/2024",
  "8/5/2024",
  "8/6/2024",
  "8/7/2024",
  "8/8/2024",
  "8/9/2024",
  "8/10/2024",
  "8/11/2024",
  "8/12/2024",
  "8/13/2024",
  "8/14/2024",
  "8/15/2024",
  "8/16/2024",
  "8/17/2024",
  "8/18/2024",
  "9/2/2024",
  "10/14/2024",
  "11/5/2024",
  "11/25/2024",
  "11/26/2024",
  "11/27/2024",
  "11/28/2024",
  "11/29/2024",
  "12/23/2024",
  "12/24/2024",
  "12/25/2024",
  "12/26/2024",
  "12/27/2024",
  "12/30/2024",
  "12/31/2024",
  "1/1/2025",
  "1/2/2025",
  "1/3/2025",
  "1/6/2025",
  "1/20/2025",
  "1/21/2025",
  "2/17/2025",
  "3/10/2025",
  "3/11/2025",
  "3/12/2025",
  "3/13/2025",
  "3/14/2025",
  "4/18/2025",
  "4/21/2025",
  "5/2/2025",
  "5/26/2025",
  "5/30/2025",
];

/**
 * A function to get the holiday dates.
 * @return {string[]} An array of holiday dates.
 */
function getHolidayDates() {
  return holidayDates;
}

// Expose the function to the global scope for use in other scripts
function NISDHolidayLibrary() {
  return { getHolidayDates: getHolidayDates }
};
