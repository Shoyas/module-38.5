import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data));
        
    },[])
    return (
        <div className="container all-country-design">
            <h3>Total Country : {country.length}</h3>
            <hr/>
            <ol>
            {
                country.map(country => <Country key={country.alpha3Code} country={country}></Country>)
            }
            </ol>
        </div>
    );
};

export default Countries;