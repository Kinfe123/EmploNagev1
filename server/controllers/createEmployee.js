import Employee from "../modals/Employee.js";
const createEmployee = async (req , res) => {
    const {name , dateOfBirth , gender , salary} = req.body
    try {
        const employee =  await Employee.create({name , dateOfBirth , gender , salary})
        res.json(employee)
    }catch(err){
        // cathc block for creating employee
        console.log(err)
    }



}
export default createEmployee