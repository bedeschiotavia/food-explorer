const { Router } = require ("express");
const multer = require ("multer")
const uploadConfig = require("../configs/upload")

const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization")

const DishesController = require ("../controllers/DishesController");
const ensureAuthenticated = require ("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);

dishesRoutes.post("/", upload.single("image"), verifyUserAuthorization("admin"), dishesController.create);
dishesRoutes.delete("/:id", verifyUserAuthorization("admin"), dishesController.delete);
dishesRoutes.put("/:id", upload.single("image"), verifyUserAuthorization("admin"), dishesController.update);

module.exports = dishesRoutes;