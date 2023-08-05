import React from 'react';
import styles from '../../css/SendMessage.module.css'
import { VscSend } from 'react-icons/vsc'
import UseInputState from '../../hooks/UseInputState';
import { SendMessageToUser } from '../../store/thunks/chat-thunks/Chat';
import UseThunk from '../../hooks/UseThunk';

function SendMessage(props) {

  const [content,handleContentChange, resetContentChange] = UseInputState("");
  const [runSendMessageToUser, respondData, isLoading, error] = UseThunk(SendMessageToUser);
  const submitMessage =  (event) => { 
    event.preventDefault(); 
    const rawMessageObject = { content : content, friend_id : props.friend.user_id, friend_username : props.friend.username, friend_photo_url: props.friend.photo_url, contact_id : props.friend.id }
    runSendMessageToUser(rawMessageObject); 
    resetContentChange() 
    // props.scrollBottom()
    // console.log(rawMessageObject) 
    // console.log(props.friend)
  }

  return (
      <form className={styles.send_message} onSubmit={submitMessage}>
          <div className={styles.send_message_input_box}> 
              <input value={content} onChange={handleContentChange} placeholder='Type a message' autoFocus  ></input>
          </div>
          <div  className={styles.send_message_submit}  onClick={submitMessage} ><VscSend/></div>
      </form>
  )
}

export default SendMessage