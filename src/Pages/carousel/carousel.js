import React, { useState, useEffect } from 'react';
import { imgAPI } from '../../Api/catsAPI/catimgAPI';
import ImageCarousel from '../../Components/imagecarousel/imagecarousel';
import styles from './carousel.module.css';
import Navbar from '../../Components/navbar/navbar';
import {factAPI} from '../../Api/catFactAPI/catfactAPI';

//Page to display random images fetched from API
const Randompic = () => {
    const [state, setState] = useState(false)
    const [data, setData] = useState([])
    const [url, setUrl] = useState([])
    //Callback function for API
    const printimg = (url) => {
        setState(true);
        setUrl(url);
    }
    //Callback function for second API 
    const set = (a) => {
        setData(a);
    }
    //Takes effect when component is rendered
    useEffect(() => {
        setState(false);
        imgAPI(printimg);
        factAPI(set);
    }, [])
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Shows loading icon until data is fetched */}
            { state ? <ImageCarousel url={url} data={data}/> : <div className={styles.loader}></div>}
        </div>
    );
}
export default Randompic;