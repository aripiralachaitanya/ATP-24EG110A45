import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1);
    }

     const decrement=()=>{
        setCount(count-1);
    }

function reset(){
    setCount(0);
}
    console.log("counter component")

    return(
        <div className="text-center border p-10">
          <h1 className="text-6xl">Count:{count}</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>
            Increment
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>
            Decrement
          </button>
             <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>reset()}>
            reset
          </button>
        </div>
    )
}

export default Counter;