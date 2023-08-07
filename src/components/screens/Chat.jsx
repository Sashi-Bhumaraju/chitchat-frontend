import React, { useRef } from 'react';
import styles from '../../css/Chat.module.css';
import ChatListItem from '../widgets/ChatListItem';
import AppBar from '../widgets/AppBar';
import { GetChatList, GetChatListOfUserQuery } from '../../store/thunks/chat-thunks/Chat';
import { useEffect,useState } from 'react';
import { useParams, useLocation, Outlet, useNavigate  } from 'react-router-dom';
import { nanoid } from 'nanoid';
import SendMessage from '../widgets/SendMessage';
import UseCollectionData from '../../hooks/UseCollectionData';
import NoChatWindow from '../widgets/NoChatWindow';
import { useDispatch, useSelector } from 'react-redux';
import UseThunk from '../../hooks/UseThunk';


function Chat() {

  const { chatId } = useParams(); 
  const friend = useLocation().state; 
  const [runGetChatList, data, isLoading, error] = UseThunk(GetChatList); 
  const [chatIdRef, setChatIdRef] = useState(chatId);
  const [friendRef, setFriendRef] = useState(friend);
  const messages = useSelector((state)=>{return state.chat.data})
  const dispatch = useDispatch();

  useEffect( ()=>{
    runGetChatList({chatId,dispatch})
    chatId && setChatIdRef(chatId);
    friend && setFriendRef(friend);
  },[chatId,friend] )

//  console.log(chatMessagesQuery)
  
  useEffect(()=>{  scrollToBottom() },[messages] )  
  const messageswidget = messages && messages.map((message)=><ChatListItem key={nanoid()} message = {message}/>)
  const scrollToBottomPointRef = useRef();   

  const scrollToBottom = () => scrollToBottomPointRef.current?.scrollIntoView()  
  const navigate = useNavigate()   
  const user = useSelector((state) => state.user.data)   

  const displayProfile = () => {   
    navigate(friend.user_id)   
  }  

  return (
    <section className={styles.chat}>     
        <AppBar leftImageUrl={friendRef && friendRef.photo_url} name={friendRef && friendRef.username} click={displayProfile} />  
        <div className={styles.empty_chat}>     
            <NoChatWindow/>
        </div>
        { !messages && "loadindg" } 
        { messages && messageswidget }    
        <div ref={scrollToBottomPointRef} />
        <SendMessage friend = {friendRef} scrollBottom = {scrollToBottom} />  
        <Outlet/>
    </section> 
  )
}

export default Chat