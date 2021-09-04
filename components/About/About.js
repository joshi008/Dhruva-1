import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'
const About = () => {
    const [showTimer,setShowTimer] = useState(true);
    return (
        <div className={styles.container}>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>What is <span>Dhruva ?</span></h1>
                    <p className={styles.content}>lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                    <div className={styles.btn_container}>
                        <Button name="About Us"/>
                    </div>
                </div>
                <div className={styles.date_container}>
                        <div className={styles.left_date}>
                            <Date day="15" month="October"/>
                        </div>
                        <hr className={styles.line}/>
                        <div className={styles.right_date}>
                            <Date day="18" month="October"/>
                        </div>
                </div>
                <div className={styles.timer_container}>
                    {
                        showTimer ?
                            <Timer setShowTimer={setShowTimer}/>
                            :
                            <h1 className={styles.title}>It&#39;s Show<span>time</span></h1>
                    }
                    
                </div>
        </div>
    )
}

export default About
