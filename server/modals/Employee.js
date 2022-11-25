
import {mongoose} from 'mongoose'

const Schema = mongoose.Schema 
const employeeSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    dateOfBirth: {
        type: String,
        required: true,
        
        // type:Number,
        // required:true
    },
    gender: {
        type:String,
        required:true
    },

    salary: {
        type:Number,
        required:true
    },




} )

// //Name
// • Date of birth
// • Gender
// • Salary

export default mongoose.model('Employee' , employeeSchema)