// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account,User } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    
    console.log(req.userId);
    try{
        const account = await Account.findOne({
            userId: req.userId
        });
        const user = await User.findOne({
            _id: req.userId
        });
        return res.json({
            balance: account.balance,
            username: user.firstName
        })
    }
    catch(err){
        console.log(err);
    }
     return res.status(403).json({msg: "cannot find user in the DB"});
    
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;
    console.log("hello");
    console.log(amount+" "+to);
    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;