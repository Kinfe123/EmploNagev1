import DeleteEmployee from "./DeleteEmployee"


import { useNavigate} from "react-router-dom"
const EmployeeDetails = (props) => {
  const {id , employee} = props
  const navigate = useNavigate();

  const FunEdit=(id)=>{
    navigate('/edit/'+id)
  }
  
  return (

    <div className="workout-details">
      <h4>{employee.name}</h4>
      <p><strong>Date Of Birth : </strong>{employee.dateOfBirth}</p>
      <p><strong>Gender: </strong>{employee.gender}</p>
      <p><strong>Salary: $</strong>{employee.salary}</p>
      

      
      <button className="btn" onClick={()=>FunEdit(id)}>Edit</button>
      
      <DeleteEmployee ids={id} />
      
      
    </div>
  )
}

export default EmployeeDetails