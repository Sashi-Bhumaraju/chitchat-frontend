


function GetTimeFromTimestamp(firebaseTimestamp) {
    if(!firebaseTimestamp) return null;
    const date = new Date(firebaseTimestamp.seconds * 1000);
    const now = new Date();
  
    // Check if the timestamp date is today
    if (date.toDateString() === now.toDateString()) {
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes();
      const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
    } else if (isYesterday(date, now)) {
      // Check if the timestamp date is yesterday
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes();
      const amOrPm = date.getHours() >= 12 ? 'PM' : 'AM';
      return `Yesterday, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
    } else {
      // If it's not today or yesterday, display the full date in WhatsApp-like format
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    }
}

// Function to check if a date is yesterday compared to another date
function isYesterday(date, comparedDate) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const yesterday = new Date(comparedDate.getTime() - oneDay);
    return date.toDateString() === yesterday.toDateString();
  }
  

export default GetTimeFromTimestamp;