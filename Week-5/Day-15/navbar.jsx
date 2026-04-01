function Navbar(props){
    return(
        <div className="flex justify-between m-5 p-10  rounded-2xl  bg-pink-200">
         <div className="">
            <h2>Logo</h2>
         </div>
         <div>
            <ul className="flex gap-6">
                <li><a href="">Home</a></li>
                <li><a href="">Signup</a></li>
                <li><a href="">Login</a></li>
            </ul>
         </div>
        </div>
    )
}
export default Navbar