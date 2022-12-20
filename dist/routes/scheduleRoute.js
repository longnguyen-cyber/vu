"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scheduleCrtl_1 = __importDefault(require("../controllers/scheduleCrtl"));
const router = express_1.default.Router();
router.get('/schedule', scheduleCrtl_1.default.getAllSchedule);
router.post('/schedule', scheduleCrtl_1.default.createBooking);
router
    .route('/schedule/:id')
    .put(scheduleCrtl_1.default.updateSchedule)
    .delete(scheduleCrtl_1.default.deleteSchedule);
exports.default = router;
