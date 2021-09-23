# Sensor-data
## Introduction
This application is buit to create the visualization of data from four different sensors. First table shows the latest sensors data and the second one shows the historical sensor data.

## Tools
Git: Version control
Backend: Nodejs, Express
Database: Mongodb
Frontend: jQuery, Bootstrap, Vanilla Javascript, Highcharts
Hosting: Heroku

## Data

To be able to access the latest data, an access token is needed first before it is then used to call an API endpoint from "https://opendata.hopefully.works/api/event".

The sensor data is changing once per hour and there is a need to store that data as historical data. Therefore the Node Cron module can be used to schedule task in node.js using full crontab syntax to check and saving new sensor data if available.

## Live demo
This app can be accessed at: https://sensor-data-2.herokuapp.com/


