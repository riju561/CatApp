import React, { useState, useEffect } from 'react';
import { breedAPI } from '../../Api/catbreedAPI/CatbreedAPI'
import styles from './information.module.css';
import Navbar from '../../Components/navbar/navbar';
import { Col, Container, Row } from 'react-bootstrap';

//Information on breeds
const Search = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [state, setState] = useState(false);
    //Callback function for API
    const printbreed = (a) => {
        setData(a);
        setState(true);
    }
    //Sets data and fetches API when component is rendered
    useEffect(() => {
        setState(false);
        breedAPI(printbreed);
    }, [])
    //Changes value when dropdown value is changed
    const changeHandler = (e) => {
        setId(e.target.value);
    }
    return (
        <div className={styles.div}>
            {/* Navbar */}
            <Navbar />
            <div>
                {/* Shows loading icon until data is fetched from API */}
                {state ? <div>
                    {/* dropdown */}
                    <div className={styles.label}>                                                     
                        <label htmlFor="cats">Choose a breed:   </label>
                        <select id="cats" onChange={changeHandler}>
                            {data.map(a => (
                                <option key={a[2]} value={a[2]}>{a[0]}</option>
                            ))}
                        </select>
                    </div>
                    {/* Displays data fetched from API */}
                    <Container className={styles.container}>
                        <Row>
                            <Col>
                                <img src={data[id][1]} alt={data[id][0]} className={styles.img}></img>
                            </Col>
                            <Col className={styles.col}>
                                <h1>{data[id][0]}</h1>
                                <p><b>Description:</b> {data[id][3]}</p>
                                <p><b>Origin:</b> {data[id][4]}</p>
                                <p><b>Temperament:</b> {data[id][5]}</p>
                                <p><b>Average weight:</b> {data[id][6]}</p>
                                <p><b>For more info:</b> <a href={data[id][7]}>{data[id][7]}</a></p>
                            </Col>
                        </Row>
                    </Container>
                </div> : <div className={styles.loader}></div>}
            </div>
        </div>
    );
}

export default Search;