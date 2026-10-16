import React , {useEffect} from 'react'

const App = () => {
  const[formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: ""
  })
  useEffect(() => {
    console.log("Form Data updated", formData)
  }, [formData])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Registration Successfull");
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input name="name" type="text" placeholder='Enter your name' value = {formData.name} onChange = {handleChange}/>
        <br/>
        <input name ="email" type="email" placeholder='Enter your email' value = {formData.email} onChange = {handleChange}/>
        <br/>
        <input name = "password" type="password" placeholder='Enter your password' value = {formData.password} onChange = {handleChange}/>
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App