import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
// Components
import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import LineGraph from './LineGraph'
// Util
import { sortData, pretty } from '../util'
// Style
import '../Styles/App.css';
import 'leaflet/dist/leaflet.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [mapCountries, setMapCountries] = useState([])
  const [tableData, setTableData] = useState([])
  const [mapPosition, setMapPosition] = useState([30, 0])
  const [mapZoom, setMapZoom] = useState(2)
  const [casesType, setCasesType] = useState('cases')

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  }, [])

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
        const sortedData = sortData(data)
        setTableData(sortedData)
        setMapCountries(data)
        setCountries(countries)
      })
    }
    getCountriesData()
  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode)
      setCountryInfo(data)
      setMapPosition([data.countryInfo.lat, data.countryInfo.long])
      setMapZoom(4)
    })
  }
  console.log(countryInfo)
  console.log(mapPosition)
  return (
    <div className="app">
      <div className="app__leftSide">
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
              <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      </div>
      <div className="app__stats">
          <InfoBox
          onClick={(e) => setCasesType('cases')}
          title='Coronavirus Cases'
          isRed
          active={casesType === 'cases'}
          cases={pretty(countryInfo.todayCases)}
          total={pretty(countryInfo.cases)}
          />
          <InfoBox
          onClick={(e) => setCasesType('recovered')}
          title='Recovered'
          active={casesType === 'recovered'}
          cases={pretty(countryInfo.todayRecovered)}
          total={pretty(countryInfo.recovered)}
          />
          <InfoBox
          onClick={(e) => setCasesType('deaths')}
          title='Deaths'
          active={casesType === 'deaths'}
          cases={pretty(countryInfo.todayDeaths)}
          total={pretty(countryInfo.deaths)}
          />
      </div>
      <Map
      casesType={casesType}
      countries={mapCountries}
      center={mapPosition}
      zoom={mapZoom}
      />

      </div>
      <Card className="app__rightSide">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide New Cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
