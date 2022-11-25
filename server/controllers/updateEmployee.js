
import Employee from "../modals/Employee.js";

import mongoose from "mongoose";
const updateEmployee = async (req , res) => {
    const {id} = req.params
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'No such Employee'})
    //   }

    try {
        const employee = await Employee.findOneAndUpdate({_id: id} , {...req.body})
       
        if (!employee) {
            return res.status(404).json({error: 'No such Employee'})
          }
                
        // res.status(200).json(employee)
        

    }catch(err){
        console.log(err)
    }
    

}
export default updateEmployee