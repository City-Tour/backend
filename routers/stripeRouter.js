const router = require('express').Router()

const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


router.get("/stripe-key", (req, res) => {
    res.send({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

const calculateOrderAmount = items => {
    return 999;
};

router.post("/pay", async (req, res) => {
    const { token, items } = req.body;

    const orderAmount = calculateOrderAmount(items);

    try {
        const charge = await stripe.charges.create({
            amount: orderAmount,
            currency: "usd",
            source: token
        });
        res.send(charge);
    } catch (e) {
        res.send({ error: e.message });
    }
});

module.exports = router