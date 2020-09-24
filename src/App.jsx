import React,{useState} from 'react';
import './App.css';



const App = () =>{

    const [fullName,setFullName] = useState({
        fname:"",
        lname:''
    });

    const onSubmits = (event) => {
        event.preventDefault();
        alert('Form submitted');
   

};


    const inputEvent =(event) =>{

        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFullName( (preValue) =>{
            if(name === "fName")
            {
                return{
                    fname:value,
                    lname:preValue.lname,
                };
               
             } else  if(name === "lName"){
                return{
                    fname:preValue.fname,
                    lname:value,

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
             <input type="text" placeholder="Enter your first name"
                    name='fName'
                     onChange={inputEvent}
                    //  value={fullName.fname}  
                    />
                    <br/>
                    <input type="text" placeholder="Enter your last name"
                    name='lName'
                    onChange={inputEvent
                    }
                   // value={fullName.lname} 
                     />
             <button type="submit" >SUBMIT   👍</button>
            </div>
        </form>
       
    </div>
    </>
    );

};

export default App;
/////git ccheck commit