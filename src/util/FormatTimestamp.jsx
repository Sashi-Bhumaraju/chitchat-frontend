
function FormatTimestamp(timestampString) {
    // Parse the timestamp string to extract date components
    const [, month, day, year, time, ampm, timezone] = timestampString.match(/([a-zA-Z]+) (\d+), (\d+) at (\d+:\d+:\d+) (AM|PM) (.+)/);
  
    // Create a new date string in the format "month day, year time AM/PM"
    const formattedDateString = `${month} ${day}, ${year} ${time} ${ampm}`;
  
    // Create a new Date object from the formatted date string
    const timestamp = new Date(formattedDateString);
  
    // Function to add leading zeros for single-digit components
    const addLeadingZero = (number) => (number < 10 ? '0' + number : number);
  
    // Format time in 12-hour format (e.g., "2:27:43 PM")
    const formatTime = (date) => {
      const hours = date.getHours() % 12 || 12;
      const minutes = addLeadingZero(date.getMinutes());
      const seconds = addLeadingZero(date.getSeconds());
      const ampm = date.getHours() < 12 ? 'AM' : 'PM';
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    };
  
    const currentDate = new Date();
    const oneDayInMilliseconds = 86400000;
  
    if (timestamp.toDateString() === currentDate.toDateString()) {
      // Today: Display only time in 12-hour format
      return formatTime(timestamp);
    } else if (timestamp.getTime() >= currentDate.getTime() - oneDayInMilliseconds) {
      // Yesterday: Display "Yesterday" and time
      return `Yesterday ${formatTime(timestamp)}`;
    } else {
      // Past: Display date/month/year format
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      return formatter.format(timestamp);
    }
  }
  
  // Test the function with the provided timestamp string
//   const timestampString = 'July 31, 2023 at 2:27:43 PM GMT+5:30';
//   console.log(formatTimestamp(timestampString));
  
  
  export default FormatTimestamp;