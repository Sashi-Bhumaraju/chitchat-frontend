function DateTimeFormatter (obj) {

        const seconds = obj.seconds;
        const milliseconds = seconds * 1000;
        const date = new Date(milliseconds);
        const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
        };

        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(date);
        
    return formattedDate;
    
}

export default DateTimeFormatter;