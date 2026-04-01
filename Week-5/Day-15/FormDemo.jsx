import { useForm } from "react-hook-form";

function FormDemo() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Form Submit handler
    const onFormSubmit=(obj)=>{
        console.log(obj)
    }
    
    return(
        <div>
            <h1 className="text-4xl text-center ">Form Demo</h1>
    
            <form onSubmit={handleSubmit(onFormSubmit)} className="max-w-md mx-auto mt-10" >
                <div className="p-4">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register("username", { required: true,minLength:4,validate:(v)=>v.trim.length!=0 })} id="username"  className="w-full border-2 border-gray-300 rounded-md p-2" />
                    {errors.username ?.type === 'required' && <p className="text-red-500">Username is required</p>}
                    {errors.username ?.type === 'minLength' && <p className="text-red-500">Username must be at least 4 characters</p>}
                    {errors.username ?.type === 'validate' && <p className="text-red-500">White Space IS Not Valid</p>}
                </div>

                 <div className="p-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email", { required: true })} id="email"  className="w-full border-2 border-gray-300 rounded-md p-2" />
                    {errors.email ?.type === 'required' && <p className="text-red-500">Email is required</p>}
                </div>

            
                 
                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 mx-auto rounded block">
                    Submit
                 </button>
            </form>
        </div>
    )
}

    export default FormDemo;