const express = require("express");
const router = express.Router();
const {
    getAllTodo,postCreateTodo, putUpdateTodo, deleteTodo
} = require("../controllers/todo");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateTodo);


router.put("/:id", putUpdateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;