import React from 'react';
import styles from '../../css/AppBar.module.css'
import { Outlet } from 'react-router-dom';


function AppBar(props) {

    const leftImage = props.leftImageUrl? <img className={styles.imageLeft} src={props.leftImageUrl} onClick={props.click}></img> : null;
    const rightImage = props.rightImageUrl? <img className={styles.imageright} src={props.rightImageUrl} onClick={props.click}></img> : null;

    const appScreenName = props.name;
  return (
    <section className={styles.app_bar}>
        <div className={styles.start}> 
              {leftImage}
              <div className={styles.app_bar_name}> {appScreenName} </div>
        </div>
        <div className={styles.end}>
              {rightImage}
        </div>
        {/* <Outlet/> */}
        {/* {JSON.stringify(props)} */}
    </section>
  )
}

export default AppBar