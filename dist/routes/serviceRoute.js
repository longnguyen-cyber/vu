"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serviceCtrl_1 = __importDefault(require("../controllers/serviceCtrl"));
const router = express_1.default.Router();
router.post('/service', serviceCtrl_1.default.createService);
router.get('/service', serviceCtrl_1.default.getAllService);
exports.default = router;
