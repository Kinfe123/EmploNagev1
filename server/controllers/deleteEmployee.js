import Employee from "../modals/Employee.js";
import mongoose from "mongoose";

const deleteEmployee = async (req , res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such employee'})
      }

    try {
        const employee = await Employee.findOneAndDelete({_id: id})
        if (!employee) {
            return res.status(404).json({error: 'No such employee'})
          }
              
        res.status(200).json(employee)
        

    }catch(err){
        console.log(err)
    }
    

}
export default deleteEmployee