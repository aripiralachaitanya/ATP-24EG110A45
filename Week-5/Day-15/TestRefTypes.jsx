import {useState} from "react";

function TestRefTypes(){
    //state
    const [user,setUser]=useState({username:"chaitanya",age:19,city:"Hyd"})
    const [marks,setMarks]=useState([10,20,30])

    //Update user state
    const updateUser=()=>{
        setUser({...user,username:"Aripirala"})
    }
     
    //Update marks state
    const updateMarks=()=>{
        setMarks([...marks,40])
    }

    return(
        <div>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <p>Marks: {marks.join(", ")}</p>
            <button onClick={updateUser}>Update User</button>
            <button onClick={updateMarks}>Update Marks</button>
        </div>
    )
}

export default TestRefTypes;