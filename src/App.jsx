import React,{useState} from 'react';
import './App.css';



const App = () =>{

    const [fullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });

    const onSubmits = (event) => {
        event.preventDefault();
        alert('Form submitted');
   

};


    const inputEvent =(event) =>{

        console.log(event.target.value);
        console.log(event.target.name);

        const {value,name} = event.target;

        setFullName( (preValue) =>{
            if(name === "fName")
            {
                return{
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:preValue.phone,
                };
               
             }  else  if(name === "lName"){
                return{
                    fname:preValue.fname,
                    lname:value,

                    email:preValue.email,
                    phone:preValue.phone,
                };
             }      
             else  if(name === "email"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    phone:preValue.phone,
                };
             }     
             else  if(name === "phone"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:value,
                };
             }      
        });
    };
    
 
    return(
    <>
    <div className="main_div">
        <form onSubmit={onSubmits}>
        <div>              
            <h1> Hello {fullName.fname} {fullName.lname} <span> 📝</span></h1>

            <p>{fullName.email} </p>
            <p>{fullName.phone} </p>

             <input type="text" placeholder="Enter your first name"
                    name='fName'
                     onChange={inputEvent}
                     value={fullName.fname}  
                    />
                    <br/>
                    <input type="text" placeholder="Enter your last name"
                    name='lName'
                    onChange={inputEvent
                    }
                    value={fullName.lname} 
                     />
                      <input type="email" placeholder="Enter your Email ID"
                    name='email'
                    onChange={inputEvent
                    }
                    value={fullName.lname} 
                     />
                      <input type="number" placeholder="Enter your Phone number"
                    name='phone'
                    onChange={inputEvent
                    }
                    value={fullName.lname} 
                     />
             <button type="submit" >SUBMIT   👍</button>
            </div>
        </form>
       
    </div>
    </>
    );

};

export default App;
