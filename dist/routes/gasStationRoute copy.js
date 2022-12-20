"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gasStationCtrl_1 = __importDefault(require("../controllers/gasStationCtrl"));
const router = express_1.default.Router();
router.post('/gas', gasStationCtrl_1.default.createGas);
router.get('/gas', gasStationCtrl_1.default.getAllGas);
exports.default = router;
