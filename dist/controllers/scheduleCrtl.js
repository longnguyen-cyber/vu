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
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = require("./../models/Schedule");
const scheduleCtrl = {
    createBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newSchedule = new Schedule_1.ScheduleModel(Object.assign({}, req.body));
            if (!newSchedule)
                return res.status(400).json({ msg: 'Invalid data' });
            yield newSchedule.save();
            return res.status(200).json({ msg: 'Create schedule success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    getAllSchedule: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const schedule = yield Schedule_1.ScheduleModel.find();
            if (!schedule)
                return res.status(400).json({ msg: 'Schedule not found' });
            res.status(200).json(schedule);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    updateSchedule: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const schedule = yield Schedule_1.ScheduleModel.findByIdAndUpdate(req.params.id, req.body);
            if (!schedule)
                return res.status(400).json({ msg: 'Schedule not found' });
            return res.status(200).json({ msg: 'Update schedule success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    deleteSchedule: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const schedule = yield Schedule_1.ScheduleModel.findByIdAndDelete(req.params.id);
            if (!schedule)
                return res.status(400).json({ msg: 'Schedule not found' });
            return res.status(200).json({ msg: 'Delete schedule success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
exports.default = scheduleCtrl;
