import dotenv from 'dotenv';
import _ from 'ramda';

dotenv.config();

// Without Trailing /
const BASE_URL = process.env.BASE_URL || 'http://0.0.0.0:9000';

const Config = {
    // Server Configs
    BASE_URL,
    PORT: process.env.PORT || 9000,
};

const Prod = _.mergeRight(Config, {
    APP_ENV: 'Prod',
    DB_CONNECTION_URI: process.env.DB_CONNECTION_URI,
});

const Test = _.mergeRight(Config, {
    APP_ENV: 'Test',
    DB_CONNECTION_URI: process.env.TEST_DB_CONNECTION_URI,
});

export = (function () {
    console.log(`Env= ${process.env.NODE_ENV}`);
    switch (process.env.NODE_ENV) {
    case 'Production':
        return Prod;
    case 'Test':
        return Test;
    default:
        return Prod;
    }
})();
