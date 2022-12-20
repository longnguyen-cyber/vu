"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarModel = void 0;
const mongoose_1 = require("mongoose");
const CalendarSchema = new mongoose_1.Schema({
    serviceId: {
        type: String,
        require: true,
        unique: true
    },
    startDateTime: {
        type: Date
    },
    endDateTime: {
        type: Date
    },
    status: {
        type: String
    },
    allDate: {
        type: Boolean
    },
    userId: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    deleteAt: {
        type: Date
    },
    updateAt: {
        type: Date
    },
    gasStationId: {
        type: String
    }
});
exports.CalendarModel = (0, mongoose_1.model)('Calendar', CalendarSchema);
