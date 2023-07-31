import React from 'react' 
import styles from '../../css/ContactListSkeleton.module.css' 
import AppBar from '../widgets/AppBar'

function ContactListSkeleton( {count}) {

    const items = Array.from({ length: 7 }, (_, index) => {
       return  <div className={styles.contact_list_skeleton_item} key={index}>
            <div className={styles.contact_list_skeleton_item_image}></div> 
            <div className={styles.contact_list_skeleton_item_container}>
                <div className={styles.contact_list_skeleton_item_heading}>
                    <div className={styles.contact_list_skeleton_item_heading_name}></div>
                    <div className={styles.contact_list_skeleton_item_heading_content}></div>
                </div>
                <div className={styles.contact_list_skeleton_item_content}></div>
            </div>
       </div>
});
  return (
   <>  {items}</>
  )
}

export default ContactListSkeleton