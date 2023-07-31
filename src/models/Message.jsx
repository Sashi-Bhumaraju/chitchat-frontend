class Message {
    constructor( content, is_read, recipient_id, sender_id, timestamp) {
       this.content = content;
       this.is_read = is_read;
       this.recipient_id = recipient_id;
       this.sender_id = sender_id;
       this.timestamp = timestamp
    }
}

export default Message;