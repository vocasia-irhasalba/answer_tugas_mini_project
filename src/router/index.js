const express = require("express")
const exampleController = require("../controllers/ExampleController")
const menuController = require("../controllers/MenuController")
const customerController = require("../controllers/CustomerController")
const router = express.Router()

// menu routers
router.get('/menus',menuController.getAll)
router.get('/menu/:id',menuController.getById)
router.post('/menu/create',menuController.create)
router.put('/menu/update/:id',menuController.update)
router.delete('/menu/delete/:id',menuController.delete)

// customer routers
router.get('/customers',customerController.getAll)
router.get('/customer/:id',customerController.getById)
router.post('/customer/create',customerController.create)
router.put('/customer/update/:id',customerController.update)
router.delete('/customer/delete/:id',customerController.delete)
module.exports = router
