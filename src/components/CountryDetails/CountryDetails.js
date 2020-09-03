import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CountryDetails = () => {
    let {name} = useParams();
const [detailCountry, setDetailCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailCountry(data[0]))

    }, [])
    //console.log(detailCountry);
    let {population, capital, demonym, area, timezones, topLevelDomain, region, subregion, borders } = detailCountry;
    return (
        <div className="container">
            <h4>Details of {name}</h4> <hr/>
            <p>Population : {population}</p>
            <p>Capital : {capital}</p>
            <p>Nationality : {demonym}</p>
            <p>Area : {area}</p>
            <p>TimeZone : {timezones}</p>
            <p>Top Level Domain : {topLevelDomain}</p>
            <p>Region : {region}</p>
            <p>Sub-region : {subregion}</p>
            {
                detailCountry.name && <p>Border : {borders[0]} { borders[1] }</p>
            }

        </div>
    );
};

export default CountryDetails;