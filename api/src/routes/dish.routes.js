const { Router } = require ("express")

const DishController = require ("../controllers/DishController")
const ensureAuthenticated = require ("../middlewares/ensureAuthenticated")

const dishRoutes = Router()

const dishController = new DishController()

dishRoutes.use(ensureAuthenticated)

dishRoutes.get("/", dishController.index)
dishRoutes.post("/", dishController.create)

module.exports = dishRoutes