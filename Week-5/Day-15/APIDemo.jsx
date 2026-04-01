import {useState, useEffect} from 'react'

function ApIDemo(){
    console.log("API demo component")
    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(null);


    useEffect(()=>{
        setLoading(true);

        //A function to make API request
        async function getData(){
            try{
                const res=await fetch("https://jsonplaceholder.typicode.com/users");
                const userList=await res.json();
                //Update the state with the user list
                setUsers(userList);
            }catch(err){
                console.error("Error fetching user data:", err);
                setError(err)
            }
            finally{
                setLoading(false);
            }   
        }

        //call
        getData();
    },[])

    if(loading){
    return <div className='text-center mt-10 text-2xl text-green-500'>Loading...</div>
}
if(error){
    return <p className='text-center mt-10 text-2xl text-red-500'>Error: {error.message}</p>
}

    return(
        <div className='text-center mt-10'>
           <h1 className='text-4xl text-amber-300'>User List</h1>
           <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6'>
            {users.map(userobj=>(
                <div key={userobj.id} className='border p-4 m-2'>
                    <h2>{userobj.name}</h2>
                    <h2>{userobj.id}</h2>
                    <p>{userobj.address.street}</p>
                </div>
            ))}

           </div>
        </div>
    )
}
export default ApIDemo;