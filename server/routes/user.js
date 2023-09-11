const express = require("express");
const router =  express.Router();

const { getAllUser, postAllUser, putAllUser, deleteAllUser} = require("../controllers/user");

// routes for user 

router.get("/", getAllUser);

router.post("/", postAllUser);

router.put("/:id", putAllUser);

router.delete("/:id", deleteAllUser);

module.exports = router;
