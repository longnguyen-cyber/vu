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
const GasStation_1 = require("./../models/GasStation");
const gasStationCtrl = {
    createGas: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newGas = new GasStation_1.GasStationModel(Object.assign({}, req.body));
            if (!newGas)
                return res.status(400).json({ msg: 'Invalid data' });
            yield newGas.save();
            return res.status(200).json({ msg: 'Create gas success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    getAllGas: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gas = yield GasStation_1.GasStationModel.find();
            if (!gas)
                return res.status(400).json({ msg: 'Gas not found' });
            res.status(200).json(gas);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
exports.default = gasStationCtrl;
