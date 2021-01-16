const mongoose = require('mongoose');
const Joi = require('joi'); 

const CustomerSchema = mongoose.Schema(
    {
        fname: { type: String, required: true, min: 3, max: 15 },
        lname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        ismarket: { type: Boolean, default: false },
        phoneNo: { type: String, required: true },
        note: { type: String, required: false },
    },
    {
        timestamps: true
    }
);

function customerValidation(body, isUpdate = false) {
    let customerJoi;
    if (!isUpdate) {
        customerJoi = Joi.object().keys({
            fname: Joi.string().min(3).max(15).required(),
            lname: Joi.string().min(3).max(15).required(),
            email: Joi.string().email().required(),
            ismarket: Joi.boolean(),
            phoneNo: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        });
    } else {
        customerJoi = Joi.object().keys({
            fname: Joi.string().min(3).max(15),
            lname: Joi.string().min(3).max(15),
            email: Joi.string().email(),
            ismarket: Joi.boolean(),
            phoneNo: Joi.string().length(10).pattern(/^[0-9]+$/),
        });
    }


    return customerJoi.validate(body)
}

const Customer = mongoose.model('Customer', CustomerSchema);

exports.validate = customerValidation;
exports.Customer = Customer; 