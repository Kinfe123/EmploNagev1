import { useEffect, useState } from "react"

// components
import EmployeeDetails from "../components/EmployeeDetails"
import EmployeeForm from "../components/EmployeeForm"

const Home = () => {
  const [employees, setEmployees] = useState(null)

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch('/api/v1/employee')
      const json = await response.json()

      if (response.ok) {
        setEmployees(json)
      }
    }

    fetchEmployee()
  }, [employees])

  return (
    <div className="home">
      <div className="workouts">
        {employees && employees.map(employee=> (
          <EmployeeDetails employee={employee} id = {employee._id} key={employee._id} />
        ))}
      </div>
      <EmployeeForm />
    </div>
  )
}

export default Home