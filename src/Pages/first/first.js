import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../../Components/navbar/navbar';
import styles from './first.module.css';

//First page
const First = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Container>
                    <Row className={styles.row}>
                        <Col ><p className={styles.b}>CatApp</p><p className={styles.c}>Finding information on cats made easy</p></Col>
                        <Col><img src="https://28.media.tumblr.com/tumblr_m2a3yvSZMH1rtuomto1_250.jpg" alt="cat" className={styles.img}></img></Col>
                    </Row>
                    <Row className={styles.row}>
                        <Col className="d-none d-lg-block"><img src="https://cdn2.thecatapi.com/images/MjEa4UzfB.jpg" alt="cat" className={styles.img}></img></Col>
                        <Col className={styles.h}><a href="/breedlist">Breed List</a><p className={styles.c}>Contains the list of all breeds</p></Col>
                    </Row>
                    <Row className={styles.row}>
                        <Col className={styles.h}><a href="/info">Information</a><p className={styles.c}>Contains information on breeds</p></Col>
                        <Col className="d-none d-lg-block"><img src="https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg" alt="cat" className={styles.img}></img></Col>
                    </Row>
                    <Row className={styles.row}>
                        <Col className="d-none d-lg-block"><img src="https://cdn2.thecatapi.com/images/wkWtPBQAT.jpg" alt="cat" className={styles.img}></img></Col>
                        <Col className={styles.h}><a href="/pictures">Pictures</a><p className={styles.c}>Contains random pictures and facts about cats</p></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default First;