import React from 'react';
import styles from '../../css/UserListItem.module.css'
import { useNavigate } from 'react-router-dom';
import UseIsMobile from '../../hooks/UseIsMobile';

function UserListItem(props) {

  const navigate = useNavigate()
  const isMobile = UseIsMobile();
  const goToChattingPage= ()  => {
    isMobile?   navigate( "/"+props.user.user_id,{ state: props.user, replace: true }) :
    navigate( "/home/"+props.user.user_id,{ state: props.user })
  } 
  return (
    <div className={styles.user_list_item} onClick={goToChattingPage}>
        {/* UserListItem */}
        <div className={styles.user_list_item_image}>
            <img src={props.user.photo_url}></img>
        </div>
        <div className={styles.user_list_item_container}>
            <div className={styles.user_list_item_heading}>
                <div className={styles.user_list_item_heading_name}>{props.user.username}</div>
                 {/* <div className={styles.user_list_item_heading_time}>message</div> */}
            </div>
            <div className={styles.user_list_item_content}>{props.user.email}</div>
            {/* <div className={styles.user_list_item_content}>you are good right?</div> */}
        </div>
        {/* <div className={styles.make_chat}>chat</div> */}
    </div>
  )
}

export default UserListItem