import express from "express";

import deleteEmployee from "../controllers/deleteEmployee.js";
import createEmployee from "../controllers/createEmployee.js";
import updateEmployee from "../controllers/updateEmployee.js";
import getSingleEmployee from "../controllers/getSingleEmployee.js";
import getEmployees from "../controllers/getEmployees.js";
const router = express.Router()
router.get('/', getEmployees)

// // GET a single workout
router.get('/:id', getSingleEmployee)

// POST a new workout
router.post('/', createEmployee)


router.delete('/:id', deleteEmployee)
router.patch('/:id', updateEmployee)

export default router