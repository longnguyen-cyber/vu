"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calendar_1 = require("./../models/Calendar");
const moment_1 = __importDefault(require("moment"));
const calendarCtrl = {
    getAllDate: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const calendar = yield Calendar_1.CalendarModel.find();
            if (!calendar)
                return res.status(400).json({ msg: 'Calendar not found' });
            res.status(200).json(calendar);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    createDayOff: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { serviceId, startDateTime, endDateTime, status, allDate, userId, gasStationId } = req.body;
            const newCalendar = new Calendar_1.CalendarModel({
                serviceId,
                startDateTime,
                endDateTime,
                status,
                allDate,
                userId,
                gasStationId
            });
            yield newCalendar.save();
            return res.status(200).json({ msg: 'Create success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    updateCalendar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { serviceId, startDateTime, endDateTime, status, allDate, gasStationId } = req.body;
            yield Calendar_1.CalendarModel.findOneAndUpdate({ _id: id }, {
                serviceId,
                startDateTime,
                endDateTime,
                status,
                allDate,
                gasStationId
            });
            return res.status(200).json({ msg: 'Update success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    deleteCalendar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            yield Calendar_1.CalendarModel.findOneAndUpdate({ _id: id }, {
                deleteAt: (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss')
            });
            return res.status(200).json({ msg: 'Delete success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
exports.default = calendarCtrl;
