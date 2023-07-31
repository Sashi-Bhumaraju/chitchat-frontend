import React from 'react';
import styles from '../../css/AppBar.module.css'

function AppBar(props) {

    const leftImage = props.leftImageUrl? <img className={styles.imageLeft} src={props.leftImageUrl} onClick={props.leftImageUrlClick}></img> : null;
    const rightImage = props.rightImageUrl? <img className={styles.imageLeft} src={props.rightImageUrl} onClick={props.rightImageUrlClick}></img> : null;

  return (
    <section className={styles.app_bar}>
        {leftImage}
        <div className={styles.app_bar_name}> {props.name} </div>
        {rightImage}
    </section>
  )
}

export default AppBar