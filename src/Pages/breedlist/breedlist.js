import React, { useState, useEffect } from 'react';
import { breedAPI } from '../../Api/catbreedAPI/CatbreedAPI';
import Cards from '../../Components/card/card';
import styles from './breedlist.module.css';
import Navbar from '../../Components/navbar/navbar';

//List of breeds
const Breedlist = () => {
    const [data, setData] = useState([]);
    const [state, setState] = useState(false);
    //Callback function for API
    const printbreed = (a) => {
        setState(true);
        setData(a);
    }
    //Takes effect when component is rendered
    useEffect(() => {
        setState(false);
        breedAPI(printbreed);
    }, [])
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Shows loading icon until data is fetched  */}
            {state ? <Cards data={data} /> : <div className={styles.loader}></div>}
        </div>
    );
}
export default Breedlist;