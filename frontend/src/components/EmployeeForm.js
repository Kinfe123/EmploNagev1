import { useState } from 'react'
import Loader from './Loader/Loader'

const EmployeeForm = () => {
  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [salary, setSalary] = useState('')

  const [error , setError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const employee = {name, dateOfBirth, gender , salary}
    
    const response = await fetch('/api/v1/employee', {
      method: 'POST',
      body: JSON.stringify(employee),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setName('')
      setGender('')
      setSalary('')
      setDateOfBirth('')
      console.log('new workout added:', json)
    }

  }
 

  return (
    <form className="create" onSubmit={handleSubmit}>

     
      <h3>Add a New Employee</h3>

      <label>Employee Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

      <label>Date Of Birth ('12/12/2001'):</label>
      <input 
        type="text" 
        onChange={(e) => setDateOfBirth(e.target.value)} 
        value={dateOfBirth}
      />
       <label>Gender :</label>
      {/* <input 
        type="text" 
        onChange={(e) => setGender(e.target.value)} 
        value={gender}
      /> */}
       <select value={gender} onChange={e => setGender(e.target.value)}>
            <option>-- Select Gender --</option>
            
            <option>Male</option>
            <option>Female</option>
        </select>

      <label>Salary: </label>
      <input 
        type="number" 
        onChange={(e) => setSalary(e.target.value)} 
        value={salary} 
      />

      <button>Add Employee</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default EmployeeForm