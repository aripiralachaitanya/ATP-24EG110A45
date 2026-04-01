function User(props) {
  const { userObj } = props
  return (
    <div className="border-2 p-4 rounded-4xl p-10 shadow-2xl bg-gradient-to-r from-white via-blue-200 to-blue-400">
      <img className="m-auto mb-5 rounded-4xl ring-2" src={userObj.image} alt="Image not found" />
      <h2 className=" align-middle font-bold ">{userObj.name}</h2>
      <p className="font-bold">{userObj.email}</p>
    </div>
  )
}
export default User
