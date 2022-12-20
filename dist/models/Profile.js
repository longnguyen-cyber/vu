"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModel = void 0;
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    furigana: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
});
exports.ProfileModel = (0, mongoose_1.model)('Profile', ProfileSchema);
