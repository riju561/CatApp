import React from 'react';
import styles from './card.module.css';

//Renders images and names in card format
const Data = (props) => {
    return (
        <div>
            <div className={styles.div}>
                {props.data.map(a => {
                    return (
                        <div className={styles.card} key={a[0]}>
                            <img src={a[1]} alt={a[0]}></img>
                            <p>{a[0]}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Data;
