"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./userRouter"));
const calendarRoute_1 = __importDefault(require("./calendarRoute"));
const carRoute_1 = __importDefault(require("./carRoute"));
const serviceRoute_1 = __importDefault(require("./serviceRoute"));
const gasStationRoute_1 = __importDefault(require("./gasStationRoute"));
const scheduleRoute_1 = __importDefault(require("./scheduleRoute"));
const routes = [
    userRouter_1.default,
    calendarRoute_1.default,
    carRoute_1.default,
    serviceRoute_1.default,
    gasStationRoute_1.default,
    scheduleRoute_1.default
];
exports.default = routes;
