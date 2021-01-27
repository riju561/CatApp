import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './imagecarousel.module.css';

const ImageCarousel = (props) => {
    return (
        <div className={styles.div}>
            <h1>Cat Carousel</h1>
            <Carousel className={styles.a}>
                
                {props.url.map((url,i=0) => {
                    return (
                        <Carousel.Item interval={4000}>
                            <img className={`d-block ${styles.img}`} src={url} alt={url}/>
                            <h5 className={styles.c}>{props.data[i]}</h5>
                        </Carousel.Item>  
                    );
                })}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;
