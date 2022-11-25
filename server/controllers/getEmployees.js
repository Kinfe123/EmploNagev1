import Employee from "../modals/Employee.js";


const getEmployees = async (req , res) => {
    

    try {
        const employee = await Employee.find({}).sort({createdAt: -1})
        res.status(200).json(employee)
        

    }catch(err){
        console.log(err)
    }
    

}
export default getEmployees