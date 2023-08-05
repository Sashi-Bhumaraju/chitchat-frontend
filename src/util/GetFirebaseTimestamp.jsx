

function GetFirebaseTimestamp() {
  // Create a new Date object representing the current timestamp
const currentTimestamp = new Date();

// Get the date and time components
const year = currentTimestamp.getUTCFullYear();
const month = currentTimestamp.getUTCMonth() + 1; // Months are zero-based, so add 1
const day = currentTimestamp.getUTCDate();
const hours = currentTimestamp.getUTCHours();
const minutes = currentTimestamp.getUTCMinutes();
const seconds = currentTimestamp.getUTCSeconds();

// Function to add leading zeros for single-digit components
const addLeadingZero = (number) => (number < 10 ? '0' + number : number);

// Format the UTC offset in hours and minutes
const offsetMinutes = currentTimestamp.getTimezoneOffset();
const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
const offsetMinutesRemainder = Math.abs(offsetMinutes) % 60;
const utcOffset = `${offsetMinutes >= 0 ? '-' : '+'}${addLeadingZero(offsetHours)}:${addLeadingZero(offsetMinutesRemainder)}`;

// Create the formatted timestamp string
const formattedTimestamp = `${day} ${getMonthName(month)} ${year} at ${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} UTC${utcOffset}`;

console.log(formattedTimestamp); // Output: "3 August 2023 at 12:34:56 UTC+05:30"
return formattedTimestamp;

}

export { GetFirebaseTimestamp}