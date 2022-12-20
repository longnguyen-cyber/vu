"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasStationModel = void 0;
const mongoose_1 = require("mongoose");
const GasStationSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    }
});
exports.GasStationModel = (0, mongoose_1.model)('GasStation', GasStationSchema);
