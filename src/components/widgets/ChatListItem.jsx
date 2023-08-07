import React from 'react';
import styles from '../../css/ChatListItem.module.css'
import { Timestamp, serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';

function ChatListItem(props) { 

  const user = useSelector((state)=>state.user.data);

  return ( 
    <div className={styles.chat_list_item}> 
        <div className={ props.message.sender_id === user.user_id?  styles.chat_list_item_send : styles.chat_list_item_recieved}>
            {props.message.content}
            <div className={styles.chat_list_item_time}>{""}</div>
        </div>
    </div> 
  ) 
} 

export default ChatListItem