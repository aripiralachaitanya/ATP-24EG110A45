/*Assignments:
Create REST API for Product resource with below operations:

 
        1. Create new Product({productId,name,brand,price})
        2. Read all products
        3. Read all Product by brand
        4. Update a product
        5. Delete a product by id*/


import exp from 'express'
let app=exp()

//use body parser middleware
app.use(exp.json())
//set a port number
let port=3000
//assign the port number to the HTTP request
app.listen(port,()=> console.log("server is listening",port))




let products=[]
app.get('/products',(req,res)=>{
    res.json({message:"all the products",payload:products})
})
app.get('/products/:brand',(req,res)=>{
    let brandname=req.params.brand
    let filteredproducts=products.filter(productobj=>productobj.brand===brandname)
    if(filteredproducts.length===0){
        res.json({message:"no products found for the given brand"})
    }
    else{
        res.json({message:"filtered products",payload:filteredproducts})
    }
})
app.post('/products',(req,res)=>{
    let newproduct=req.body
    products.push(newproduct)
    res.json({message:"product is created"})
})
app.put('/products',(req,res)=>{
    let modifiedproduct=req.body
    let index=products.findIndex(productobj=>productobj.id===modifiedproduct.id)
    if (index===-1){
        return res.json({message:"product is not found"})
    }else{
        products.splice(index,1,modifiedproduct)
        res.json({message:"product updated"})
    }
})
app.delete('/products/:id',(req,res)=>{
   let idofurl=Number(req.params.id)
   let index=products.findIndex(productobj=>productobj.id===idofurl)
    if(index===-1){
        res.json({message:"product not found"})
    }
    else{
        products.splice(index,1)
        res.json({message:"product is deleted"})
    }
})
app.get('/products/:id',(req,res)=>{
    let productid=Number(req.params.id)
    let productdata=products.find(productobj=> productobj.id===productid)
    if(productdata===undefined){
        res.json({message:"product is not found"})
    }
    else{
        res.json({message:"product ",payload:productdata})
    }
})
