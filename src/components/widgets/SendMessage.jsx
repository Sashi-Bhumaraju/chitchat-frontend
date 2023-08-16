import React from 'react';
import styles from '../../css/SendMessage.module.css'
import { VscSend } from 'react-icons/vsc'
import UseInputState from '../../hooks/UseInputState';
import { SendMessageToUser } from '../../store/thunks/chat-thunks/Chat';
import UseThunk from '../../hooks/UseThunk';
import { useSelector } from 'react-redux';

function SendMessage(props) {

  const [content,handleContentChange, resetContentChange] = UseInputState("");
  const [runSendMessageToUser, respondData, isLoading, error] = UseThunk(SendMessageToUser);
  const contact = useSelector((state) => {   if (state.contact.data != null && state.contact.data.length != 0){ return (state.contact.data.find((conatct)=> conatct.user_id_1 === props.friend.user_id ||  conatct.user_id_2 === props.friend.user_id))} })
  // console.log(contact,"sasi")
  const submitMessage =  (event) => { 
    event.preventDefault(); 

    const rawMessageObject = { content : content, friend_id : props.friend.user_id, friend_username : props.friend.username, friend_photo_url: props.friend.photo_url, contact_id : !contact? null : contact.id }
    runSendMessageToUser(rawMessageObject); 
    resetContentChange() 
    // props.scrollBottom()
    // console.log(rawMessageObject) 
    // console.log(props.friend)
  }

  return (
      <form className={styles.send_message} onSubmit={submitMessage}>
          <div className={styles.send_message_input_box}> 
              <input value={content} onChange={handleContentChange} placeholder='Type a message' ></input>
          </div>
          <div  className={styles.send_message_submit}  onClick={submitMessage} ><VscSend/></div>
      </form>
  )
}

export default SendMessage