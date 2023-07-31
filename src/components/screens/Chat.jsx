import React from 'react';
import styles from '../../css/Chat.module.css';
import data from './data';
import ChatListItem from '../widgets/ChatListItem';
import AppBar from '../widgets/AppBar';
import { getDocs } from 'firebase/firestore';
import { GetChatListOfUserQuery } from '../../store/thunks/chat-thunks/Chat';
import { useEffect,useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useParams, useLocation  } from 'react-router-dom';
import { nanoid } from 'nanoid';
import SendMessage from '../widgets/SendMessage';


function Chat() {

  
  const { chatId } = useParams();
  const friend = useLocation().state;
  const [messages] = useCollectionData(GetChatListOfUserQuery(chatId));
  const messageswidget = messages && messages.map((message)=><ChatListItem key={nanoid()} message = {message}/>)

  return (
    <section className={styles.chat}> 
        <AppBar leftImageUrl={friend.photo_url} name={friend.username} /> 

        { !messages && "loadindg" } 
        { messages && messageswidget }  
        {/* {JSON.stringify(friend)} */} 
        <SendMessage friend = {friend} />  
    </section> 
  )
}

export default Chat