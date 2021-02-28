# Covid-19 Tracker
> A Simple Covid-19 tracker that shows you information dealing with the corona virus including the number of cases, the number of people recovered and the number of deaths by country or worldwide. The app also has a map that uses circles to point out the countries with the highest amount of cases, recoveries, or death.

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
The app was created to get a quick snapshot of how the world is doing when it come to covid-19. Instead of having to look for the information through multiple resourse this app would give you a quick insight into covid data.

## Screenshot
![App Screenshot](https://i.imgur.com/dzquVxn.png)

## Technologies
* Reactjs
* Graphjs
* MaterialUI
* Leafletjs
* Diseas.sh API

## Setup
To Run this App Locally Do The Following:
* First install Node to use NPM - [Install Node](https://nodejs.org/en/)
* Then Clone this project - [Steps to Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
* Then in terminal do as follows:
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
List of features ready and TODOs for future development
* Shows Circles on Map that represents covid-19 data
* Shows Data for different countries
* Shows Graph representing covid-19 data

To-do list:
* Dark Mode to make the App easier on the eyes in the dark
* When choosing a country the Map will zoom in on that country

## Status
Project is: _in progress_ this is version 1

## Inspiration
Inspired by Data shown in google when Covid-19 is searched

## Contact
_Feel Free To Contact Me_<br>
Created by [@lupuscode](https://www.instagram.com/lupuscode/)<br>
Email <eelopez@gmail.com>
