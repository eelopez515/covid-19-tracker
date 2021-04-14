# Covid-19 Tracker
> A Covid-19 tracker that compiles and presents real-time data in a clean, simple style. This includes the total number of cases, deaths, and recoveries per country and worldwide. The app uses a world map with population circles to represent the concentration of cases within each country, as well a combination of charts and graphs to display the figures as they update regularly.
## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The app was created to simplify the process of finding information on Covid-19 and eliminates the need for working through multiple resources. It gives a quick, easy to read snapshot of the most useful information both by country and worldwide as it changes in real-time. 
## Screenshot
![App Screenshot](https://i.imgur.com/dzquVxn.png)

## Technologies
* Reactjs
* Graphjs
* MaterialUI
* Leafletjs
* Diseas.sh API

## Setup
Here are the following steps to run this app locally:
1. Install [Node](https://nodejs.org/en/) to use the package manager (NPM) needed to access the code 
2. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this project from Github to use with Node
3. Enter into the Node terminal as follows:
```
$ cd <file location> 
$ npm install
$ npm start
```

## Code Sample
Here is the code for the Map:
```
function Map({ center, zoom, countries, casesType }) {
    
    return (
        <div className='map'>
            <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            >
                <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </div>
    )
}
```

## Features
* Displays population cirles on Map representing covid-19 spikes
* Shows Data charts listing total cases for each country
* Shows Graph detailing case numbers for each category as they update

To-do list for future versions:
* Map Transitions for specific countries when they are highlighted
* Dark Mode Style 

## Status
Project is: _in progress_ this is version 1

## Inspiration
Growing data for Covid-19 

## Contact
_Feel Free To Contact Me_<br>
Created by [@lupuscode](https://www.instagram.com/lupuscode/)<br>
Email <eelopez@gmail.com>
