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
const Car_1 = require("../models/Car");
const carCtrl = {
    createCar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newCar = new Car_1.CarModel(Object.assign({}, req.body));
            if (!newCar)
                return res.status(400).json({ msg: 'Invalid data' });
            yield newCar.save();
            return res.status(200).json({ msg: 'Add car success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    getAllCar: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cars = yield Car_1.CarModel.find();
            if (!cars)
                return res.status(400).json({ msg: 'Car not found' });
            res.status(200).json(cars);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
exports.default = carCtrl;
