const { Customer, validate } = require('../models/customer.model');
const ObjectId = require('mongoose').Types.ObjectId;
exports.create = async (req, res) => {

    /** Check the error req.body inputs */
    const result = validate(req.body)
    if (result.error) {
        return res.status(400).send(result.error.message);
    }

    /** Check the error customer already registerd or not */
    let customer = await Customer.findOne({ email: req.body.email })
    if (customer) {
        return res.status(400).send('Customer Already registered');
    }

    customer = new Customer({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        ismarket: req.body.ismarket,
        phoneNo: req.body.phoneNo,
        note: req.body.note,
        tags: req.body.tags
    });

    /** Save customer into database */
    const queryResult = await customer.save();

    return res.status(200).send({
        isValid: true,
        // message: 'customer added successfully',
        customer: queryResult
    });
};

/*Get All Customer */
exports.getAll = async (req, res) => {
    const customer = await Customer.find();
    return res.status(200).send(customer);
};

/*Get By Id Customer */
exports.getById = async (req, res) => {
    /** Validate Customer id */
    const isValidParam = ObjectId.isValid(req.params.id);
    if (!isValidParam)
        return res.status(404).send('Please enter valid customer id...!!!');

    const customer = await Customer.findById(req.params.id);
    if (!customer)
        return res.status(404).send('The Customer with given id not found...!!!')

    return res.status(200).send(customer);
};

/*Update Customer */
exports.update = async (req, res) => {
    /** Validate Customer id */
    const isValidParam = ObjectId.isValid(req.params.id);
    if (!isValidParam)
        return res.status(404).send('Please enter valid customer id...!!!');

    /** Check the error req.body inputs */
    const result = validate(req.body , true)
    if (result.error)
        return res.status(400).send(result.error.message);

    const customer = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        ismarket: req.body.ismarket,
        phoneNo: req.body.phoneNo,
        note: req.body.note,
        tags: req.body.tags 
    };

    /** update customer into database */
    const queryResult = await Customer.findByIdAndUpdate(req.params.id, customer, { new: true });

    res.status(200).send(queryResult);
};

/*Delete Customer */
exports.delete = async (req, res) => {
    /** Validate Customer id */
    const isValidParam = ObjectId.isValid(req.params.id);
    if (!isValidParam)
        return res.status(404).send('Please enter valid customer id...!!!');

    /** delete customer into database */
    const queryResult = await Customer.findByIdAndRemove(req.params.id);

    res.status(200).send(queryResult);
};  