import React from 'react'
import styles from '../css/Auth.module.css';

function Auth() { 
  return ( 
    <section className={styles.auth_screen}>
        <div className={styles.auth_header}>WhisperIt</div>
        <div className={styles.auth_login_container}>
          <div className={styles.title}>Welcome Back!</div>
          <div className={styles.sub_title}>Use Google to log in.</div>
          <div className={styles.login_button}>Continue with google</div>
          <div className={styles.terms}>By continuing, you agree to Canva's Terms of Use. Read our Privacy Policy.</div>
        </div> 
    </section>
  ) 
} 

export default Auth;  