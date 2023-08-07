import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from '../../css/Modal.module.css';
import Profile from '../screens/Profile';


function Modal (props) {       
    const naviagte = useNavigate()  
    // const { user_id } = useParams(); 
    // const [ modalComponentName, setModalComponentName] = useState(null); 
    // const [ modalComponent, setModalComponent] = useState(null); 

    const showModal = () => {        
        const modal = document.getElementById("modal-data") 
        modal.close();
        modal.showModal();
    } 

    const closeModal = () => {           
        const modal = document.getElementById("modal-data") 
        // modal.close();  
        naviagte(-1);  
    }   

  useEffect(()=>{
    showModal()
  },[])  

  return (
        <dialog id='modal-data'> 
            <div className={styles.modal_bar }>
                <div className={styles.close_modal_icon } onClick={closeModal}><IoMdArrowRoundBack/></div>
                <div className={styles.modal_name} >{props.componentName}</div>
            </div>
            <div className={styles.modal_body}>  {props.children} </div>
           
        </dialog>    
    )    
}           

export default Modal;   
       
