import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../components/Auth';
import Profile from '../components/screens/Profile';
import Modal from '../components/dailog/Modal';
import NoChatWindow from '../components/widgets/NoChatWindow';
import Chat from '../components/screens/Chat';
import UserList from '../components/screens/UserList';
import UseIsMobile from '../hooks/UseIsMobile';
import ContactsBridge from '../bridge/ContactsBridge';
import { NotificationAlert, NotificationPermission } from '../notification/NotificationAlert';
import UseNotification from '../hooks/UseNotification';


function RoutesComponent ({ component: Component, ...rest }) {
      
      const user = useSelector((state)=> state.user.data)
      const isMobile = UseIsMobile();
      const navigate = useNavigate();
      user && ContactsBridge();
      user &&  NotificationPermission();
      user &&  UseNotification();
      useEffect(()=>{ navigate("/home/s") },[isMobile])
    
      return !isMobile?  <Routes>
                    <Route path="/" element={ <Navigate to="/auth"/> } />
                    <Route path="/auth" element = { user? <Navigate to="/home"/> : <Auth/> } />
                    <Route path="/home" element = { user? <Home/> : <Navigate to="/auth"/>} > 

                        <Route index element={<Navigate to="s" />} />

                        <Route path='s' element={ <NoChatWindow/> } >  
                            <Route path='search_user' element ={<Modal componentName={"Search"}> <UserList/> </Modal>}/>
                            <Route path=':user_id' element ={<Modal componentName={"Profile"}><Profile/></Modal>}/>
                        </Route>
                        {/* <Route path='search_user' element ={<Modal componentName={"Search"}> <UserList/> </Modal>}/> */}

                        <Route path=":chatId" element={<Chat/>}> 
                                <Route path=':user_id' element ={<Modal componentName={"Profile"}><Profile/></Modal>}/>
                                <Route path='search_user' element ={<Modal componentName={"Search"}> <UserList/> </Modal>}/>
                        </Route>
                    </Route>
                    <Route path='*' element={<Navigate to="/auth"/> }/>
              </Routes>

:
            <Routes>
                <Route path="/" element={ <Navigate to="/auth"/> } />   
                <Route path="/auth" element = { user? <Navigate to="/home/s"/> : <Auth/> } /> 
                <Route path="/home/s" element = { user? <Home/> : <Navigate to="/auth"/>} >  
                            <Route path='search_user' element ={<Modal componentName={"Search"}> <UserList/> </Modal>}/>
                            <Route path=':user_id' element ={<Modal componentName={"Profile"}><Profile/></Modal>}/>
                </Route>
                <Route path="/:chatId" element={<Chat/>}> 
                        <Route path=':user_id' element ={<Modal componentName={"Profile"}><Profile/></Modal>}/>
                </Route>
                <Route path='*' element={<Navigate to="/auth"/> }/>
            </Routes>


     
 }

export default RoutesComponent;
