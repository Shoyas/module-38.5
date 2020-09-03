import React from 'react';
import './Country.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Country = (props) => {
    //console.log(props.country);
    const {name, capital, region, population} = props.country;
    
    return (
        <div className="country-design">
            <Row>
                <Col>
                    <h5>Name : {name}</h5>
                    <p>Population : {population}</p>
                    <p>Capital : {capital}</p>
                    <p>Region : {region}</p>
                
                </Col>

                <Col md="auto">

                </Col>

                <Col xs lg="2">
                    <Button className="details-btn" variant="outline-primary">
                        <Link to={`/country/${name}`}>
                            More Info
                        </Link>
                        
                    </Button>
                </Col>
            </Row>
            
        </div>
    );
};

export default Country;