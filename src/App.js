import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee
              name=" femi"
              role="intern"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" joa"
              role={role}
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" lase"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" femi"
              role="intern"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" joa"
              role={role}
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" lase"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" femi"
              role="intern"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" joa"
              role={role}
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" lase"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" femi"
              role="intern"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" joa"
              role={role}
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name=" lase"
              img="https://images.pexels.com/photos/29852895/pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </>
      ) : (
        <p> You dont have persmission to see the Employees</p>
      )}
    </div>
  );
}

export default App;
