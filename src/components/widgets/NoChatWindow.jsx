import React from 'react'
import styles from '../../css/NoChatWindow.module.css';

function NoChatWindow() {
  return (
    <section className={styles.no_chat_window}>
        <div className={styles.app_description_container}>
            <div className={styles.app_name}> ChitChat </div>
            <div className={styles.app_name_caption}> Melodies of Friendship: Embracing the Whispers  of Yaari ❤ ChitChat </div>
        </div>
    </section>
  )
}

export default NoChatWindow