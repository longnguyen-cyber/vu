"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleModel = void 0;
const mongoose_1 = require("mongoose");
const ScheduleSchema = new mongoose_1.Schema({
    idCar: {
        type: String,
        require: true,
        unique: true
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
    nameService: {
        type: String
    },
    idGasStation: {
        type: String
    }
});
exports.ScheduleModel = (0, mongoose_1.model)('Schedule', ScheduleSchema);
