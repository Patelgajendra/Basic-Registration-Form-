import React from 'react'

export default function Register(props) {
    
    
    let btnText,passBoxType;
    let btnClasses =["btn", "m-1"];
    if (props.showPass === true){ 
       btnClasses.push("btn btn-danger");
        btnText ="Hide Password";
        passBoxType = "text"
    }
    else{
        btnText = "Show Password";
        passBoxType = "password"
        btnClasses.push("btn btn-success");
    }
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
      <form action="" onSubmit={props.submit}>
       
       <div className='form-group'> 
        <label htmlFor="name">Name</label>:
       <input type="" name='name' required className='form-control' onInput={props.inputf}/>
       </div>
       <div className='form-group'> 
        <label htmlFor="email">Email</label>:
       <input type="email" name='email' required className='form-control'/>
       </div>
       <div className='form-group'> 
        <label htmlFor="password">Password</label>:
       <input type={passBoxType} name='password' required className='form-control'/>
       </div>
       <button type='submit' name='submit' className='btn btn-primary m-1' >Register</button>

       <button type='button' className={btnClasses.join(" ")} onClick={props.click}>{btnText}</button>
      
      </form>
    </div>
  )
}
