"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carCtrl_1 = __importDefault(require("../controllers/carCtrl"));
const router = express_1.default.Router();
router.post('/car', carCtrl_1.default.createCar);
router.get('/car', carCtrl_1.default.getAllCar);
exports.default = router;
