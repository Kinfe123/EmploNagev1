import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
 

    
    const [employee , setEmployee]  = useState({})

    const { empid } = useParams();
    const navigate = useNavigate();
  
    
    useEffect(() => {

      
      fetch(`/api/v1/employee/${empid}`)
        .then(response => response.json())
        
        .then(data => setEmployee(data))
       
      
  
    }, []);

    const handleSubmit = (e) => {
      // e.preventDefault();
      fetch(`/api/v1/employee/${empid}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(employee)
        }).then(() => {
          navigate(-1);
            // console.log("data added" , msg);
            
        }).catch((err) => {
            console.log(err.message);
        })

    }
    const btnClicked = () => { 
     
      navigate(-1)

    }
    
  console.log(employee)
  
    const handleChange = (e) => {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    
   const back = () => {
     navigate('/')
   }

    return (
        <div className="create">
            <form className="create" onSubmit={handleSubmit}> 
       <h3>Edit a New Employee</h3>

       <label>Employee Name:</label>
     
      <input 
        type="text" 
        onChange={handleChange} 

        name="name"
  
        value={employee.name}
      />

      <label>Date Of Birth ('12/12/2001'):</label>
      <input 
        type="text" 
        name="dateOfBirth"
        onChange={handleChange} 
     
        value={employee.dateOfBirth}
      />
       <label>Gender :</label>
      <input 
        type="text" 
        name="gender"
        onChange={handleChange} 
        value={employee.gender}
      />

      <label>Salary: </label>
      <input 
        type="number" 
        name="salary"
        onChange={handleChange} 
      
        value={employee.salary}
      />

      <button onClick={btnClicked}>Update Employee</button>
      
   
    </form>
    <button onClick={back} className="btn">Back</button>
        </div>
    );
}

export default EditEmployee;