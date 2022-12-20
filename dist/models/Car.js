"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    nameCar: {
        type: String
    },
    typeCar: {
        type: String
    },
    licensePlate: {
        type: String
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.CarModel = (0, mongoose_1.model)('Car', CarSchema);
