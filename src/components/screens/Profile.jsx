import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseThunk from '../../hooks/UseThunk';
import { GetUser } from '../../store';
import { useSelector } from 'react-redux';
import styles from '../../css/Profile.module.css'

function Profile() {

  const navigate = useNavigate();
  var {user_id} = useParams();
  const [runGetUser, userData, isLoading, error] = UseThunk(GetUser)
  const currentUser = useSelector((state)=>state.user.data)
  const fetchedUser = useSelector((state)=>{ return state.user.fetchedUsers.find(user => user && user.user_id === user_id) })
  useEffect(() => {
    console.log("ioio")
    if (!user_id) {
      navigate(currentUser.user_id, { replace: true });
    } else if (!fetchedUser) {
      runGetUser(user_id);
    }
  }, [user_id, fetchedUser]); 

  if(!fetchedUser) return "loading"+user_id 
  return (
     <section className={styles.profile_screen}>
        {/* {JSON.stringify(fetchedUser)} */}
        <div className={styles.profile_screen_header} >
            <img src={fetchedUser.photo_url} alt='profile photo'></img>
            <div className={styles .profile_screen_header_username }>{fetchedUser.username}</div>
        </div>
        <div className={styles.profile_screen_body}>
          <div className={styles.profile_screen_body_item}>{fetchedUser.email}</div>
        </div>
     </section>
  )

}

export default Profile