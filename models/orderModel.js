const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    OrderNo: {
        type: Number,
        required: true,
    },
    ProductID: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
    },
    TotalPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})

const orderModel = mongoose.model('order', orderSchema);


module.exports = orderModel;
