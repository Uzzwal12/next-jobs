import React from 'react'
import Cookies from 'js-cookie'
import styles from  "./candidate.module.scss"

function Candidate() {
    const userData = JSON.parse(Cookies.get("userData") || '')
    console.log(userData)
    return (
        <div>
             <div className={styles["background-wrapper"]} />
            <h1>Candidate</h1>
        </div>
    )
}

export default Candidate
