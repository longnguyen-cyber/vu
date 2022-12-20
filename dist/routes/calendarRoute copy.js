"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calendarCtrl_1 = __importDefault(require("../controllers/calendarCtrl"));
const router = express_1.default.Router();
router.get('/calendar', calendarCtrl_1.default.getAllDate);
router.post('/calendar', calendarCtrl_1.default.createDayOff);
exports.default = router;
