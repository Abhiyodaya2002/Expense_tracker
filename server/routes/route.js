const express=require("express");
const routes =express.Router();
const controller =require("../controller/controller")

routes.route("/api/categories")
.post(controller.create_Categories)
.get(controller.get_Categories);

routes.route("/api/transaction")
.post(controller.create_Transaction)
.get(controller.get_Transaction)
.delete(controller.delete_Transaction);

//We will join the above two models and return a data from the label get endpoint ie we want color from 1st collection and all the other data from 2nd collection.
//so we  will join these two models and return a response

routes.route("/api/labels")
.get(controller.get_Labels);

module.exports=routes;
