import React from 'react'
import styles from '../css/Auth.module.css';
import googleIcon from '../assets/google.png';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';



function Auth() { 

  const signintoGoogle = () => {
    signInWithPopup(auth, provider).then ((data)=>{
      console.log(data);
    })
}

  return ( 
    <section className={styles.auth_screen}>
        <div className={styles.auth_header}>ChitChat</div>
        <div className={styles.auth_login_container}>
          <div className={styles.title}>Welcome!</div>
          <div className={styles.sub_title}>Use Google to log in</div>
          <div className={styles.login_button} onClick={signintoGoogle} ><img src={googleIcon} alt="G" />Continue with google</div>
          <div className={styles.terms}>By continuing, you agree to Canva's Terms of Use. Read our Privacy Policy.</div>
        </div> 
    </section>
  ) 
} 

export default Auth;  