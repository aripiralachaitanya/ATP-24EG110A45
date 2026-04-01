function Product(props) {
  //State
  const { productObj } = props
  //Return a react element
  return (
    <div className="shadow-md p-4 rounded-4xl bg-gradient-to-r from-green-400 via-pink-500 to-blue-500">
      <h2 className="text-2xl text-blue-500 ">{productObj.title}</h2>
      <p className="font-bold">{productObj.price}</p>
      <p className="font-mono">{productObj.description}</p>
    </div>
  )
}

export default Product



