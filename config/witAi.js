require('dotenv').config();
const { Wit, log } = require('node-wit');

const actions = {
    confirm_order(contextMap) {
        return { context_map: { ...contextMap, order_confirmation: 'PIZZA42' } };
    },
};
const witClient = new Wit({
    accessToken: process.env.SECRET_TOKEN,
    // actions,
    // logger: new log.Logger(log.DEBUG), //optional
});

module.exports = witClient;