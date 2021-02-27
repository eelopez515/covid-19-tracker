import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'

const casesTypeColors = {
    cases: {
        hex: '#ED8A2C', 
        multiplier: 400,
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 600,
    },
    deaths: {
        hex: '#CC1034',
        multiplier: 1000,
    },
}

// sort data by cases to show on table
export const sortData = (data) => {
    const sortedData = [...data]
    
    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1)
}

// Draw circles on Map showing cases
export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle
        key={country.country}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        pathOptions={{ color: casesTypeColors[casesType].hex }}
        radius={
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
        >
            <Popup>
                <div className='info__container'>
                    <div
                    className='info__flag'
                    style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className='info__name'>{country.country}</div>
                    <div className='info__cases'>Cases: {numeral(country.cases).format('0,0')}</div>
                    <div className='info__recovered'>Recovered: {numeral(country.recovered).format('0,0')}</div>
                    <div className='info__deaths'>Deaths: {numeral(country.deaths).format('0,0')}</div>
                </div> 
            </Popup>
        </Circle>
    ))
)
// Make format of numers shows in infoboxes look 'Pretty'
export const pretty = (stat) => stat ? `+${numeral(stat).format('0,0a')}` : '+0'
