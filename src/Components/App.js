import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import InfoBox from './InfoBox'
import '../Styles/App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ))
        setCountries(countries)
      })
    }
    getCountriesData()
  }, [])

  const onCountryChange = (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className='app__dropdown'>
        <Select
        variant='outlined'
        value={country}
        onChange={onCountryChange}
        >
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          {
            countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      </div>
      <div className="app__stats">
          <InfoBox
          title='Coronavirus Cases'
          cases={1000}
          total={2000}
          />
          <InfoBox
          title='Recovered'
          cases={1000}
          total={2000}
          />
          <InfoBox
          title='Deaths'
          cases={1000}
          total={2000}
          />
      </div>
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;