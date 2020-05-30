import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getAllEmployees, getEmployeeById, updateEmployee, addEmployee, deleteEmployee
} from "./apis/employeeApis.ts";

const router = new Router();

router.get("/employees", getAllEmployees)
    .get("/employees/:id", getEmployeeById)
    .put("/employees/:id", updateEmployee)
    .post("/employees", addEmployee)
    .delete("/employees/:id", deleteEmployee);

export default router;