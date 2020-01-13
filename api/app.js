let response;

exports.weatherHandler = async (event, context) => {
    try {
        let city = event.queryStringParameters.city;
        const fs = require('fs');
        const creds = JSON.parse(fs.readFileSync("config.json", 'utf8'));
        const mapQuestApiKey = creds["MapQuest Api Key"];
        const mapQuestEndpoint = `http://open.mapquestapi.com/geocoding/v1/address?key=${mapQuestApiKey}&location=${city}`;
        const darkSkyApiKey = creds["DarkSky Api Key"];
        const darkSkyEndpoint = `https://api.darksky.net/forecast/${darkSkyApiKey}/`;

        const axios = require('axios');

        let res = await axios.get(mapQuestEndpoint);
        const latLng = res.data.results["0"].locations["0"].latLng;

        res = await axios.get(darkSkyEndpoint + `${latLng.lat},${latLng.lng}`);

        let currently = res.data.currently;

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `It is currently ${currently.summary} in ${city}.`,
                temperature: currently.temperature
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};