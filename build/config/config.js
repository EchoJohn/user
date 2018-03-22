'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
var mysql = require('mysql');
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3308',
        password: '',
        database: 'test'
});
exports.default = connection;