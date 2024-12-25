
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>)
        : (
          <p> You dont have persmission to see the Employees</p>
        )}
    </div>
  );
}

export default App;
