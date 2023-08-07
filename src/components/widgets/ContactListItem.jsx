import React, { useEffect } from 'react';
import styles from '../../css/ContactListItem.module.css'
import { useNavigate } from 'react-router-dom';

function ContactListItem(props) {
  const navigate = useNavigate();
  const goToChattingPage= ()  => {
      navigate(props.contact.user_id,{ state: props.contact })
      // console.log(props.contact)
  }
  return (
    <div className={styles.contact_list_item} onClick={goToChattingPage}>

      <div className={styles.contact_list_item_image}>
        <img src={props.contact.photo_url} alt=""></img>
      </div>
      <div className={styles.contact_list_item_container}>
        <div className={styles.contact_list_item_heading}>
          <div className={styles.contact_list_item_heading_name}>{props.contact.username}</div>
          <div className={styles.contact_list_item_heading_time}>{props.contact.timestamp}</div>
        </div>
        <div className={styles.contact_list_item_content}>{props.contact.content}</div>
      </div>
    </div>
  )
}

export default ContactListItem