const { Router } = require ("express");
const multer = require ("multer")
const uploadConfig = require("../configs/upload")

const DishesController = require ("../controllers/DishesController");
const DishImageController = require ("../controllers/DishImageController");
const ensureAuthenticated = require ("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const dishesController = new DishesController();
const dishImageController = new DishImageController();

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/", upload.single("image"), dishesController.create);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.put("/:id", upload.single("image"), dishesController.update);
dishesRoutes.patch("/dishimage/:id", upload.single("image"), dishImageController.update);

module.exports = dishesRoutes;