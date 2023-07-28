import React from 'react';
import { useSelector } from 'react-redux';
import {  Route, Navigate, Routes, useParams } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../components/Auth';
import Profile from '../components/screens/Profile';
import Chats from '../components/Chats';
// import Modal from '../components/widgets/Modal';
import Modal from '../components/dailog/Modal';


function RoutesComponent ({ component: Component, ...rest }) {
    
      const user = useSelector((state)=>{
          return state.user.data
      })
    
      return  <Routes>
                    <Route path="/" element={ <Navigate to="/auth"/> } />
                    <Route path="/auth" element = { user? <Navigate to="/home"/> : <Auth/> } />
                    <Route path="/home" element = { user? <Home/> : <Navigate to="/auth"/>} > 
                        <Route index element={ <Chats/> } />
                        <Route path="profile">
                            <Route  path=":user_id" element={ <Modal componentName={"Profile"}> <Profile/> </Modal>} />
                            <Route index element={<Modal componentName={"Profile"}> <Profile/> </Modal>} />
                        </Route>
                    </Route>
                    <Route path='*' element={<Navigate to="/auth"/> }/>
              </Routes>
 }

export default RoutesComponent;
