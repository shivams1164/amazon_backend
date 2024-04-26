const express = require('express')
const orderController = require('../controllers/orderController')
const orderRouter = express.Router();

orderRouter.route('/')
    .get(orderController.getAllOrders)
    .post(orderController.createOrder)

orderRouter.route('/:id')
    .get(orderController.getOrderById)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder)


module.exports=orderRouter;