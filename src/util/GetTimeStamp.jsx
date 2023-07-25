import { Timestamp } from "firebase/firestore";

function  GetTimeStamp  () {

    const timestamp = new Date();
    const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    };
    const formattedTimestamp = timestamp.toLocaleString('en-US', options);
    return formattedTimestamp;

}

export { GetTimeStamp };