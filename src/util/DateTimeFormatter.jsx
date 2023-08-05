function DateTimeFormatter(obj) {
    const seconds = obj.seconds;
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);
    const currentDate = new Date();
  
    const isToday = date.toDateString() === currentDate.toDateString();
    const isYesterday = new Date(currentDate - 86400000).toDateString() === date.toDateString(); // 86400000 ms = 1 day
  
    if (isToday) {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      return formatter.format(date);
    } else if (isYesterday) {
      const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      return 'Yesterday ' + formatter.format(date).split(" ")[1];
    } else {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      return formatter.format(date);
    }
  }
  
  export default DateTimeFormatter;
  