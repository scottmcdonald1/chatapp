import React, { useState } from "react";
import styles from '../styles/Login.module.css'
import Router, { useRouter } from "next/router";

export function SignUp() {

    const router = useRouter();

    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '') {
            alert('must have a username!!!')
        } else {
            let path = `/chatroom?user=${username}`
            router.push(path);
        }
    }

    return (
        <form 
            className={styles.card}
            onSubmit={handleSubmit}>
            <label className={styles.formItem}>PLEASE ENTER YOUR NAME</label>
            <input 
            onChange={handleChange}
            className={styles.formItem} 
            value={username} 
            type="text">
            </input>
            
            <button 
            onClick={handleSubmit}
            className={styles.formItem} 
            type="submit">
                CONTINUE
            </button>
        </form>
    )
}