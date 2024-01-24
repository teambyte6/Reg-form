import {useState} from "react"; 
import './App.css';
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">Password should have at least 8 characters</p> 
  ); 
 }; 

function App() {
  

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value:"",
    isTouched:false,
    
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return(
      fname && 
      validateEmail(email) && 
      password.value.length >= 8 && 
      role !== "role"
    );
  };
  const clearForm = () => {
    
      setFname("");
      setLname("");
      setEmail("");
      setPassword({
        value:"",
        isTouched:false,
      });
      setRole("role");
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created!!");
    clearForm();
  };


  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name : </label>
          <input 
            value={fname}
            onChange={(e) => {
              setFname(e.target.value)
            }} 
            placeholder="First name"
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input value={lname} onChange={(e) => {setLname(e.target.value)}} placeholder="Last name" />
        </div>
        <div>
          <label>Email Address : </label>
          <input value={email} onChange = {(e) => {setEmail(e.target.value)}} placeholder="Email" />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" value={password.value} onChange={(e) => {setPassword({...password,value:e.target.value})}}
          onBlur={() => {
            setPassword({...password, isTouched:true})
          }}
          placeholder="Password" />
          {password.isTouched && password.value.length < 8 ? ( 
              <PasswordErrorMessage /> 
            ) : null} 
        </div>
        <div>
          <label>Role : </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Role"> Role</option>
            <option value="bussiness"> Bussiness</option>
            <option value="individual">Individual</option>
          </select>
        </div>
        <div>
          <button type="submit" disabled={!getIsFormValid()}>Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default App;
