const axios = require('axios');
const moment = require('moment-timezone');

class ResponseClass {
    constructor() {
        this.defaultResponse = this.defaultResponse.bind(this);
    }

    getWitResponse = async (response) => {
        // console.log(JSON.stringify(response, null, 2), Object.keys(response.entities).length)
        if (Object.keys(response.entities).length === 0) {
            return this.thanks();
        }else{
            switch (response.intents[0].name) {
                case 'timeAtPlace':
                    return await this.currenttime(response.entities['wit$location:location'][0].body, response.entities['wit$location:location'][0].resolved.values[0].timezone);

                default:
                    return this.thanks();
            }
        }
    }

    defaultResponse = () => {
        return 'hey! ask me something ?'
    }
    thanks = () => {
        return 'thanks for asking me';
    }

    currenttime = async (location, timezone) => {
        console.log(location, timezone)
        try {
            // const response =  await axios.get(`http://worldtimeapi.org/api/timezone/Asia/Dhaka`);
            return timezone + ': ' + moment.tz(timezone).format("DD-MM-YYYY HH:mm:ss");;
        } catch (error) {
            return this.thanks();
        }
    }
}

module.exports = new ResponseClass();