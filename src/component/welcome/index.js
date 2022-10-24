import React from "react";
import styles from "./welcome.module.scss"

const Welcome=()=>
{
 return (
    <div className={styles.container}>
        <img src="https://img.freepik.com/free-vector/happy-tiny-people-near-huge-welcome-word-flat-illustration_74855-10808.jpg?w=2000" className={styles.image}/>
        <h1 className={styles.headline}>Welcome to my website!</h1>
    </div>
 );
};

export default Welcome;