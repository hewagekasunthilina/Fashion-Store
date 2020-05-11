const express = require("express");
const router = express.Router();

const Category = require("../Model/Fashion.model");
const Users = require("../Model/Users.model");
const Payment = require("../Model/Payment.model");
const Products = require("../Model/Products.model");

router.post("/category", (req, res, next) => {
    Category.create(req.body)
        .then((category) => {
            res.send(category);
        })
        .catch(next);
});

router.get("/category", (req, res, next) => {
    Category.find({}, (err, category) => {
        var categoryMap = {};

        category.forEach((category) => {
            categoryMap[category.id] = category;
        });

        res.send(categoryMap);
    }).catch(next);
});

module.exports = router;

router.get("/category/:id", (req, res, next) => {
    Category.find({id: req.params.id}, (err, category) => {
        var categoryMap = {};

        category.forEach((category) => {
            categoryMap[category.id] = category;
        });

        res.send(categoryMap);
    }).catch(next);
});

router.delete("/category/:id", (req, res, next) => {
    Category.deleteOne({id: req.params.id}, (err, result) => {
        if (result.deletedCount) {
            res.json({
                message: `deleted ${req.params.id}`,
            });
        } else {
            res.json({
                message: `deleted failed ${req.params.id}`,
            });
        }
    }).catch(next);
});

router.post("/payment", (req, res, next) => {
    Payment.create(req.body)
        .then((payment) => {
            res.send(payment);
        })
        .catch(next);
});

router.get("/payment", (req, res, next) => {
    Category.find({}, (err, payment) => {
        var sensorMapper = {};

        payment.forEach((payment) => {
            sensorMapper[payment.id] = payment;
        });

        res.send(sensorMapper);
    }).catch(next);
});

router.post("/signup", (req, res, next) => {
    Users.create(req.body)
        .then((users) => {
            res.send(users);
        })
        .catch(next);
});

router.post("/product", (req, res, next) => {
    Products.create(req.body)
        .then((products) => {
            res.send(products);
        })
        .catch(next);
});

router.get("/product", (req, res, next) => {
    Products.find({}, (err, product) => {
        var productMap = {};

        product.forEach((product) => {
            productMap[products.id] = product;
        });

        res.send(productMap);
    }).catch(next);
});
