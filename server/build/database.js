"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
const sql = require('mssql');
const pool = new sql.ConnectionPool(keys_1.default.database);
pool.connect();
exports.default = pool;
