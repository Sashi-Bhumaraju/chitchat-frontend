import React from 'react';
import styles from '../../css/UserListItem.module.css'

function UserListItem(props) {
  return (
    <div className={styles.user_list_item}>
        {/* UserListItem */}
        <div className={styles.user_list_item_image}>
            <img src='https://lh3.googleusercontent.com/a/AAcHTtd5KMYf1_TBGNXt1VnlGpMI3nMRrN0Ihsd5BZbCKmM=s96-c'></img>
        </div>
        <div className={styles.user_list_item_container}>
            <div className={styles.user_list_item_heading}>
                <div className={styles.user_list_item_heading_name}>sasi Bhumaraju</div>
                <div className={styles.user_list_item_heading_time}>message</div>
            </div>
            <div className={styles.user_list_item_content}>you are good right?</div>
            {/* <div className={styles.user_list_item_content}>you are good right?</div> */}
        </div>
    </div>
  )
}

export default UserListItem