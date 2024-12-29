import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "femi",
      role: "developer",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "lase",
      role: "Girl Friend",
      img: "https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "bunmi",
      role: "Manager",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "ten",
      role: "Intern",
      img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "nine",
      role: "Senior",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p> You dont have persmission to see the Employees</p>
      )}
    </div>
  );
}

export default App;
