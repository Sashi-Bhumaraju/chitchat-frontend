function GetTimeFromTimestamp(timestamp) {
    const firebaseTime = timestamp.toDate();
    const currentTime = new Date();
    
    // If it's today, display only the time
    if (isToday(firebaseTime, currentTime)) {
      return firebaseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // If it's yesterday, display "Yesterday" and the time
    if (isYesterday(firebaseTime, currentTime)) {
      return `Yesterday, ${firebaseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    
    // If it's in the past, display the date and time
    return firebaseTime.toLocaleString();
  }
  
  function isToday(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }
  
  function isYesterday(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays === 1;
  }
  
  export { GetTimeFromTimestamp };